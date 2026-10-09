import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export interface TemplateInfo {
  path: string
  name: string
  description: string
  pages: number
}

export function TemplateCard({ template }: { template: TemplateInfo }) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>{template.name}</CardTitle>
        <CardDescription>{template.description}</CardDescription>
        <CardDescription>total pages: {template.pages}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-end">
        <Button asChild className="w-full mt-4">
          <Link href={`/${template.path}`}>
            View Template <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
