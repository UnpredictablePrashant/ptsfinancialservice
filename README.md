# PTS Financial Services Website

Production-ready marketing site for **PTS Financial Services** built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **React Hook Form + Zod**, and **Nodemailer**. Designed for fast, accessible, mobile-first delivery and deploys seamlessly to Vercel.

## Tech Stack & Highlights
- Next.js 14 App Router with metadata-driven SEO, OpenGraph, and sitemap/robots.
- Tailwind CSS design system with teal/blue base and gold accents.
- Reusable UI kit (navbar, footer, section heading, CTA, service cards, FAQ, testimonials, breadcrumbs, sticky mobile actions).
- Contact form backed by React Hook Form + Zod and an API route that emails via Nodemailer and logs server-side.
- Resources hub fed from local JSON content (`src/content/resources/posts.json`) to avoid any CMS.
- JSON-LD LocalBusiness schema on Home and Contact pages, plus compliance disclaimers on investment content.
- Basic Vitest + Testing Library smoke test.

## Getting Started
1. **Node.js 18+** is required (Vercel default).
2. Copy brand assets from the existing `/images` directory into `public/images` (already mirrored in this repo).
3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

   Visit `http://localhost:3000`.

## Environment Variables
Duplicate `.env.example` into `.env.local` and fill with valid SMTP credentials:

- `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS`
- `CONTACT_RECIPIENT`

Without SMTP credentials the API route will safely log submissions to the server console (helpful in local dev).

## Content & Customization
- **Services & copy:** `src/data/services.ts`, `src/data/faqs.ts`, `src/data/testimonials.ts`.
- **Resources hub:** update or add entries in `src/content/resources/posts.json`.
- **Site-wide constants:** `src/lib/site.ts` (contact info, tagline, nav links).
- **Brand styles:** tweak colors/fonts in `tailwind.config.ts` and `src/app/globals.css`.

## Testing
Run component tests with:

```bash
npm run test
```

Vitest + Testing Library renders `SectionHeading` to guard against regressions; expand with more specs as needed.

## Deployment
1. Push to a Git repository.
2. Create a Vercel project, import the repo, and set the environment variables from above.
3. Vercel will run `npm install && npm run build`.
4. Configure the custom domain once production build succeeds.

> **Note:** Static assets served from `/public/images`. If you maintain a separate `/images` directory ensure it is mirrored before building.
