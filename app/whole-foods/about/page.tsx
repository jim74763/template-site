import * as motion from "motion/react-client";
import type { Metadata } from "next";

import { Button } from '@/components/ui/button';
import { Heart, Users, Globe } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "About Us | Whole Foods Organic Store",
  description: "Learn about our story, mission, and commitment to sustainable living. We founded our organic store in 2010 with a passion for healthy living and ethical consumption.",
  keywords: ["about whole foods", "organic store story", "sustainable grocery", "organic mission", "healthy living", "community focused"],
  openGraph: {
    title: "About Us | Whole Foods Organic Store",
    description: "Learn about our story, mission, and commitment to sustainable living.",
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
  return (
    <div className="min-h-screen bg-background">
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 md:py-32"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Founded with a passion for healthy living and sustainable practices, we&apos;ve been serving our community with the finest organic and whole foods since 2010.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-muted-foreground">To provide access to the highest quality organic foods while promoting sustainable living.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Our Community</h3>
              <p className="text-muted-foreground">Building strong relationships with local farmers and our customers is at the heart of what we do.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Our Impact</h3>
              <p className="text-muted-foreground">Committed to reducing our environmental footprint through sustainable practices.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-secondary/10"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center border rounded-2xl shadow">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image src="/images/nature-people.png" alt="Store interior" className="rounded-lg shadow-xl" height={500} width={500} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We&apos;re more than just a store - we&apos;re a community of health-conscious individuals committed to sustainable living and ethical consumption.
              </p>
              <Button size="lg">
                Join Our Newsletter
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
