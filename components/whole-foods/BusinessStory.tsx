import * as motion from 'motion/react-client'
import type { z } from 'zod'

import type { businessStorySchema } from '@/lib/website-content/shared/schema'

type BusinessStoryData = z.infer<typeof businessStorySchema>

export function BusinessStory({ story }: { story: BusinessStoryData }) {
  return (
    <section className="border-y bg-muted py-20 text-foreground md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {story.eyebrow}
          </p>
          <h2 className="text-4xl font-medium leading-tight md:text-6xl">
            {story.title}
          </h2>
        </motion.div>
        <div className="grid border-y border-border md:grid-cols-2">
          {story.paragraphs.map((paragraph, index) => (
            <motion.div
              key={`${index}-${paragraph}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="grid grid-cols-[3rem_1fr] gap-4 border-border py-8 text-lg leading-8 text-muted-foreground first:border-b md:px-8 md:first:border-b-0 md:first:border-r"
            >
              <span className="font-mono text-sm text-foreground">
                0{index + 1}
              </span>
              <p>{paragraph}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
