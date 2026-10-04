import { LeafletMap } from "@/components/map/LeafletMap";
import type { WholeFoodsHomeData } from "@/lib/website-content/whole-foods/types";

export function BusinessFooter({ footer }: { footer: WholeFoodsHomeData["footer"] }) {
  return (
    <footer className="border-t bg-background py-16 text-foreground md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 grid gap-6 border-b border-border pb-10 md:grid-cols-2">
          <h2 className="max-w-xl text-4xl font-medium leading-tight md:text-5xl">{footer.title}</h2>
          <p className="max-w-xl text-lg leading-8 text-muted-foreground md:justify-self-end">{footer.text}</p>
        </div>
        <div className="grid gap-10 lg:grid-cols-2">
          {footer.openingHours && (
            <section>
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em]">{footer.openingHours.title}</h3>
              <dl className="border-y border-border">
                {footer.openingHours.rows.map((row) => (
                  <div key={row.days} className="grid grid-cols-2 gap-4 border-b border-border py-4 last:border-b-0">
                    <dt className="text-muted-foreground">{row.days}</dt>
                    <dd>{row.hours}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}
          {footer.location && (
            <section>
              <div className="mb-5 flex items-end justify-between gap-5">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">{footer.location.title}</h3>
                  <p className="mt-2 text-muted-foreground">{footer.location.address}</p>
                </div>
              </div>
              <div className="overflow-hidden border border-border">
                <LeafletMap {...footer.location} className="h-72 w-full" />
              </div>
            </section>
          )}
        </div>
      </div>
    </footer>
  );
}
