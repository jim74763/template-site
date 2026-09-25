import * as motion from "motion/react-client";
import { Icon } from "@/components/shared/icon-map";
import type { WholeFoodsAboutData } from "@/lib/website-content/whole-foods/types";

export function AboutStory({
  story,
  pillars,
}: {
  story: WholeFoodsAboutData["story"];
  pillars: WholeFoodsAboutData["pillars"];
}) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 md:py-32"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{story.title}</h1>
          <p className="text-xl text-muted-foreground mb-8">{story.intro}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 mt-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="text-center"
            >
              <Icon name={pillar.icon} className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground">{pillar.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
