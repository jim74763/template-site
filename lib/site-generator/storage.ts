import 'server-only'

import type { Lead as InstantlyLead } from '@instantlyai/sdk'
import { and, eq, not, or } from 'drizzle-orm'

import { getDb, schema } from '@/lib/db'

import type { LeadSite } from './lead-site'
import { parseStoredSite } from './stored-content'
import { isTemplateKey, templates, type SiteContent } from './templates'

export async function findLeadSite(leadId: string): Promise<LeadSite | null> {
  const db = getDb()

  const existing = await db
    .select({
      site: schema.generatedSites,
      companyName: schema.leads.companyName,
    })
    .from(schema.generatedSites)
    .innerJoin(schema.leads, eq(schema.leads.id, schema.generatedSites.leadId))
    .where(eq(schema.generatedSites.leadId, leadId))
    .limit(1)

  if (existing[0]) {
    const { site, companyName } = existing[0]
    if (
      !isTemplateKey(site.template) ||
      site.schemaVersion !== templates[site.template].version
    )
      return null

    return {
      companyName: companyName ?? '',
      site: parseStoredSite(site.template, site.schemaVersion, site.content),
    }
  }

  return null
}

export async function saveLeadSite(
  leadId: string,
  lead: InstantlyLead,
  site: SiteContent,
): Promise<LeadSite> {
  const db = getDb()

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
      raw: { ...lead },
    })
    .onConflictDoUpdate({
      target: schema.leads.id,
      set: {
        companyName: lead.company_name ?? null,
        raw: { ...lead },
      },
    })

  const [stored] = await db
    .insert(schema.generatedSites)
    .values({
      leadId,
      template: site.template,
      schemaVersion: templates[site.template].version,
      content: site.content,
    })
    .onConflictDoUpdate({
      target: schema.generatedSites.leadId,
      set: {
        template: site.template,
        schemaVersion: templates[site.template].version,
        content: site.content,
        updatedAt: new Date(),
      },
      // Preserve a current row if another request finished generating first.
      setWhere: not(
        or(
          ...Object.entries(templates).map(([template, definition]) =>
            and(
              eq(
                schema.generatedSites.template,
                template as SiteContent['template'],
              ),
              eq(schema.generatedSites.schemaVersion, definition.version),
            ),
          ),
        )!,
      ),
    })
    .returning()

  if (!stored) {
    const [winner] = await db
      .select()
      .from(schema.generatedSites)
      .where(eq(schema.generatedSites.leadId, leadId))
      .limit(1)
    return {
      companyName: lead.company_name ?? '',
      site: parseStoredSite(
        winner.template,
        winner.schemaVersion,
        winner.content,
      ),
    }
  }

  return { companyName: lead.company_name ?? '', site }
}
