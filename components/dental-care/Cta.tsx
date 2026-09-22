import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button";
import type { DentalData } from "./types";

export function Cta({ cta }: { cta: DentalData["cta"] }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-16 md:py-24 bg-primary text-primary-foreground dark:bg-primary-foreground dark:text-primary"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{cta.title}</h2>
        <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">{cta.text}</p>
        <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
          {cta.buttonLabel}
        </Button>
      </div>
    </motion.section>
  );
}
