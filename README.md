# The A.B.S. Agency

Boutique marketing site for The A.B.S. Agency (Phoenix, AZ) — Next.js 15, Tailwind v4, shadcn/ui, Framer Motion, next-themes.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4 + CSS variable theme tokens (light/dark)
- shadcn/ui (button, input, textarea, accordion, label)
- Framer Motion, next-themes

## Pages

- `/` — Home (hero, trust bar, services, pricing teaser, proof, FAQ, CTA)
- `/about` — Founder story, stats, values
- `/services` — Service detail + contact form (`#contact`)
- `/pricing` — ABS Pro / Smart Pro / ABS Platinum (`src/lib/pricing.ts`)
- `/privacy`, `/terms`, `/sms-terms` — legal (content in `src/lib/legal.tsx`, data from `SITE`)

## Setup

```bash
npm install
cp .env.example .env.local   # optional
npm run dev
npm run build
npm run lint
```

Contact form validates client + server, then POSTs JSON to the LeadConnector webhook (`CONTACT_WEBHOOK_URL`).

## Deploy (Vercel)

Import the repo and deploy. No required env vars for core site.

## Theme

Sun/moon toggle in nav. Persists via `next-themes` (`abs-theme`). System preference is the default.

On the home page, nav text is white over the dark hero until scroll; then it switches to theme foreground colors.

## Assets

- Logo: `public/images/logo.png` (~71KB; nav + footer; light asset, CSS-adapted for light/dark bg)
- Founder portrait: `public/images/joshua-mayes.jpg` (~193KB; About)
- Hero: `public/images/hero.jpg` (~223KB; Home; AVIF/WebP via `next/image`)

Site copy, stats, nav, FAQs, and contact details live in `src/lib/constants.ts`.
Legal template placeholders (`business name`, email, phone, address, governing law, effective dates) resolve from `SITE`.

## Fonts

Poppins via `next/font` for body and display.
