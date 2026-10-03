import * as motion from "motion/react-client";
import type { z } from "zod";

import type { businessStorySchema } from "@/lib/website-content/shared/schema";

type BusinessStoryData = z.infer<typeof businessStorySchema>;

export function BusinessStory({ story }: { story: BusinessStoryData }) {
  return (
    <section className="border-y border-border bg-secondary py-20 text-secondary-foreground md:py-28">
      <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-5 inline-flex rounded-full bg-primary px-4 py-2 text-sm font-semibold tracking-wide text-primary-foreground">
            {story.eyebrow}
          </p>
          <h2 className="max-w-xl text-3xl font-bold leading-tight md:text-5xl">{story.title}</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid gap-4"
        >
          {story.paragraphs.map((paragraph, index) => (
            <p
              key={`${index}-${paragraph}`}
              className="rounded-2xl border border-border bg-background p-6 text-lg leading-8 text-muted-foreground shadow-sm"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
