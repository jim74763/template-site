import { Hero } from "./Hero";
import { Features } from "./Features";
import { Products } from "./Products";
import { Cta } from "./Cta";
import { BusinessStory } from "./BusinessStory";
import { BusinessFooter } from "./BusinessFooter";
import type { BakeryData } from "@/lib/website-content/artisan-bakery/types";

export function BakeryTemplate({ data }: { data: BakeryData }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero hero={data.hero} />
      <Features features={data.features} />
      <BusinessStory story={data.story} />
      <Products productsSection={data.productsSection} />
      <Cta cta={data.cta} />
      <BusinessFooter footer={data.footer} />
    </div>
  );
}
