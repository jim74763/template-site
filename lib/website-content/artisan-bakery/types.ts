import type { z } from "zod";

import type { bakeryContentSchema, bakeryFeatureSchema, bakeryProductSchema } from "./schema";

export type BakeryFeature = z.infer<typeof bakeryFeatureSchema>;
export type BakeryProduct = z.infer<typeof bakeryProductSchema>;
export type BakeryData = z.infer<typeof bakeryContentSchema>;
