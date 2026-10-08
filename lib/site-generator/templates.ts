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

export const templates = {
  "dental-care": {
    version: 3,
    schema: dentalContentSchema,
    description: "Healthcare and professional services: dentists, clinics, physiotherapy, salons, consultants.",
    defaults: dentalData,
  },
  "artisan-bakery": {
    version: 3,
    schema: bakeryContentSchema,
    description: "Bakeries, cafes, patisseries, coffee bars, lunchrooms and restaurants.",
    defaults: bakeryData,
  },
  "organic-market": {
    version: 3,
    schema: organicMarketContentSchema,
    description: "Grocery stores, organic shops, delis, farm shops and local retail.",
    defaults: organicMarketData,
  },
  "whole-foods": {
    version: 3,
    schema: wholeFoodsHomeContentSchema,
    description: "Health food, sustainable food brands, nutrition and wellness businesses.",
    defaults: wholeFoodsData.home,
  },
  "construction-pro": {
    version: 3,
    schema: constructionHomeContentSchema,
    description: "Construction, contractors, renovation, plumbing, electricians, roofing and other trades.",
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
