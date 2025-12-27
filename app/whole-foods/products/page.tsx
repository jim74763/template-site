import * as motion from "motion/react-client";
import type { Metadata } from "next";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Our Products | Whole Foods Organic Store",
  description: "Browse our selection of organic products including fresh produce, bulk foods, organic grains, and premium nuts. All products are certified organic and sustainably sourced.",
  keywords: ["organic products", "organic vegetables", "fresh fruits", "bulk foods", "organic grains", "organic nuts", "whole foods products"],
  openGraph: {
    title: "Our Products | Whole Foods Organic Store",
    description: "Browse our selection of organic products including fresh produce, bulk foods, organic grains, and premium nuts.",
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
  const products = [
    {
      category: "Fresh Produce",
      items: [
        {
          name: "Organic Vegetables",
          image: "/images/nature-1.png",
          width: 400,
          height: 300,
          price: "$4.99/lb",
          description: "Fresh, locally sourced organic vegetables"
        },
        {
          name: "Seasonal Fruits",
          image: "/images/nature-2.png",
          width: 400,
          height: 300,
          price: "$5.99/lb",
          description: "Sweet and juicy seasonal fruits"
        }
      ]
    },
    {
      category: "Bulk Foods",
      items: [
        {
          name: "Organic Grains",
          image: "/images/nature-3.png",
          width: 400,
          height: 300,
          price: "$3.99/lb",
          description: "Wholesome organic grains and cereals"
        },
        {
          name: "Mixed Nuts",
          image: "/images/nature-4.png",
          width: 400,
          height: 300,
          price: "$12.99/lb",
          description: "Premium selection of organic nuts"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Our Products
          </motion.h1>

          {products.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-semibold mb-8"
              >
                {category.category}
              </motion.h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                  >
                    <Card className="h-full p-0">
                      <CardHeader className="p-0">
                        <Image
                          width={item.width}
                          height={item.height}
                          src={item.image}
                          alt={item.name}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                      </CardHeader>
                      <CardContent className="p-6">
                        <CardTitle className="mb-2">{item.name}</CardTitle>
                        <p className="text-muted-foreground mb-4">{item.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-semibold">{item.price}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
