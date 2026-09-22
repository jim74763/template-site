import type { Metadata } from "next";

import { WholeFoodsProductsTemplate } from "@/components/whole-foods/WholeFoodsProductsTemplate";
import wholeFoodsData from "@/components/whole-foods/data.json";
import type { WholeFoodsData } from "@/components/whole-foods/types";

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

const data = wholeFoodsData as WholeFoodsData;

export default function ProductsPage() {
  return <WholeFoodsProductsTemplate data={data.products} />;
}
