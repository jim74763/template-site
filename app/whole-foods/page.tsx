import type { Metadata } from "next";

import { WholeFoodsHomeTemplate } from "@/components/whole-foods/WholeFoodsHomeTemplate";
import wholeFoodsData from "@/components/whole-foods/data.json";
import type { WholeFoodsData } from "@/components/whole-foods/types";

export const metadata: Metadata = {
  title: "Whole Foods Template | Organic & Sustainable Food Business Website",
  description: "Nature-inspired website template for organic and sustainable food businesses. Features organic certified products, local produce, eco-friendly practices, and bulk options.",
  keywords: ["whole foods", "organic food store", "sustainable food", "organic grocery", "health food", "natural foods", "eco-friendly grocery"],
  openGraph: {
    title: "Whole Foods Template | Organic & Sustainable Food Business Website",
    description: "Nature-inspired website template for organic and sustainable food businesses. Features organic certified products, local produce, eco-friendly practices, and bulk options.",
    images: ["/images/nature.png"],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://template.jimvd.xyz/whole-foods",
  },
};

const data = wholeFoodsData as WholeFoodsData;

export default function WholeFoodStorePage() {
  return <WholeFoodsHomeTemplate data={data.home} />;
}
