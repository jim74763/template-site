## Features

- Modern, responsive designs for various industries
- Built with Next.js 15 and React 19
- Type-safe development with TypeScript
- Smooth animations using Motion.dev
- Styled with TailwindCSS and shadcn/ui components
- Professional-grade UI components
- Optimized for performance and SEO

## Available Templates

- **Dental Care**: Professional landing page for dental clinics
- **Artisan Bakery**: Warm and inviting template for bakeries
- **Organic Market**: Clean design for organic food stores
- **Whole Foods**: Nature-inspired template for sustainable food businesses
- **Construction Pro**: Robust template for construction businesses

## Lead Sites

`/site/[leadId]` builds a personal demo site for an Instantly lead.

1. First visit: fetches the lead from the Instantly API, picks a template by industry, writes the copy with OpenRouter and stores both in Postgres.
2. Every visit after that: served straight from the database.

Setup:

```bash
cp .env.example .env.local   # fill in DATABASE_URL, INSTANTLY_API_KEY, OPENROUTER_API_KEY
pnpm db:migrate              # create the tables (schema in lib/db/schema.ts)
```

To regenerate a site, delete its row from `generated_sites` and visit the link again.

## Tech Stack

- **Framework**: Next.js 15.3.1
- **UI Library**: React 19
- **Type System**: TypeScript
- **Styling**: TailwindCSS 4
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Motion.dev
- **Package Manager**: pnpm

## License

MIT License

## Contact

For inquiries about custom web development services, please reach out. https://jimvanduijsen.com/contact

made by Jim van Duijsen
