import * as motion from "motion/react-client";
import type { Metadata } from "next";

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: "Contact Us | Construction Pro",
  description: "Get in touch with our construction team for quotes and project inquiries. We serve the greater metropolitan area and surrounding counties.",
  keywords: ["contact construction", "construction quote", "contractor contact", "building inquiry", "construction estimate"],
  openGraph: {
    title: "Contact Us | Construction Pro",
    description: "Get in touch with our construction team for quotes and project inquiries.",
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

export default function ContactPage() {
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
            Let&apos;s Build Something Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Ready to start your project? We&apos;re here to help bring your vision to life.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Input placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                      <Input type="email" placeholder="Email Address" />
                    </div>
                    <div className="space-y-2">
                      <Input placeholder="Phone Number" />
                    </div>
                    <div className="space-y-2">
                      <Textarea
                        placeholder="Tell us about your project"
                        className="min-h-[150px]"
                      />
                    </div>
                    <Button className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-3" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-3" />
                    <span>contact@contractor.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-3" />
                    <span>123 Construction Ave, Building City, ST 12345</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Service Areas</h3>
                <p className="text-muted-foreground">
                  We serve the greater metropolitan area and surrounding counties. Contact us to see if we cover your location.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
