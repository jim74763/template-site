import { Hero } from "./Hero";
import { Features } from "./Features";
import type { WholeFoodsHomeData } from "@/lib/website-content/whole-foods/types";

export function WholeFoodsHomeTemplate({ data }: { data: WholeFoodsHomeData }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero hero={data.hero} />
      <Features features={data.features} />
    </div>
  );
}
