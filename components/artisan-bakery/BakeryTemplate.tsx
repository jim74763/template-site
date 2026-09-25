import { Hero } from "./Hero";
import { Features } from "./Features";
import { Products } from "./Products";
import { Cta } from "./Cta";
import type { BakeryData } from "@/lib/website-content/artisan-bakery/types";

export function BakeryTemplate({ data }: { data: BakeryData }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero hero={data.hero} />
      <Features features={data.features} />
      <Products productsSection={data.productsSection} />
      <Cta cta={data.cta} />
    </div>
  );
}
