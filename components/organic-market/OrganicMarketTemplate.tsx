import { Hero } from "./Hero";
import { Features } from "./Features";
import { Categories } from "./Categories";
import { Cta } from "./Cta";
import { BusinessStory } from "./BusinessStory";
import { BusinessFooter } from "./BusinessFooter";
import type { OrganicMarketData } from "@/lib/website-content/organic-market/types";

export function OrganicMarketTemplate({
  data,
  isPreview = false,
}: {
  data: OrganicMarketData;
  isPreview?: boolean;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero hero={data.hero} />
      <Features features={data.features} />
      <BusinessStory story={data.story} />
      <Categories categoriesSection={data.categoriesSection} isPreview={isPreview} />
      <Cta cta={data.cta} />
      <BusinessFooter footer={data.footer} />
    </div>
  );
}
