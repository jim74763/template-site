import "server-only";
import type { Lead as InstantlyLead } from "@instantlyai/sdk";
import { z } from "zod";
import { iconMap } from "@/components/icon-map";
import { chatStructured } from "@/lib/ai/openrouter/chat-structured";
import { mergeGenerated } from "./merge";
import { parseTemplateContent, templateKeys, templates, type SiteContent, type TemplateKey } from "./templates";


export async function pickTemplate(lead: InstantlyLead): Promise<TemplateKey> {
  try {
    const options = templateKeys.map((k) => `- ${k}: ${templates[k].description}`).join("\n");
    const { template } = await chatStructured(
      [
        {
          role: "system",
          content: `Pick the website template that best fits this business. Options:\n${options}`,
        },
        { role: "user", content: JSON.stringify(lead) },
      ],
      "template_selection",
      z.object({ template: z.enum(templateKeys) }),
    );
    return template;
  } catch (err) {
    console.error("Template pick failed, using default", err);
  }
  return "dental-care";
}

export async function generateContent(lead: InstantlyLead, template: TemplateKey): Promise<SiteContent> {
  const definition = templates[template];
  const { defaults } = definition;

  const generated = await chatStructured(
    [
      {
        role: "system",
        content: [
          "You write website copy for small local businesses.",
          "Rewrite every text field of the example JSON for the business described by the user.",
          "Keep the exact same JSON structure, keys and array lengths.",
          "Use the story fields for two complementary paragraphs about the business's approach and customer experience.",
          "Do not change image paths, width or height.",
          `For "icon" fields use only one of: ${Object.keys(iconMap).join(", ")}.`,
          "Write in the language that fits the business (Dutch for a Dutch business).",
          "Never use em dashes.",
          "Use only facts from the business data; keep unsupported claims general and set openingHours or location to null unless exact details, including coordinates, are present.",
        ].join("\n"),
      },
      {
        role: "user",
        content: `Business:\n${JSON.stringify(lead)}\n\nExample JSON:\n${JSON.stringify(defaults, null, 2)}`,
      },
    ],
    `${template.replaceAll("-", "_")}_content`,
    definition.schema,
  );

  const merged = mergeGenerated(defaults, generated);
  let content: SiteContent["content"];
  try {
    content = parseTemplateContent(template, merged);
  } catch (error) {
    console.error("Generated content failed validation after merge; using template defaults", error);
    content = defaults;
  }
  return { template, content } as SiteContent;
}
