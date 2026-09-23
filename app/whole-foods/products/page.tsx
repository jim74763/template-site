import type { Metadata } from "next";

import { WholeFoodsProductsTemplate } from "@/components/whole-foods/WholeFoodsProductsTemplate";
import wholeFoodsData from "@/lib/whole-foods/data";

export const metadata: Metadata = {
  title: "Our Products | Whole Foods Template",
  description: "Products listing template for organic food stores. Features product categories with cards showing images, descriptions, and pricing placeholders.",
  keywords: ["products template", "organic products template", "product catalog template", "grocery products template", "product listing template"],
  openGraph: {
    title: "Our Products | Whole Foods Template",
    description: "Products listing template for organic food stores.",
    images: ["/images/nature-1.png"],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://template.jimvd.xyz/whole-foods/products",
  },
};

export default function ProductsPage() {
  return <WholeFoodsProductsTemplate data={wholeFoodsData.products} />;
}
