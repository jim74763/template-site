import { z } from "zod";

import { iconMap, type IconName } from "@/components/icon-map";

const iconNames = Object.keys(iconMap) as [IconName, ...IconName[]];

export const iconNameSchema = z.enum(iconNames);

export const copySchema = z.string().min(1).max(600);
export const titleSchema = z.string().min(1).max(160);
export const labelSchema = z.string().min(1).max(80);
export const imagePathSchema = z.string().min(1).max(300);
export const imageDimensionSchema = z.number().int().positive().max(10_000);

export const businessStorySchema = z.strictObject({
  eyebrow: labelSchema,
  title: titleSchema,
  paragraphs: z.array(copySchema).length(2),
});

export const businessFooterSchema = z.strictObject({
  title: titleSchema,
  text: copySchema,
  openingHours: z
    .strictObject({
      title: titleSchema,
      rows: z
        .array(
          z.strictObject({
            days: labelSchema,
            hours: labelSchema,
          }),
        )
        .min(1)
        .max(7),
    })
    .nullable(),
  location: z
    .strictObject({
      title: titleSchema,
      address: copySchema,
      latitude: z.number().min(-90).max(90),
      longitude: z.number().min(-180).max(180),
      zoom: z.number().int().min(1).max(18),
    })
    .nullable(),
});
