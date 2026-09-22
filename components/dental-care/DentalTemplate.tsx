import { Hero } from "./Hero";
import { Services } from "./Services";
import { About } from "./About";
import { Testimonial } from "./Testimonial";
import { Cta } from "./Cta";
import type { DentalData } from "./types";

export function DentalTemplate({ data }: { data: DentalData }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero hero={data.hero} />
      <Services services={data.services} />
      <About about={data.about} />
      <Testimonial testimonial={data.testimonial} />
      <Cta cta={data.cta} />
    </div>
  );
}
