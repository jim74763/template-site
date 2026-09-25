import { AboutStory } from "./AboutStory";
import { AboutJoin } from "./AboutJoin";
import type { WholeFoodsAboutData } from "@/lib/website-content/whole-foods/types";

export function WholeFoodsAboutTemplate({ data }: { data: WholeFoodsAboutData }) {
  return (
    <div className="min-h-screen bg-background">
      <AboutStory story={data.story} pillars={data.pillars} />
      <AboutJoin join={data.join} />
    </div>
  );
}
