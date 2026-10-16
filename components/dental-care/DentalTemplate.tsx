import { Hero } from './Hero'
import { Services } from './Services'
import { About } from './About'
import { Testimonial } from './Testimonial'
import { Cta } from './Cta'
import { BusinessStory } from './BusinessStory'
import { BusinessFooter } from './BusinessFooter'
import type { DentalData } from '@/lib/website-content/dental-care/types'

export function DentalTemplate({
  data,
  isPreview = false,
}: {
  data: DentalData
  isPreview?: boolean
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero hero={data.hero} />
      <Services services={data.services} />
      <BusinessStory story={data.story} />
      <About about={data.about} isPreview={isPreview} />
      <Testimonial testimonial={data.testimonial} />
      <Cta cta={data.cta} />
      <BusinessFooter footer={data.footer} />
    </div>
  )
}
