import * as motion from "motion/react-client";
import type { Metadata } from "next";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, ShoppingBasket, Apple, Heart, Truck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Organic Market Template | Fresh & Organic Foods Website",
  description: "Clean and fresh website template for organic food stores and healthy living businesses. Features shop by category, home delivery, and organic products.",
  keywords: ["organic food", "organic market", "health food store", "organic produce", "whole foods", "healthy eating", "organic grocery"],
  openGraph: {
    title: "Organic Market Template | Fresh & Organic Foods Website",
    description: "Clean and fresh website template for organic food stores and healthy living businesses. Features shop by category, home delivery, and organic products.",
    images: ["/images/wholefood.png"],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://template.jimvd.xyz/organic-market",
  },
};

export default function WholeFoodStorePage() {
  const pageDetails = {
    heroTitle: "Fresh & Organic Foods",
    heroSubtitle: "Nourish your body with nature's finest selection of organic produce and whole foods",
    features: [
      {
        icon: <Leaf className="w-8 h-8 text-primary mb-2" />,
        title: "100% Organic",
        description: "All our products are certified organic and sustainably sourced"
      },
      {
        icon: <Apple className="w-8 h-8 text-primary mb-2" />,
        title: "Fresh Daily",
        description: "We stock fresh produce daily from local organic farms"
      },
      {
        icon: <Heart className="w-8 h-8 text-primary mb-2" />,
        title: "Health First",
        description: "Carefully selected products for your wellbeing"
      },
      {
        icon: <Truck className="w-8 h-8 text-primary mb-2" />,
        title: "Home Delivery",
        description: "Same-day delivery for your convenience"
      }
    ],
    categories: [
      {
        image: "/images/wholefood-1.png",
        name: "Fresh Produce",
        description: "Organic fruits and vegetables",
        with: 800,
        height: 600
      },
      {
        image: "/images/wholefood-2.png",
        name: "Bulk Foods",
        description: "Grains, nuts, and dried fruits",
        with: 800,
        height: 600
      },
      {
        image: "/images/wholefood-3.png",
        name: "Organic Dairy",
        description: "Fresh milk, cheese, and eggs",
        with: 800,
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
        className="relative h-[90vh] flex items-center justify-center bg-[url('/images/wholefood.png')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/40" />
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
          >
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Shop Now <ShoppingBasket className="ml-2 h-5 w-5" />
            </Button>
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

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Shop by Category
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pageDetails.categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    width={category.with}
                    height={category.height}
                    src={category.image}
                    alt={category.name}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-lg">{category.description}</p>
                    <Button variant="secondary" className="mt-4">
                      Browse Products
                    </Button>
                  </div>
                </div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Shop Healthy?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
            Join thousands of happy customers who trust us for their organic food needs
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Start Shopping <ShoppingBasket className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </motion.section>
    </div>
  );
}
