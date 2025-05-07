import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface TemplateInfo {
  path:string;
  name: string;
  description: string;
  pages: number;
}

const templates: TemplateInfo[] = [
  { path:'dental-care', name: 'Dental Care', description: 'Professional and modern landing page for dental clinics with comprehensive service showcase.', pages:1},
  { path:'artisan-bakery', name: 'Artisan Bakery', description: 'Warm and inviting template for bakeries featuring fresh pastries and artisanal breads.', pages:1},
  { path:'organic-market', name: 'Organic Market', description: 'Clean and fresh design for organic food stores and healthy living businesses.', pages:1},
  { path:'whole-foods', name: 'Whole Foods', description: 'Nature-inspired template for organic and sustainable food businesses.', pages:2},
  { path:'construction-pro', name: 'Construction Pro', description: 'Robust and professional template for construction and contracting businesses.',pages:2 }
];

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-4">
          Modern Website Templates
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore our collection of professionally designed templates, when you work with me this is what you can expect your website to look like.
          Built with <Link href="/software" className="text-primary hover:underline">modern technologies</Link> for optimal performance.
          View the source code on <Link href="https://github.com" className="text-primary hover:underline inline-flex items-center gap-1">
            GitHub <ArrowRight className="h-4 w-4" />
          </Link>
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template,id) => (
          <Card key={id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{template.name}</CardTitle>
              <CardDescription>{template.description}</CardDescription>
              <CardDescription>total pages: {template.pages}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-end">
              <Link href={`/${template.path}`} passHref>
                <Button className="w-full mt-4">
                  View Template <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}