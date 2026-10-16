import { LeafletMap } from '@/components/map/LeafletMap'
import type { DentalData } from '@/lib/website-content/dental-care/types'

export function BusinessFooter({ footer }: { footer: DentalData['footer'] }) {
  return (
    <footer className="border-t bg-background py-16 text-foreground md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold md:text-4xl">{footer.title}</h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            {footer.text}
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {footer.openingHours && (
            <section className="rounded-2xl bg-secondary p-6 text-secondary-foreground md:p-8">
              <h3 className="mb-5 text-xl font-semibold">
                {footer.openingHours.title}
              </h3>
              <dl className="divide-y divide-border">
                {footer.openingHours.rows.map((row) => (
                  <div
                    key={row.days}
                    className="flex justify-between gap-6 py-3 first:pt-0 last:pb-0"
                  >
                    <dt>{row.days}</dt>
                    <dd className="text-right font-medium">{row.hours}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}
          {footer.location && (
            <section className="overflow-hidden rounded-2xl border bg-card">
              <div className="p-6 pb-4">
                <h3 className="text-xl font-semibold">
                  {footer.location.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {footer.location.address}
                </p>
              </div>
              <LeafletMap {...footer.location} className="h-72 w-full" />
            </section>
          )}
        </div>
      </div>
    </footer>
  )
}
