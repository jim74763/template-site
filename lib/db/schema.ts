import { sql } from "drizzle-orm";
import { check, integer, jsonb, pgTable, text, timestamp, uniqueIndex, uuid } from "drizzle-orm/pg-core";

import type { TemplateKey } from "@/lib/site-generator/templates";

// Snapshot of the Instantly lead the site was generated from.
export const leads = pgTable("leads", {
  id: text("id").primaryKey(), // Instantly lead id
  email: text("email"),
  firstName: text("first_name"),
  lastName: text("last_name"),
  companyName: text("company_name"),
  website: text("website"),
  phone: text("phone"),
  raw: jsonb("raw").$type<Record<string, unknown>>().notNull(),
  fetchedAt: timestamp("fetched_at", { withTimezone: true }).defaultNow().notNull(),
});

export const generatedSites = pgTable(
  "generated_sites",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    leadId: text("lead_id")
      .notNull()
      .references(() => leads.id, { onDelete: "cascade" }),
    template: text("template").$type<TemplateKey>().notNull(),
    schemaVersion: integer("schema_version").default(3).notNull(),
    content: jsonb("content").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [
    uniqueIndex("generated_sites_lead_id_idx").on(t.leadId),
    check(
      "generated_sites_template_check",
      sql`${t.template} in ('dental-care', 'artisan-bakery', 'organic-market', 'whole-foods', 'construction-pro')`,
    ),
    check("generated_sites_schema_version_check", sql`${t.schemaVersion} >= 0`),
    check("generated_sites_content_object_check", sql`jsonb_typeof(${t.content}) = 'object'`),
  ],
);

export type Lead = typeof leads.$inferSelect;
export type GeneratedSite = typeof generatedSites.$inferSelect;
