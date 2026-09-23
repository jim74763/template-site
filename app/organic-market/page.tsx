import type { Metadata } from "next";

import { OrganicMarketTemplate } from "@/components/organic-market/OrganicMarketTemplate";
import organicMarketData from "@/lib/organic-market/data";

export const metadata: Metadata = {
  title: "Organic Market Template | Fresh & Organic Foods Website",
  description: "Clean and fresh website template for organic food stores and healthy living businesses. Features shop by category, home delivery, and organic products.",
  keywords: ["organic food", "organic market", "health food store", "organic produce", "whole foods", "healthy eating", "organic grocery"],
  openGraph: {
    title: "Organic Market Template | Fresh & Organic Foods Website",
    description: "Clean and fresh website template for organic food stores and healthy living businesses. Features shop by category, home delivery, and organic products.",
    images: ["/images/wholefood.png"],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://template.jimvd.xyz/organic-market",
  },
};

export default function WholeFoodStorePage() {
  return <OrganicMarketTemplate data={organicMarketData} />;
}
