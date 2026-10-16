import { LeafletMap } from '@/components/map/LeafletMap'
import type { OrganicMarketData } from '@/lib/website-content/organic-market/types'

export function BusinessFooter({
  footer,
}: {
  footer: OrganicMarketData['footer']
}) {
  return (
    <footer className="bg-secondary py-16 text-secondary-foreground md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold md:text-5xl">{footer.title}</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              {footer.text}
            </p>
            {footer.openingHours && (
              <section className="mt-10 border-t border-border pt-6">
                <h3 className="mb-4 text-xl font-semibold">
                  {footer.openingHours.title}
                </h3>
                <dl className="space-y-3">
                  {footer.openingHours.rows.map((row) => (
                    <div key={row.days} className="flex justify-between gap-5">
                      <dt className="text-muted-foreground">{row.days}</dt>
                      <dd className="text-right font-medium">{row.hours}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}
          </div>
          {footer.location && (
            <section className="overflow-hidden rounded-[2rem] bg-background shadow-sm">
              <LeafletMap {...footer.location} className="h-80 w-full" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {footer.location.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {footer.location.address}
                </p>
              </div>
            </section>
          )}
        </div>
      </div>
    </footer>
  )
}
