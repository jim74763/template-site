import type { Metadata } from "next";

import { ConstructionContactTemplate } from "@/components/construction-pro/ConstructionContactTemplate";
import constructionData from "@/components/construction-pro/data.json";
import type { ConstructionData } from "@/components/construction-pro/types";

export const metadata: Metadata = {
  title: "Contact Us | Construction Pro Template",
  description: "Contact page template for construction and contracting businesses. Features contact form template, business hours section, and service area placeholder.",
  keywords: ["construction template", "contact page template", "contractor website template", "construction contact form template"],
  openGraph: {
    title: "Contact Us | Construction Pro Template",
    description: "Contact page template for construction and contracting businesses.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://template.jimvd.xyz/construction-pro/contact",
  },
};

const data = constructionData as ConstructionData;

export default function ContactPage() {
  return <ConstructionContactTemplate data={data.contact} />;
}
