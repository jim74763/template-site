import { Hero } from "./Hero";
import { Features } from "./Features";
import { BusinessStory } from "./BusinessStory";
import { BusinessFooter } from "./BusinessFooter";
import type { WholeFoodsHomeData } from "@/lib/website-content/whole-foods/types";

export function WholeFoodsHomeTemplate({ data }: { data: WholeFoodsHomeData }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero hero={data.hero} />
      <Features features={data.features} />
      <BusinessStory story={data.story} />
      <BusinessFooter footer={data.footer} />
    </div>
  );
}
