import type { IconName } from "@/components/shared/icon-map";

export interface DentalService {
  icon: IconName;
  title: string;
  description: string;
}

export interface DentalData {
  hero: {
    title: string;
    subtitle: string;
    ctaLabel: string;
  };
  services: DentalService[];
  about: {
    title: string;
    text: string;
    image: string;
    ctaLabel: string;
  };
  testimonial: {
    quote: string;
    author: string;
  };
  cta: {
    title: string;
    text: string;
    buttonLabel: string;
  };
}
