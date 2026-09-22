import * as motion from "motion/react-client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { ConstructionHomeData } from "./types";

export function Hero({ hero }: { hero: ConstructionHomeData["hero"] }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('${hero.backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          {hero.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
        >
          {hero.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex gap-4 justify-center"
        >
          <Link href="/construction-pro/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              {hero.primaryCtaLabel}
            </Button>
          </Link>
          <Link href="/construction-pro/projects">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white/20"
            >
              {hero.secondaryCtaLabel}
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
