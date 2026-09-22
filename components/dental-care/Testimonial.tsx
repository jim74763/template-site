import * as motion from "motion/react-client";
import { Card, CardContent } from "@/components/ui/card";
import type { DentalData } from "./types";

export function Testimonial({ testimonial }: { testimonial: DentalData["testimonial"] }) {
  return (
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
              <p className="text-xl italic mb-6">&quot;{testimonial.quote}&quot;</p>
              <p className="font-semibold text-primary">- {testimonial.author}</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
