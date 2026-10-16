import type { z } from 'zod'

import type { dentalContentSchema, dentalServiceSchema } from './schema'

export type DentalService = z.infer<typeof dentalServiceSchema>
export type DentalData = z.infer<typeof dentalContentSchema>
