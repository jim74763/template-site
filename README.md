## What is this

A collection of industry-specific website templates used to spin up quick demo sites for
leads. Each lead gets a unique link (`/site/[leadId]`) that generates a personalized version
of the best-fitting template using AI-written copy, so outreach can point to a site that
already looks tailored to that business.

## Features

- Modern, responsive designs for various industries
- Built with Next.js 16 and React 19
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
cp .env.example .env.local   # fill in DATABASE_URL, INSTANTLY_API_KEY, OPENROUTER_API_KEY, OPENROUTER_MODEL
pnpm db:migrate              # create the tables (schema in lib/db/schema.ts)
```

To regenerate a site, delete its row from `generated_sites` and visit the link again.

### How generation works

1. **Fetch the lead** — `getInstantlyLead(leadId)` pulls the lead's data (company, contact,
   custom fields) from the Instantly API.
2. **Pick a template** — the lead's data is checked against a keyword list per template (e.g.
   "tandarts"/"dentist" → Dental Care, "bakkerij"/"bakery" → Artisan Bakery). If no keyword
   matches, OpenRouter is asked to choose the best-fitting template instead. If that call
   fails, it falls back to the Dental Care template.
3. **Generate the copy** — each template ships a default content JSON and a Zod schema.
   OpenRouter is prompted to rewrite every text field of the defaults for this specific
   business, keeping the same JSON structure (same keys, same array lengths).
4. **Merge and validate** — the generated text is overlaid onto the template defaults field by
   field: strings are taken from the AI output (falling back to the default when empty or
   missing), icon names must match a known icon, and images, dimensions, and array lengths
   always come from the defaults, never the AI. The merged result is validated against the
   schema; if it fails validation, the template defaults are used as-is instead.
5. **Store and serve** — the lead and the generated site are saved to Postgres
   (`leads` / `generated_sites` tables). Every later visit reads straight from the database
   instead of calling OpenRouter again.

> **⚠️ Work in progress:** the AI generation pipeline (template picking + copywriting in
> `lib/site-generator/`) is an early version. Output quality, prompt tuning, error handling,
> and generation speed still need further work before this is production-ready.

## Tech Stack

- **Framework**: Next.js 16
- **UI Library**: React 19
- **Type System**: TypeScript
- **Styling**: TailwindCSS 4
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Motion.dev
- **Database**: Postgres with Drizzle ORM (lead sites)
- **AI**: OpenRouter via the OpenAI SDK (lead site copy)
- **Lead data**: Instantly SDK
- **Package Manager**: pnpm

## License

MIT License

## Contact

For inquiries about custom web development services, please reach out. https://jimvanduijsen.com/contact

made by Jim van Duijsen
