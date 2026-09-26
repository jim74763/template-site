import "server-only";

import { eq } from "drizzle-orm";
import { cache } from "react";

import { iconMap } from "@/components/shared/icon-map";
import { getDb, schema } from "@/lib/db";
import { getInstantlyLead, type InstantlyLead } from "@/lib/instantly";
import { chatJson, OPENROUTER_MODEL } from "@/lib/openrouter";

import { mergeGenerated } from "./merge";
import { isTemplateKey, templateKeys, templates, type SiteContent, type TemplateKey } from "./templates";

export interface LeadSite {
  companyName: string;
  site: SiteContent;
}

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function leadSummary(lead: InstantlyLead) {
  return {
    companyName: lead.company_name,
    website: lead.website ?? lead.company_domain,
    contactName: [lead.first_name, lead.last_name].filter(Boolean).join(" ") || undefined,
    phone: lead.phone,
    email: lead.email,
    personalization: lead.personalization,
    customFields: lead.payload,
  };
}

async function pickTemplate(lead: InstantlyLead): Promise<TemplateKey> {
  const haystack = JSON.stringify(leadSummary(lead)).toLowerCase();
  const byKeyword = templateKeys.find((k) => templates[k].keywords.some((w) => haystack.includes(w)));
  if (byKeyword) return byKeyword;

  try {
    const options = templateKeys.map((k) => `- ${k}: ${templates[k].description}`).join("\n");
    const { template } = await chatJson<{ template?: string }>([
      {
        role: "system",
        content: `Pick the website template that best fits this business. Options:\n${options}\nReply as JSON: {"template": "<key>"}`,
      },
      { role: "user", content: JSON.stringify(leadSummary(lead)) },
    ]);
    if (isTemplateKey(template)) return template;
  } catch (err) {
    console.error("Template pick failed, using default", err);
  }
  return "dental-care";
}

async function generateContent(lead: InstantlyLead, template: TemplateKey): Promise<SiteContent> {
  const defaults = templates[template].defaults;

  const generated = await chatJson<unknown>([
    {
      role: "system",
      content: [
        "You write website copy for small local businesses.",
        "Rewrite every text field of the example JSON for the business described by the user.",
        "Keep the exact same JSON structure, keys and array lengths.",
        "Do not change image paths, width or height.",
        `For "icon" fields use only one of: ${Object.keys(iconMap).join(", ")}.`,
        "Write in the language that fits the business (Dutch for a Dutch business).",
        "Never invent facts like awards, prices, years or reviews that are not in the lead data; keep claims general.",
        "Never use em dashes.",
        "Reply with the JSON object only.",
      ].join("\n"),
    },
    {
      role: "user",
      content: `Business:\n${JSON.stringify(leadSummary(lead), null, 2)}\n\nExample JSON:\n${JSON.stringify(defaults, null, 2)}`,
    },
  ]);

  return { template, content: mergeGenerated(defaults, generated) } as SiteContent;
}

/**
 * Returns the stored site for a lead, or fetches the lead from Instantly,
 * generates content with OpenRouter and stores both on first visit.
 * Returns null when the id is invalid or unknown to Instantly.
 */
export const getOrCreateLeadSite = cache(async (leadId: string): Promise<LeadSite | null> => {
  if (!UUID_RE.test(leadId)) return null;

  const db = getDb();

  const existing = await db
    .select({ site: schema.generatedSites, companyName: schema.leads.companyName })
    .from(schema.generatedSites)
    .innerJoin(schema.leads, eq(schema.leads.id, schema.generatedSites.leadId))
    .where(eq(schema.generatedSites.leadId, leadId))
    .limit(1);

  if (existing[0]) {
    const { site, companyName } = existing[0];
    return {
      companyName: companyName ?? "",
      site: { template: site.template, content: site.content } as SiteContent,
    };
  }

  const lead = await getInstantlyLead(leadId);
  if (!lead) return null;

  const template = await pickTemplate(lead);
  const site = await generateContent(lead, template);

  await db
    .insert(schema.leads)
    .values({
      id: leadId,
      email: lead.email ?? null,
      firstName: lead.first_name ?? null,
      lastName: lead.last_name ?? null,
      companyName: lead.company_name ?? null,
      website: lead.website ?? lead.company_domain ?? null,
      phone: lead.phone ?? null,
      raw: lead,
    })
    .onConflictDoNothing();

  // If two first visits race, the first insert wins and both render the stored row.
  const [stored] = await db
    .insert(schema.generatedSites)
    .values({ leadId, template: site.template, content: site.content, model: OPENROUTER_MODEL })
    .onConflictDoNothing()
    .returning();

  if (!stored) {
    const [winner] = await db
      .select()
      .from(schema.generatedSites)
      .where(eq(schema.generatedSites.leadId, leadId))
      .limit(1);
    return {
      companyName: lead.company_name ?? "",
      site: { template: winner.template, content: winner.content } as SiteContent,
    };
  }

  return { companyName: lead.company_name ?? "", site };
});
