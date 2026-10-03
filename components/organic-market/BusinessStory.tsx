import * as motion from "motion/react-client";
import type { z } from "zod";

import type { businessStorySchema } from "@/lib/website-content/shared/schema";

type BusinessStoryData = z.infer<typeof businessStorySchema>;

export function BusinessStory({ story }: { story: BusinessStoryData }) {
  return (
    <section className="bg-background py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="container mx-auto px-4"
      >
        <div className="relative overflow-hidden rounded-[2.5rem] bg-secondary px-6 py-14 text-secondary-foreground md:px-14 md:py-20">
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full border-[3rem] border-primary/10" />
          <div className="relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {story.eyebrow}
              </p>
              <h2 className="max-w-xl text-3xl font-bold leading-tight md:text-5xl">{story.title}</h2>
            </div>
            <div className="space-y-7 border-l border-border pl-6 text-lg leading-8 text-muted-foreground md:pl-10">
              {story.paragraphs.map((paragraph, index) => (
                <p key={`${index}-${paragraph}`}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
