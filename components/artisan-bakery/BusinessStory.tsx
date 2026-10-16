import * as motion from 'motion/react-client'
import type { z } from 'zod'

import type { businessStorySchema } from '@/lib/website-content/shared/schema'

type BusinessStoryData = z.infer<typeof businessStorySchema>

export function BusinessStory({ story }: { story: BusinessStoryData }) {
  return (
    <section className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-primary-foreground/70">
            {story.eyebrow}
          </p>
          <h2 className="font-serif text-4xl leading-tight md:text-6xl">
            {story.title}
          </h2>
          <div className="mx-auto my-10 h-px w-24 bg-primary-foreground/40" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 md:gap-14"
        >
          {story.paragraphs.map((paragraph, index) => (
            <p
              key={`${index}-${paragraph}`}
              className="font-serif text-xl leading-9 text-primary-foreground/80"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
