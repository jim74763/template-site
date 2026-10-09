import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { BakeryTemplate } from '@/components/artisan-bakery/BakeryTemplate'
import { ConstructionHomeTemplate } from '@/components/construction-pro/ConstructionHomeTemplate'
import { DentalTemplate } from '@/components/dental-care/DentalTemplate'
import { OrganicMarketTemplate } from '@/components/organic-market/OrganicMarketTemplate'
import { WholeFoodsHomeTemplate } from '@/components/whole-foods/WholeFoodsHomeTemplate'
import { getOrCreateLeadSite } from '@/lib/site-generator/lead-site'
import type { SiteContent } from '@/lib/site-generator/templates'

export const dynamic = 'force-dynamic'
export const maxDuration = 300

type Props = { params: Promise<{ leadId: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { leadId } = await params
  const data = await getOrCreateLeadSite(leadId)

  return {
    title: data?.companyName || 'Your new website',
    description: data ? data.site.content.hero.subtitle : undefined,
    robots: { index: false, follow: false },
  }
}

function SiteRenderer({ site }: { site: SiteContent }) {
  switch (site.template) {
    case 'dental-care':
      return <DentalTemplate data={site.content} isPreview />
    case 'artisan-bakery':
      return <BakeryTemplate data={site.content} isPreview />
    case 'organic-market':
      return <OrganicMarketTemplate data={site.content} isPreview />
    case 'whole-foods':
      return <WholeFoodsHomeTemplate data={site.content} isPreview />
    case 'construction-pro':
      return <ConstructionHomeTemplate data={site.content} isPreview />
  }
}

export default async function LeadSitePage({ params }: Props) {
  const { leadId } = await params
  const data = await getOrCreateLeadSite(leadId)
  if (!data) notFound()
  return <SiteRenderer site={data.site} />
}
