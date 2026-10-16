import {
  isTemplateKey,
  parseTemplateContent,
  templates,
  type SiteContent,
} from './templates'

export function parseStoredSite(
  template: unknown,
  schemaVersion: number,
  content: unknown,
): SiteContent {
  if (!isTemplateKey(template))
    throw new Error(`Unknown website template: ${String(template)}`)

  const definition = templates[template]
  if (schemaVersion !== definition.version) {
    throw new Error(
      `Unsupported schema version ${schemaVersion} for ${template}; expected ${definition.version}`,
    )
  }

  return {
    template,
    content: parseTemplateContent(template, content),
  } as SiteContent
}
