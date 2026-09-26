import bakeryData from "@/lib/website-content/artisan-bakery/data";
import type { BakeryData } from "@/lib/website-content/artisan-bakery/types";
import constructionData from "@/lib/website-content/construction-pro/data";
import type { ConstructionHomeData } from "@/lib/website-content/construction-pro/types";
import dentalData from "@/lib/website-content/dental-care/data";
import type { DentalData } from "@/lib/website-content/dental-care/types";
import organicMarketData from "@/lib/website-content/organic-market/data";
import type { OrganicMarketData } from "@/lib/website-content/organic-market/types";
import wholeFoodsData from "@/lib/website-content/whole-foods/data";
import type { WholeFoodsHomeData } from "@/lib/website-content/whole-foods/types";

export interface TemplateContentMap {
  "dental-care": DentalData;
  "artisan-bakery": BakeryData;
  "organic-market": OrganicMarketData;
  "whole-foods": WholeFoodsHomeData;
  "construction-pro": ConstructionHomeData;
}

export type TemplateKey = keyof TemplateContentMap;

export type SiteContent = {
  [K in TemplateKey]: { template: K; content: TemplateContentMap[K] };
}[TemplateKey];

interface TemplateInfo<K extends TemplateKey> {
  description: string;
  keywords: string[];
  defaults: TemplateContentMap[K];
}

export const templates: { [K in TemplateKey]: TemplateInfo<K> } = {
  "dental-care": {
    description: "Healthcare and professional services: dentists, clinics, physiotherapy, salons, consultants.",
    keywords: ["dental", "dentist", "tandarts", "clinic", "kliniek", "health", "zorg", "fysio", "salon", "kapper"],
    defaults: dentalData,
  },
  "artisan-bakery": {
    description: "Bakeries, cafes, patisseries, coffee bars, lunchrooms and restaurants.",
    keywords: ["bakery", "bakkerij", "bakker", "cafe", "coffee", "koffie", "patisserie", "lunch", "restaurant", "cake", "taart"],
    defaults: bakeryData,
  },
  "organic-market": {
    description: "Grocery stores, organic shops, delis, farm shops and local retail.",
    keywords: ["organic", "biologisch", "market", "markt", "grocery", "supermarkt", "deli", "farm", "boerderij", "shop", "winkel"],
    defaults: organicMarketData,
  },
  "whole-foods": {
    description: "Health food, sustainable food brands, nutrition and wellness businesses.",
    keywords: ["whole food", "health food", "natuurvoeding", "reform", "vegan", "sustainable", "duurzaam", "wellness", "nutrition"],
    defaults: wholeFoodsData.home,
  },
  "construction-pro": {
    description: "Construction, contractors, renovation, plumbing, electricians, roofing and other trades.",
    keywords: ["construction", "bouw", "aannemer", "contractor", "renovat", "loodgieter", "plumb", "electric", "elektr", "roof", "dak", "schilder", "timmer"],
    defaults: constructionData.home,
  },
};

export const templateKeys = Object.keys(templates) as TemplateKey[];

export function isTemplateKey(value: unknown): value is TemplateKey {
  return typeof value === "string" && value in templates;
}
