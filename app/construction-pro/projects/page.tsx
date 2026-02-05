import * as motion from "motion/react-client";
import type { Metadata } from "next";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Our Projects | Construction Pro Template Portfolio",
  description: "Construction projects portfolio template featuring project cards with images, descriptions, location, duration, and size. Perfect for showcasing commercial, residential, and industrial work.",
  keywords: ["construction template", "projects portfolio template", "building portfolio template", "construction project showcase template"],
  openGraph: {
    title: "Our Projects | Construction Pro Template Portfolio",
    description: "Construction projects portfolio template showcasing various building projects.",
    images: ["/images/construction-1.png"],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://template.jimvd.xyz/construction-pro/projects",
  },
};

export default function ProjectsPage() {
  const projects = [
    {
      title: "Modern Office Complex",
      category: "Commercial",
      image: "/images/construction-1.png",
      witdh: 800,
      height: 600,
      description: "A state-of-the-art office complex featuring sustainable design and smart building technology.",
      details: {
        location: "Downtown Business District",
        duration: "18 months",
        size: "50,000 sq ft"
      }
    },
    {
      title: "Luxury Home Renovation",
      category: "Residential",
      image: "/images/construction-2.png",
      witdh: 800,
      height: 600,
      description: "Complete renovation of a historic mansion, preserving its character while adding modern amenities.",
      details: {
        location: "Historic District",
        duration: "12 months",
        size: "8,500 sq ft"
      }
    },
    {
      title: "Industrial Warehouse",
      category: "Industrial",
      image: "/images/construction-3.png",
      witdh: 800,
      height: 600,
      description: "Custom-built warehouse facility with advanced logistics capabilities and sustainable features.",
      details: {
        location: "Industrial Park",
        duration: "14 months",
        size: "75,000 sq ft"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-primary text-primary-foreground dark:bg-primary-foreground dark:text-primary"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Explore our portfolio of successful projects across various sectors
          </motion.p>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="overflow-hidden p-0 h-full flex flex-col">
                  <div className="relative h-64">
                    <Image
                      width={project.witdh}
                      height={project.height}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-1 rounded-full">
                      {project.category}
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-medium">{project.details.location}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Duration</p>
                        <p className="font-medium">{project.details.duration}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Size</p>
                        <p className="font-medium">{project.details.size}</p>
                      </div>
                    </div>
                    <Button className="w-full">
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
