import type { IconName } from "@/components/shared/icon-map";

export interface WholeFoodsFeature {
  icon: IconName;
  title: string;
  description: string;
}

export interface WholeFoodsHomeData {
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
  };
  features: WholeFoodsFeature[];
}

export interface WholeFoodsPillar {
  icon: IconName;
  title: string;
  text: string;
}

export interface WholeFoodsAboutData {
  story: {
    title: string;
    intro: string;
  };
  pillars: WholeFoodsPillar[];
  join: {
    image: string;
    title: string;
    text: string;
    ctaLabel: string;
  };
}

export interface WholeFoodsProductItem {
  name: string;
  image: string;
  width: number;
  height: number;
  price: string;
  description: string;
}

export interface WholeFoodsProductCategory {
  category: string;
  items: WholeFoodsProductItem[];
}

export interface WholeFoodsProductsData {
  pageTitle: string;
  categories: WholeFoodsProductCategory[];
}

export interface WholeFoodsData {
  home: WholeFoodsHomeData;
  about: WholeFoodsAboutData;
  products: WholeFoodsProductsData;
}
