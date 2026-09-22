import { SectionHero } from "./SectionHero";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import type { ConstructionContactData } from "./types";

export function ConstructionContactTemplate({ data }: { data: ConstructionContactData }) {
  return (
    <div className="min-h-screen bg-background">
      <SectionHero title={data.hero.title} subtitle={data.hero.subtitle} />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <ContactForm title={data.formTitle} />
            <ContactInfo
              contactInfo={data.contactInfo}
              businessHours={data.businessHours}
              serviceAreas={data.serviceAreas}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
