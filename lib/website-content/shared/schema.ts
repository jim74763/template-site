import { z } from "zod";

import { iconMap, type IconName } from "@/components/shared/icon-map";

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
