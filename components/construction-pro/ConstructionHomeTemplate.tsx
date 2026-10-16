import { Hero } from './Hero'
import { Features } from './Features'
import { FeaturedProjects } from './FeaturedProjects'
import { BusinessStory } from './BusinessStory'
import { BusinessFooter } from './BusinessFooter'
import type { ConstructionHomeData } from '@/lib/website-content/construction-pro/types'

export function ConstructionHomeTemplate({
  data,
  isPreview = false,
}: {
  data: ConstructionHomeData
  isPreview?: boolean
}) {
  const primaryHref = isPreview ? '#' : '/construction-pro/contact'
  const projectsHref = isPreview ? '#' : '/construction-pro/projects'

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero
        hero={data.hero}
        primaryHref={primaryHref}
        secondaryHref={projectsHref}
      />
      <Features features={data.features} />
      <BusinessStory story={data.story} />
      <FeaturedProjects
        title={data.featuredProjectsTitle}
        projects={data.featuredProjects}
        projectHref={projectsHref}
        isPreview={isPreview}
      />
      <BusinessFooter footer={data.footer} />
    </div>
  )
}
