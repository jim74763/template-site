import type { IconName } from "@/components/shared/icon-map";

export interface OrganicMarketFeature {
  icon: IconName;
  title: string;
  description: string;
}

export interface OrganicMarketCategory {
  image: string;
  name: string;
  description: string;
  width: number;
  height: number;
}

export interface OrganicMarketData {
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
    ctaLabel: string;
  };
  features: OrganicMarketFeature[];
  categoriesSection: {
    title: string;
    categories: OrganicMarketCategory[];
  };
  cta: {
    title: string;
    text: string;
    buttonLabel: string;
  };
}
