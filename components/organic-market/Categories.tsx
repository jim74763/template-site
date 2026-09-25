import * as motion from "motion/react-client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { OrganicMarketData } from "@/lib/website-content/organic-market/types";

export function Categories({
  categoriesSection,
}: {
  categoriesSection: OrganicMarketData["categoriesSection"];
}) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          {categoriesSection.title}
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {categoriesSection.categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  width={category.width}
                  height={category.height}
                  src={category.image}
                  alt={category.name}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-lg">{category.description}</p>
                  <Button variant="secondary" className="mt-4">
                    Browse Products
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
