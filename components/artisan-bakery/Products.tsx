import * as motion from "motion/react-client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { BakeryData } from "@/lib/website-content/artisan-bakery/types";

export function Products({ productsSection }: { productsSection: BakeryData["productsSection"] }) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          {productsSection.title}
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {productsSection.products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  width={product.width}
                  height={product.height}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="secondary">Learn More</Button>
                </div>
              </div>
              <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
              <p className="text-muted-foreground">{product.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
