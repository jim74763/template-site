import * as motion from "motion/react-client";
import type { Metadata } from "next";

import Image from "next/image"
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Hammer, Shield, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

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
  const pageDetails = {
    heroTitle: "Building Excellence, Delivering Trust",
    heroSubtitle: "Your vision, our expertise - creating spaces that inspire and endure",
    features: [
      {
        icon: <Building2 className="w-8 h-8 text-primary mb-2" />,
        title: "Commercial Construction",
        description: "Expert solutions for businesses of all sizes"
      },
      {
        icon: <Hammer className="w-8 h-8 text-primary mb-2" />,
        title: "Residential Projects",
        description: "Turning houses into dream homes"
      },
      {
        icon: <Shield className="w-8 h-8 text-primary mb-2" />,
        title: "Licensed & Insured",
        description: "Full coverage for your peace of mind"
      },
      {
        icon: <Clock className="w-8 h-8 text-primary mb-2" />,
        title: "On-Time Delivery",
        description: "Meeting deadlines without compromising quality"
      }
    ],
    projects: [
      {
        image: "/images/construction-1.png",
        title: "Modern Office Complex",
        category: "Commercial",
        width: 800,
        height: 600
      },
      {
        image: "/images/construction-2.png",
        title: "Luxury Home Renovation",
        category: "Residential",
        width: 800,
        height: 600
      },
      {
        image: "/images/construction-3.png",
        title: "Industrial Facility",
        category: "Industrial",
        width: 800,
        height: 600
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative h-[90vh] flex items-center justify-center bg-[url('/images/construction.png')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            {pageDetails.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            {pageDetails.heroSubtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-4 justify-center"
          >
            <Link href="/construction-pro/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Get a Quote
              </Button>
            </Link>
            <Link href="/construction-pro/projects">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white/20">
                View Our Work
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pageDetails.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex justify-center">{feature.icon}</div>
                    <CardTitle className="mt-4">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pageDetails.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    width={project.width}
                    height={project.height}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm">{project.category}</p>
                    <Link href="/construction-pro/projects">
                      <Button variant="secondary" className="mt-4">
                        View Project <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
