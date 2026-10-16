import type { z } from 'zod'

import type {
  constructionContactContentSchema,
  constructionContentSchema,
  constructionFeatureSchema,
  constructionHomeContentSchema,
  constructionHomeProjectSchema,
  constructionProjectSchema,
  constructionProjectsContentSchema,
} from './schema'

export type ConstructionFeature = z.infer<typeof constructionFeatureSchema>
export type ConstructionHomeProject = z.infer<
  typeof constructionHomeProjectSchema
>
export type ConstructionHomeData = z.infer<typeof constructionHomeContentSchema>
export type ConstructionContactData = z.infer<
  typeof constructionContactContentSchema
>
export type ConstructionProject = z.infer<typeof constructionProjectSchema>
export type ConstructionProjectsData = z.infer<
  typeof constructionProjectsContentSchema
>
export type ConstructionData = z.infer<typeof constructionContentSchema>
