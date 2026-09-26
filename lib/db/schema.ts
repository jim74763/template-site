import { jsonb, pgTable, text, timestamp, uniqueIndex, uuid } from "drizzle-orm/pg-core";

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

// Generated website content, one per lead.
export const generatedSites = pgTable(
  "generated_sites",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    leadId: text("lead_id")
      .notNull()
      .references(() => leads.id, { onDelete: "cascade" }),
    template: text("template").$type<TemplateKey>().notNull(),
    content: jsonb("content").notNull(),
    model: text("model"),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [uniqueIndex("generated_sites_lead_id_idx").on(t.leadId)],
);

export type Lead = typeof leads.$inferSelect;
export type GeneratedSite = typeof generatedSites.$inferSelect;
