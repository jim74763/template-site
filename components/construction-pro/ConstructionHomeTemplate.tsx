import { Hero } from "./Hero";
import { Features } from "./Features";
import { FeaturedProjects } from "./FeaturedProjects";
import type { ConstructionHomeData } from "@/lib/website-content/construction-pro/types";

export function ConstructionHomeTemplate({ data }: { data: ConstructionHomeData }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero hero={data.hero} />
      <Features features={data.features} />
      <FeaturedProjects title={data.featuredProjectsTitle} projects={data.featuredProjects} />
    </div>
  );
}
