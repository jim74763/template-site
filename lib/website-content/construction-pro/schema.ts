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

export const constructionFeatureSchema = z.strictObject({
  icon: iconNameSchema,
  title: titleSchema,
  description: copySchema,
});

export const constructionHomeProjectSchema = z.strictObject({
  image: imagePathSchema,
  title: titleSchema,
  category: labelSchema,
  width: imageDimensionSchema,
  height: imageDimensionSchema,
});

export const constructionHomeContentSchema = z.strictObject({
  hero: z.strictObject({
    title: titleSchema,
    subtitle: copySchema,
    backgroundImage: imagePathSchema,
    primaryCtaLabel: labelSchema,
    secondaryCtaLabel: labelSchema,
  }),
  features: z.array(constructionFeatureSchema).length(4),
  story: businessStorySchema,
  featuredProjectsTitle: titleSchema,
  featuredProjects: z.array(constructionHomeProjectSchema).length(3),
});

export const constructionContactContentSchema = z.strictObject({
  hero: z.strictObject({
    title: titleSchema,
    subtitle: copySchema,
  }),
  formTitle: titleSchema,
  contactInfo: z.strictObject({
    phone: labelSchema,
    email: labelSchema,
    address: copySchema,
  }),
  businessHours: z.array(
    z.strictObject({
      label: labelSchema,
      hours: labelSchema,
    }),
  ).length(3),
  serviceAreas: z.strictObject({
    title: titleSchema,
    text: copySchema,
  }),
});

export const constructionProjectSchema = constructionHomeProjectSchema.extend({
  description: copySchema,
  details: z.strictObject({
    location: labelSchema,
    duration: labelSchema,
    size: labelSchema,
  }),
});

export const constructionProjectsContentSchema = z.strictObject({
  hero: z.strictObject({
    title: titleSchema,
    subtitle: copySchema,
  }),
  projects: z.array(constructionProjectSchema).length(3),
});

export const constructionContentSchema = z.strictObject({
  home: constructionHomeContentSchema,
  contact: constructionContactContentSchema,
  projects: constructionProjectsContentSchema,
});
