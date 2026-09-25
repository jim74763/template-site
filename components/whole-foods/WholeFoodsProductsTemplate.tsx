import * as motion from "motion/react-client";
import { ProductCategorySection } from "./ProductCategorySection";
import type { WholeFoodsProductsData } from "@/lib/website-content/whole-foods/types";

export function WholeFoodsProductsTemplate({ data }: { data: WholeFoodsProductsData }) {
  return (
    <div className="min-h-screen bg-background">
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12"
          >
            {data.pageTitle}
          </motion.h1>

          {data.categories.map((category) => (
            <ProductCategorySection key={category.category} category={category} />
          ))}
        </div>
      </motion.section>
    </div>
  );
}
