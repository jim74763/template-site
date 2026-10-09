import { LeafletMap } from '@/components/map/LeafletMap'
import type { BakeryData } from '@/lib/website-content/artisan-bakery/types'

export function BusinessFooter({ footer }: { footer: BakeryData['footer'] }) {
  return (
    <footer className="bg-primary py-16 text-primary-foreground md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl">{footer.title}</h2>
          <p className="mt-5 font-serif text-lg leading-8 text-primary-foreground/75">
            {footer.text}
          </p>
        </div>
        <div className="grid gap-10 border-t border-primary-foreground/20 pt-10 lg:grid-cols-[0.75fr_1.25fr]">
          {footer.openingHours && (
            <section>
              <h3 className="mb-5 font-serif text-2xl">
                {footer.openingHours.title}
              </h3>
              <dl className="space-y-4 text-primary-foreground/80">
                {footer.openingHours.rows.map((row) => (
                  <div
                    key={row.days}
                    className="flex justify-between gap-5 border-b border-primary-foreground/15 pb-4"
                  >
                    <dt>{row.days}</dt>
                    <dd className="text-right">{row.hours}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}
          {footer.location && (
            <section>
              <div className="mb-5">
                <h3 className="font-serif text-2xl">{footer.location.title}</h3>
                <p className="mt-2 text-primary-foreground/70">
                  {footer.location.address}
                </p>
              </div>
              <div className="overflow-hidden rounded-lg border border-primary-foreground/20">
                <LeafletMap {...footer.location} className="h-72 w-full" />
              </div>
            </section>
          )}
        </div>
      </div>
    </footer>
  )
}
