"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'motion/react';
import { CheckCircle, Smile, Users, Phone } from 'lucide-react';
import Image from 'next/image';

export default function DentistLandingPage() {
  const pageDetails = {
    heroTitle: "Your Smile, Our Priority",
    heroSubtitle: "Experience compassionate and comprehensive dental care in a state-of-the-art facility.",
    services: [
      {
        icon: <CheckCircle className="w-8 h-8 text-primary mb-2" />,
        title: "General Dentistry",
        description: "Routine check-ups, cleanings, fillings, and preventive care to maintain your oral health."
      },
      {
        icon: <Smile className="w-8 h-8 text-primary mb-2" />,
        title: "Cosmetic Dentistry",
        description: "Enhance your smile with teeth whitening, veneers, bonding, and smile makeovers."
      },
      {
        icon: <Users className="w-8 h-8 text-primary mb-2" />,
        title: "Orthodontics",
        description: "Straighten your teeth and improve your bite with modern orthodontic solutions."
      },
      {
        icon: <Phone className="w-8 h-8 text-primary mb-2" />,
        title: "Emergency Care",
        description: "Prompt and effective treatment for dental emergencies. Call us anytime."
      }
    ],
    aboutTitle: "Meet Your Trusted Dental Team",
    aboutText: "At BrightSmile Dental Clinic, we are dedicated to providing personalized care for every patient. Our experienced team uses the latest technology to ensure comfortable and effective treatments. We believe in building lasting relationships based on trust and exceptional dental care.",
    testimonial: {
      quote: "The best dental experience I've ever had! The staff is friendly, and Dr. Bright made me feel completely at ease. My smile has never looked better!",
      author: "Jamie L."
    },
    ctaTitle: "Ready for a Healthier, Brighter Smile?",
    ctaText: "Schedule your appointment today and take the first step towards optimal oral health."
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-gradient-to-r from-primary to-blue-500 text-primary-foreground py-20 md:py-32 text-center"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{pageDetails.heroTitle}</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">{pageDetails.heroSubtitle}</p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Book Appointment
          </Button>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-16 md:py-24"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pageDetails.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full flex flex-col">
                  <CardHeader>
                    <div className="flex justify-center items-center mb-2">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="mx-auto">Learn More</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Us Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-16 md:py-24 bg-secondary text-secondary-foreground"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-300 h-64 md:h-96 rounded-lg flex items-center justify-center text-gray-500 overflow-hidden">
                <Image
                src="/images/dentist.png"
                alt="About Us"
                width={475}
                height={500}
                className="rounded-lg"
                priority
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{pageDetails.aboutTitle}</h2>
              <p className="text-lg mb-6">{pageDetails.aboutText}</p>
              <Button variant="outline" className="border-primary-foreground hover:bg-primary-foreground">
                Meet Our Team
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonial Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-16 md:py-24"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What Our Patients Say</h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="max-w-2xl mx-auto bg-muted p-8">
              <CardContent>
                <p className="text-xl italic mb-6">&quot;{pageDetails.testimonial.quote}&quot;</p>
                <p className="font-semibold text-primary">- {pageDetails.testimonial.author}</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-16 md:py-24 bg-primary text-primary-foreground dark:bg-primary-foreground dark:text-primary"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{pageDetails.ctaTitle}</h2>
          <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">{pageDetails.ctaText}</p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Book Your Visit Now
          </Button>
        </div>
      </motion.section>
    </div>
  );
}