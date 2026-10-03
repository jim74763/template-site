import { z } from "zod";

import {
  businessStorySchema,
  copySchema,
  iconNameSchema,
  imageDimensionSchema,
  imagePathSchema,
  labelSchema,
  titleSchema,
} from "@/lib/website-content/shared/schema";

export const bakeryFeatureSchema = z.strictObject({
  icon: iconNameSchema,
  title: titleSchema,
  description: copySchema,
});

export const bakeryProductSchema = z.strictObject({
  image: imagePathSchema,
  name: titleSchema,
  description: copySchema,
  width: imageDimensionSchema,
  height: imageDimensionSchema,
});

export const bakeryContentSchema = z.strictObject({
  hero: z.strictObject({
    title: titleSchema,
    subtitle: copySchema,
    backgroundImage: imagePathSchema,
    ctaLabel: labelSchema,
  }),
  features: z.array(bakeryFeatureSchema).length(4),
  story: businessStorySchema,
  productsSection: z.strictObject({
    title: titleSchema,
    products: z.array(bakeryProductSchema).length(3),
  }),
  cta: z.strictObject({
    title: titleSchema,
    text: copySchema,
    buttonLabel: labelSchema,
  }),
});
