import { SectionHero } from "./SectionHero";
import { ProjectCard } from "./ProjectCard";
import type { ConstructionProjectsData } from "@/lib/website-content/construction-pro/types";

export function ConstructionProjectsTemplate({ data }: { data: ConstructionProjectsData }) {
  return (
    <div className="min-h-screen bg-background">
      <SectionHero title={data.hero.title} subtitle={data.hero.subtitle} />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
