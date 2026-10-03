import { Hero } from "./Hero";
import { Services } from "./Services";
import { About } from "./About";
import { Testimonial } from "./Testimonial";
import { Cta } from "./Cta";
import { BusinessStory } from "./BusinessStory";
import type { DentalData } from "@/lib/website-content/dental-care/types";

export function DentalTemplate({ data }: { data: DentalData }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero hero={data.hero} />
      <Services services={data.services} />
      <BusinessStory story={data.story} />
      <About about={data.about} />
      <Testimonial testimonial={data.testimonial} />
      <Cta cta={data.cta} />
    </div>
  );
}
