import * as motion from "motion/react-client";
import type { Metadata } from "next";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cake, Coffee, ShoppingBag, Star } from 'lucide-react';

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
  const pageDetails = {
    heroTitle: "Artisanal Bakery & Café",
    heroSubtitle: "Fresh, handcrafted pastries and breads baked daily with love",
    features: [
      {
        icon: <Cake className="w-8 h-8 text-primary mb-2" />,
        title: "Fresh Pastries",
        description: "Handcrafted daily using traditional recipes and finest ingredients"
      },
      {
        icon: <Coffee className="w-8 h-8 text-primary mb-2" />,
        title: "Specialty Coffee",
        description: "Perfect brew to complement your favorite pastry"
      },
      {
        icon: <ShoppingBag className="w-8 h-8 text-primary mb-2" />,
        title: "Custom Orders",
        description: "Special occasions deserve special treats"
      },
      {
        icon: <Star className="w-8 h-8 text-primary mb-2" />,
        title: "Quality First",
        description: "Only the finest ingredients make it to our kitchen"
      }
    ],
    products: [
      {
        image: "/images/bakery-bread.png",
        name: "Artisan Breads",
        description: "Sourdough, Baguettes, and Whole Grain varieties",
        with: 600,
        height: 400
      },
      {
        image: "/images/bakery-french-pastries.png",
        name: "French Pastries",
        description: "Croissants, Pain au Chocolat, and Danish",
        with: 600,
        height: 400
      },
      {
        image: "/images/bakery-cake.png",
        name: "Custom Cakes",
        description: "Celebration cakes for any special occasion",
        with: 600,
        height: 400
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
        transition={{ duration: 0.5 }}
        className="relative h-screen flex items-center justify-center bg-[url('/images/bakery.png')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            {pageDetails.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            {pageDetails.heroSubtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Order Now
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/20">
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
                <Card className="text-center h-full">
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

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Our Specialties
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pageDetails.products.map((product, index) => (
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
                    width={product.with}
                    height={product.height}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="secondary">Learn More</Button>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-primary text-primary-foreground dark:bg-primary-foreground dark:text-primary"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Place an Order?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
            Experience the taste of our freshly baked goods delivered to your doorstep
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Order Now
          </Button>
        </div>
      </motion.section>
    </div>
  );
}
