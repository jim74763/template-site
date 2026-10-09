'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function LeadSiteError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          Something went wrong
        </h1>
        <p className="max-w-md text-sm text-muted-foreground">
          We&apos;re having trouble loading your website. Please email Jim.
        </p>
        {error.digest && (
          <p className="text-xs text-muted-foreground/70">
            Reference: {error.digest}
          </p>
        )}
      </div>
      <div className="flex gap-3">
        <Button onClick={() => reset()}>Try again</Button>
        <Link href="/">
          <Button variant="outline">Return Home</Button>
        </Link>
      </div>
    </div>
  )
}
