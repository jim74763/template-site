import type { Metadata } from "next";

import { ConstructionHomeTemplate } from "@/components/construction-pro/ConstructionHomeTemplate";
import constructionData from "@/lib/website-content/construction-pro/data";

export const metadata: Metadata = {
  title: "Construction Pro Template | Construction & Contracting Business Website",
  description: "Robust and professional website template for construction and contracting businesses. Features commercial and residential projects, service showcase, and quote request form.",
  keywords: ["construction company", "contractor", "construction website", "building contractor", "commercial construction", "residential construction", "general contractor"],
  openGraph: {
    title: "Construction Pro Template | Construction & Contracting Business Website",
    description: "Robust and professional website template for construction and contracting businesses.",
    images: ["/images/construction.png"],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://template.jimvd.xyz/construction-pro",
  },
};

export default function ContractorLandingPage() {
  return <ConstructionHomeTemplate data={constructionData.home} />;
}
