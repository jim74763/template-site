import * as motion from "motion/react-client";
import type { z } from "zod";

import type { businessStorySchema } from "@/lib/website-content/shared/schema";

type BusinessStoryData = z.infer<typeof businessStorySchema>;

export function BusinessStory({ story }: { story: BusinessStoryData }) {
  return (
    <section className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="border-l-4 border-primary-foreground/70 pl-6 md:pl-9"
        >
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-primary-foreground/70">
            {story.eyebrow}
          </p>
          <h2 className="max-w-xl text-4xl font-black uppercase leading-[1.05] tracking-tight md:text-6xl">
            {story.title}
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="divide-y divide-primary-foreground/20 border-y border-primary-foreground/20"
        >
          {story.paragraphs.map((paragraph, index) => (
            <div key={`${index}-${paragraph}`} className="grid grid-cols-[2.5rem_1fr] gap-5 py-7">
              <span className="font-mono text-sm font-bold text-primary-foreground/70">0{index + 1}</span>
              <p className="text-lg leading-8 text-primary-foreground/75">{paragraph}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
