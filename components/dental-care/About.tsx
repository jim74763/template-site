import * as motion from "motion/react-client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { DentalData } from "../../lib/website-content/dental-care/types";

export function About({ about }: { about: DentalData["about"] }) {
  return (
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
                src={about.image}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{about.title}</h2>
            <p className="text-lg mb-6">{about.text}</p>
            <Button variant="outline" className="border-primary-foreground hover:bg-primary-foreground">
              {about.ctaLabel}
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
