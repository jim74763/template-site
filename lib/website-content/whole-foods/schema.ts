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

export const wholeFoodsFeatureSchema = z.strictObject({
  icon: iconNameSchema,
  title: titleSchema,
  description: copySchema,
});

export const wholeFoodsHomeContentSchema = z.strictObject({
  hero: z.strictObject({
    title: titleSchema,
    subtitle: copySchema,
    backgroundImage: imagePathSchema,
    primaryCtaLabel: labelSchema,
    secondaryCtaLabel: labelSchema,
  }),
  features: z.array(wholeFoodsFeatureSchema).length(4),
  story: businessStorySchema,
  footer: businessFooterSchema,
});

export const wholeFoodsPillarSchema = z.strictObject({
  icon: iconNameSchema,
  title: titleSchema,
  text: copySchema,
});

export const wholeFoodsAboutContentSchema = z.strictObject({
  story: z.strictObject({
    title: titleSchema,
    intro: copySchema,
  }),
  pillars: z.array(wholeFoodsPillarSchema).length(3),
  join: z.strictObject({
    image: imagePathSchema,
    title: titleSchema,
    text: copySchema,
    ctaLabel: labelSchema,
  }),
});

export const wholeFoodsProductItemSchema = z.strictObject({
  name: titleSchema,
  image: imagePathSchema,
  width: imageDimensionSchema,
  height: imageDimensionSchema,
  price: labelSchema,
  description: copySchema,
});

export const wholeFoodsProductCategorySchema = z.strictObject({
  category: titleSchema,
  items: z.array(wholeFoodsProductItemSchema).length(2),
});

export const wholeFoodsProductsContentSchema = z.strictObject({
  pageTitle: titleSchema,
  categories: z.array(wholeFoodsProductCategorySchema).length(2),
});

export const wholeFoodsContentSchema = z.strictObject({
  home: wholeFoodsHomeContentSchema,
  about: wholeFoodsAboutContentSchema,
  products: wholeFoodsProductsContentSchema,
});
