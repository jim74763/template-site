import type { Metadata } from "next";

import { DentalTemplate } from "@/components/dental-care/DentalTemplate";
import dentalData from "@/lib/website-content/dental-care/data";

export const metadata: Metadata = {
  title: "Dental Care Template | Professional Dental Clinic Website",
  description: "Modern and professional landing page template for dental clinics. Features comprehensive service showcase, appointment booking, and patient testimonials.",
  keywords: ["dental clinic", "dentist", "dental website", "dental care", "dentistry", "tooth", "smile", "dental services"],
  openGraph: {
    title: "Dental Care Template | Professional Dental Clinic Website",
    description: "Modern and professional landing page template for dental clinics. Features comprehensive service showcase, appointment booking, and patient testimonials.",
    images: ["/images/dentist.png"],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://template.jimvd.xyz/dental-care",
  },
};

export default function DentistLandingPage() {
  return <DentalTemplate data={dentalData} />;
}
