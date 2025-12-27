import * as motion from "motion/react-client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Apple, ShoppingBasket, Sprout, Store } from "lucide-react";
import Link from "next/link";

export default function WholeFoodStorePage() {
  const pageDetails = {
    heroTitle: "Nature's Best Selection",
    heroSubtitle:
      "Your one-stop shop for organic, wholesome foods and sustainable living",
    features: [
      {
        icon: <Leaf className="w-8 h-8 text-primary mb-2" />,
        title: "Organic Certified",
        description: "All products are certified organic and ethically sourced",
      },
      {
        icon: <Apple className="w-8 h-8 text-primary mb-2" />,
        title: "Local Produce",
        description: "Supporting local farmers and sustainable agriculture",
      },
      {
        icon: <Sprout className="w-8 h-8 text-primary mb-2" />,
        title: "Eco-Friendly",
        description: "Committed to sustainable packaging and practices",
      },
      {
        icon: <Store className="w-8 h-8 text-primary mb-2" />,
        title: "Bulk Options",
        description: "Reduce waste with our bulk food section",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative h-[90vh] flex items-center justify-center bg-[url('/images/nature.png')] bg-cover bg-center"
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
            className="flex gap-4 justify-center"
          >
            <Link href="/whole-foods/products">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
              >
                Shop Now <ShoppingBasket className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/whole-foods/about">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white/20"
              >
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

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
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
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
