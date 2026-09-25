import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button";
import type { DentalData } from "../../lib/website-content/dental-care/types";

export function Hero({ hero }: { hero: DentalData["hero"] }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-gradient-to-r from-primary to-blue-500 text-primary-foreground py-20 md:py-32 text-center"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{hero.title}</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">{hero.subtitle}</p>
        <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
          {hero.ctaLabel}
        </Button>
      </div>
    </motion.section>
  );
}
