import type { Metadata } from "next";

import { WholeFoodsAboutTemplate } from "@/components/whole-foods/WholeFoodsAboutTemplate";
import wholeFoodsData from "@/lib/whole-foods/data";

export const metadata: Metadata = {
  title: "About Us | Whole Foods Template",
  description: "About page template for organic and sustainable food businesses. Features story section, mission values, community impact, and newsletter signup CTA.",
  keywords: ["about page template", "organic store template", "sustainable grocery template", "about us page template", "mission values template"],
  openGraph: {
    title: "About Us | Whole Foods Template",
    description: "About page template for organic and sustainable food businesses.",
    images: ["/images/nature-people.png"],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://template.jimvd.xyz/whole-foods/about",
  },
};

export default function AboutPage() {
  return <WholeFoodsAboutTemplate data={wholeFoodsData.about} />;
}
