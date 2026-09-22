import * as motion from "motion/react-client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { WholeFoodsAboutData } from "./types";

export function AboutJoin({ join }: { join: WholeFoodsAboutData["join"] }) {
  return (
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
            <Image
              src={join.image}
              alt="Store interior"
              className="rounded-lg shadow-xl"
              height={500}
              width={500}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">{join.title}</h2>
            <p className="text-lg text-muted-foreground mb-6">{join.text}</p>
            <Button size="lg">{join.ctaLabel}</Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
