import type { z } from 'zod'

import type {
  wholeFoodsAboutContentSchema,
  wholeFoodsContentSchema,
  wholeFoodsFeatureSchema,
  wholeFoodsHomeContentSchema,
  wholeFoodsPillarSchema,
  wholeFoodsProductCategorySchema,
  wholeFoodsProductItemSchema,
  wholeFoodsProductsContentSchema,
} from './schema'

export type WholeFoodsFeature = z.infer<typeof wholeFoodsFeatureSchema>
export type WholeFoodsHomeData = z.infer<typeof wholeFoodsHomeContentSchema>
export type WholeFoodsPillar = z.infer<typeof wholeFoodsPillarSchema>
export type WholeFoodsAboutData = z.infer<typeof wholeFoodsAboutContentSchema>
export type WholeFoodsProductItem = z.infer<typeof wholeFoodsProductItemSchema>
export type WholeFoodsProductCategory = z.infer<
  typeof wholeFoodsProductCategorySchema
>
export type WholeFoodsProductsData = z.infer<
  typeof wholeFoodsProductsContentSchema
>
export type WholeFoodsData = z.infer<typeof wholeFoodsContentSchema>
