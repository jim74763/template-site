import type { Metadata } from "next";

import { ConstructionProjectsTemplate } from "@/components/construction-pro/ConstructionProjectsTemplate";
import constructionData from "@/lib/website-content/construction-pro/data";

export const metadata: Metadata = {
  title: "Our Projects | Construction Pro Template Portfolio",
  description: "Construction projects portfolio template featuring project cards with images, descriptions, location, duration, and size. Perfect for showcasing commercial, residential, and industrial work.",
  keywords: ["construction template", "projects portfolio template", "building portfolio template", "construction project showcase template"],
  openGraph: {
    title: "Our Projects | Construction Pro Template Portfolio",
    description: "Construction projects portfolio template showcasing various building projects.",
    images: ["/images/construction-1.png"],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://template.jimvd.xyz/construction-pro/projects",
  },
};

export default function ProjectsPage() {
  return <ConstructionProjectsTemplate data={constructionData.projects} />;
}
