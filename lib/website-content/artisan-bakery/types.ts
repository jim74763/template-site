import type { IconName } from "@/components/shared/icon-map";

export interface BakeryFeature {
  icon: IconName;
  title: string;
  description: string;
}

export interface BakeryProduct {
  image: string;
  name: string;
  description: string;
  width: number;
  height: number;
}

export interface BakeryData {
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
    ctaLabel: string;
  };
  features: BakeryFeature[];
  productsSection: {
    title: string;
    products: BakeryProduct[];
  };
  cta: {
    title: string;
    text: string;
    buttonLabel: string;
  };
}
