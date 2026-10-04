import { z } from "zod";

import {
  businessFooterSchema,
  businessStorySchema,
  copySchema,
  iconNameSchema,
  imageDimensionSchema,
  imagePathSchema,
  labelSchema,
  titleSchema,
} from "@/lib/website-content/shared/schema";

export const organicMarketFeatureSchema = z.strictObject({
  icon: iconNameSchema,
  title: titleSchema,
  description: copySchema,
});

export const organicMarketCategorySchema = z.strictObject({
  image: imagePathSchema,
  name: titleSchema,
  description: copySchema,
  width: imageDimensionSchema,
  height: imageDimensionSchema,
});

export const organicMarketContentSchema = z.strictObject({
  hero: z.strictObject({
    title: titleSchema,
    subtitle: copySchema,
    backgroundImage: imagePathSchema,
    ctaLabel: labelSchema,
  }),
  features: z.array(organicMarketFeatureSchema).length(4),
  story: businessStorySchema,
  categoriesSection: z.strictObject({
    title: titleSchema,
    categories: z.array(organicMarketCategorySchema).length(3),
  }),
  cta: z.strictObject({
    title: titleSchema,
    text: copySchema,
    buttonLabel: labelSchema,
  }),
  footer: businessFooterSchema,
});
