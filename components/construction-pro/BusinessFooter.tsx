import { LeafletMap } from "@/components/map/LeafletMap";
import type { ConstructionHomeData } from "@/lib/website-content/construction-pro/types";

export function BusinessFooter({ footer }: { footer: ConstructionHomeData["footer"] }) {
  return (
    <footer className="bg-primary py-16 text-primary-foreground md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <h2 className="text-4xl font-black uppercase leading-tight md:text-5xl">{footer.title}</h2>
            <p className="mt-5 text-lg leading-8 text-primary-foreground/70">{footer.text}</p>
            {footer.openingHours && (
              <section className="mt-10 border-t border-primary-foreground/20 pt-6">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em]">{footer.openingHours.title}</h3>
                <dl>
                  {footer.openingHours.rows.map((row) => (
                    <div key={row.days} className="grid grid-cols-2 gap-5 border-b border-primary-foreground/15 py-3">
                      <dt className="text-primary-foreground/65">{row.days}</dt>
                      <dd>{row.hours}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}
          </div>
          {footer.location && (
            <section className="border border-primary-foreground/20">
              <LeafletMap {...footer.location} className="h-80 w-full" />
              <div className="border-t border-primary-foreground/20 p-5">
                <h3 className="font-bold uppercase">{footer.location.title}</h3>
                <p className="mt-2 text-primary-foreground/70">{footer.location.address}</p>
              </div>
            </section>
          )}
        </div>
      </div>
    </footer>
  );
}
