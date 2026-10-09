import 'server-only'

import { ResponseError, type Lead } from '@instantlyai/sdk'

import { instantlyClient } from './client'

export async function getInstantlyLead(id: string): Promise<Lead | null> {
  try {
    return await instantlyClient.leads.getLead({ id })
  } catch (error) {
    if (error instanceof ResponseError && error.response.status === 404) {
      return null
    }

    throw error
  }
}
