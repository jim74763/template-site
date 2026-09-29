import { z } from "zod";

import {
  copySchema,
  iconNameSchema,
  imagePathSchema,
  labelSchema,
  titleSchema,
} from "@/lib/website-content/shared/schema";

export const dentalServiceSchema = z.strictObject({
  icon: iconNameSchema,
  title: titleSchema,
  description: copySchema,
});

export const dentalContentSchema = z.strictObject({
  hero: z.strictObject({
    title: titleSchema,
    subtitle: copySchema,
    ctaLabel: labelSchema,
  }),
  services: z.array(dentalServiceSchema).length(4),
  about: z.strictObject({
    title: titleSchema,
    text: copySchema,
    image: imagePathSchema,
    ctaLabel: labelSchema,
  }),
  testimonial: z.strictObject({
    quote: copySchema,
    author: labelSchema,
  }),
  cta: z.strictObject({
    title: titleSchema,
    text: copySchema,
    buttonLabel: labelSchema,
  }),
});
