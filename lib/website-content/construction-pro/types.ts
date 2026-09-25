import type { IconName } from "@/components/shared/icon-map";

export interface ConstructionFeature {
  icon: IconName;
  title: string;
  description: string;
}

export interface ConstructionHomeProject {
  image: string;
  title: string;
  category: string;
  width: number;
  height: number;
}

export interface ConstructionHomeData {
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
  };
  features: ConstructionFeature[];
  featuredProjectsTitle: string;
  featuredProjects: ConstructionHomeProject[];
}

export interface ConstructionContactData {
  hero: {
    title: string;
    subtitle: string;
  };
  formTitle: string;
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
  businessHours: {
    label: string;
    hours: string;
  }[];
  serviceAreas: {
    title: string;
    text: string;
  };
}

export interface ConstructionProject {
  title: string;
  category: string;
  image: string;
  width: number;
  height: number;
  description: string;
  details: {
    location: string;
    duration: string;
    size: string;
  };
}

export interface ConstructionProjectsData {
  hero: {
    title: string;
    subtitle: string;
  };
  projects: ConstructionProject[];
}

export interface ConstructionData {
  home: ConstructionHomeData;
  contact: ConstructionContactData;
  projects: ConstructionProjectsData;
}
