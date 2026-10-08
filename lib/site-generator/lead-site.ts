import "server-only";

import { cache } from "react";

import { getInstantlyLead } from "@/lib/instantly/lead-by-id";

import { generateContent, pickTemplate } from "./generation";
import { findLeadSite, saveLeadSite } from "./storage";
import type { SiteContent } from "./templates";

export interface LeadSite {
  companyName: string;
  site: SiteContent;
}

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export const getOrCreateLeadSite = cache(async (leadId: string): Promise<LeadSite | null> => {
  if (!UUID_RE.test(leadId)) return null;

  const existing = await findLeadSite(leadId);
  if (existing) return existing;

  const lead = await getInstantlyLead(leadId);
  if (!lead) return null;

  const template = await pickTemplate(lead);
  const site = await generateContent(lead, template);
  return saveLeadSite(leadId, lead, site);
});
