import type { Metadata } from "next";

import { BakeryTemplate } from "@/components/artisan-bakery/BakeryTemplate";
import bakeryData from "@/lib/website-content/artisan-bakery/data";

export const metadata: Metadata = {
  title: "Artisan Bakery Template | Artisanal Bakery & Café Website",
  description: "Warm and inviting website template for bakeries featuring fresh pastries, artisanal breads, custom cakes, and specialty coffee.",
  keywords: ["bakery", "artisan bakery", "pastry", "bread", "cake", "coffee shop", "café", "baking"],
  openGraph: {
    title: "Artisan Bakery Template | Artisanal Bakery & Café Website",
    description: "Warm and inviting website template for bakeries featuring fresh pastries, artisanal breads, custom cakes, and specialty coffee.",
    images: ["/images/bakery.png"],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://template.jimvd.xyz/artisan-bakery",
  },
};

export default function BakeryLandingPage() {
  return <BakeryTemplate data={bakeryData} />;
}
