# The A.B.S. Agency

Boutique marketing site for The A.B.S. Agency (Phoenix, AZ) — Next.js 15, Tailwind v4, shadcn/ui, Framer Motion, next-themes.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4 + CSS variable theme tokens (light/dark)
- shadcn/ui (button, input, textarea, accordion, label)
- Framer Motion, next-themes

## Pages

- `/` — Home (hero, services, proof, FAQ, CTA)
- `/about` — Founder story, stats, values
- `/services` — Service detail + contact form (`#contact`)
- `/privacy`, `/terms`, `/sms-terms` — legal (content in `src/lib/legal.tsx`, data from `SITE`)

## Setup

```bash
npm install
cp .env.example .env.local   # optional
npm run dev
npm run build
npm run lint
```

Contact form validates client + server, then opens a `mailto:` draft to the agency email.

## Deploy (Vercel)

Import the repo and deploy. No required env vars for core site.

## Theme

Sun/moon toggle in nav. Persists via `next-themes` (`abs-theme`). System preference is the default.

On the home page, nav text is white over the dark hero until scroll; then it switches to theme foreground colors.

## Assets

- Founder portrait: `public/images/joshua-mayes.jpg` (About page)
- Hero: `public/images/hero.jpg` (Home)

Site copy, stats, nav, FAQs, and contact details live in `src/lib/constants.ts`.
Legal template placeholders (`business name`, email, phone, address, governing law, effective dates) resolve from `SITE`.

## Fonts

Poppins via `next/font` for body and display.
