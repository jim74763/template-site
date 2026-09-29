import { z } from "zod";

import bakeryData from "@/lib/website-content/artisan-bakery/data";
import { bakeryContentSchema } from "@/lib/website-content/artisan-bakery/schema";
import constructionData from "@/lib/website-content/construction-pro/data";
import { constructionHomeContentSchema } from "@/lib/website-content/construction-pro/schema";
import dentalData from "@/lib/website-content/dental-care/data";
import { dentalContentSchema } from "@/lib/website-content/dental-care/schema";
import organicMarketData from "@/lib/website-content/organic-market/data";
import { organicMarketContentSchema } from "@/lib/website-content/organic-market/schema";
import wholeFoodsData from "@/lib/website-content/whole-foods/data";
import { wholeFoodsHomeContentSchema } from "@/lib/website-content/whole-foods/schema";

import { mergeGenerated } from "./merge";

export const templates = {
  "dental-care": {
    version: 1,
    schema: dentalContentSchema,
    description: "Healthcare and professional services: dentists, clinics, physiotherapy, salons, consultants.",
    keywords: ["dental", "dentist", "tandarts", "clinic", "kliniek", "health", "zorg", "fysio", "salon", "kapper"],
    defaults: dentalData,
  },
  "artisan-bakery": {
    version: 1,
    schema: bakeryContentSchema,
    description: "Bakeries, cafes, patisseries, coffee bars, lunchrooms and restaurants.",
    keywords: ["bakery", "bakkerij", "bakker", "cafe", "coffee", "koffie", "patisserie", "lunch", "restaurant", "cake", "taart"],
    defaults: bakeryData,
  },
  "organic-market": {
    version: 1,
    schema: organicMarketContentSchema,
    description: "Grocery stores, organic shops, delis, farm shops and local retail.",
    keywords: ["organic", "biologisch", "market", "markt", "grocery", "supermarkt", "deli", "farm", "boerderij", "shop", "winkel"],
    defaults: organicMarketData,
  },
  "whole-foods": {
    version: 1,
    schema: wholeFoodsHomeContentSchema,
    description: "Health food, sustainable food brands, nutrition and wellness businesses.",
    keywords: ["whole food", "health food", "natuurvoeding", "reform", "vegan", "sustainable", "duurzaam", "wellness", "nutrition"],
    defaults: wholeFoodsData.home,
  },
  "construction-pro": {
    version: 1,
    schema: constructionHomeContentSchema,
    description: "Construction, contractors, renovation, plumbing, electricians, roofing and other trades.",
    keywords: ["construction", "bouw", "aannemer", "contractor", "renovat", "loodgieter", "plumb", "electric", "elektr", "roof", "dak", "schilder", "timmer"],
    defaults: constructionData.home,
  },
} as const;

export type TemplateKey = keyof typeof templates;

export type TemplateContentMap = {
  [K in TemplateKey]: z.infer<(typeof templates)[K]["schema"]>;
};

export type SiteContent = {
  [K in TemplateKey]: { template: K; content: TemplateContentMap[K] };
}[TemplateKey];

export const templateKeys = Object.keys(templates) as TemplateKey[];

export function isTemplateKey(value: unknown): value is TemplateKey {
  return typeof value === "string" && value in templates;
}

export function parseTemplateContent<K extends TemplateKey>(
  template: K,
  content: unknown,
): TemplateContentMap[K] {
  return templates[template].schema.parse(content) as TemplateContentMap[K];
}

export function parseStoredSite(template: unknown, schemaVersion: number, content: unknown): SiteContent {
  if (!isTemplateKey(template)) throw new Error(`Unknown website template: ${String(template)}`);

  const definition = templates[template];
  if (schemaVersion === 0) {
    // Version 0 rows predate runtime schemas. Reapply the original merge rules so
    // malformed values fall back to trusted defaults without discarding valid copy.
    return { template, content: mergeGenerated(definition.defaults, content) } as SiteContent;
  }

  if (schemaVersion !== definition.version) {
    throw new Error(
      `Unsupported schema version ${schemaVersion} for ${template}; expected ${definition.version}`,
    );
  }

  return { template, content: parseTemplateContent(template, content) } as SiteContent;
}
