import type { z } from "zod";

import type {
  organicMarketCategorySchema,
  organicMarketContentSchema,
  organicMarketFeatureSchema,
} from "./schema";

export type OrganicMarketFeature = z.infer<typeof organicMarketFeatureSchema>;
export type OrganicMarketCategory = z.infer<typeof organicMarketCategorySchema>;
export type OrganicMarketData = z.infer<typeof organicMarketContentSchema>;
