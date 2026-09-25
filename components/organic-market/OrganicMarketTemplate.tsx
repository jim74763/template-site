import { Hero } from "./Hero";
import { Features } from "./Features";
import { Categories } from "./Categories";
import { Cta } from "./Cta";
import type { OrganicMarketData } from "@/lib/website-content/organic-market/types";

export function OrganicMarketTemplate({ data }: { data: OrganicMarketData }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero hero={data.hero} />
      <Features features={data.features} />
      <Categories categoriesSection={data.categoriesSection} />
      <Cta cta={data.cta} />
    </div>
  );
}
