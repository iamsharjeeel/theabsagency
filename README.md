# The A.B.S. Agency

Boutique marketing site for The A.B.S. Agency (Phoenix, AZ) — Next.js 15, Tailwind v4, shadcn/ui, Framer Motion, next-themes, Supabase contact form.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4 + CSS variable theme tokens (light/dark)
- shadcn/ui (button, input, textarea, accordion, label)
- Framer Motion, next-themes
- Supabase (`inquiries` table)

## Pages

- `/` — Home (hero, services, proof, FAQ, CTA)
- `/about` — Founder story, stats, values
- `/services` — Service detail + contact form (`#contact`)
- `/privacy`, `/terms`

## Setup

```bash
npm install
cp .env.example .env.local
# Fill NEXT_PUBLIC_SUPABASE_URL + NEXT_PUBLIC_SUPABASE_ANON_KEY
# Optionally SUPABASE_SERVICE_ROLE_KEY for server inserts
```

### Supabase

1. Create a Supabase project
2. Run `supabase/migrations/001_inquiries.sql` in the SQL editor
3. Add env vars to `.env.local` and Vercel

### Dev / build

```bash
npm run dev
npm run build
npm run lint
```

## Deploy (Vercel)

1. Import the repo
2. Set the same env vars in Project Settings
3. Deploy

## Theme

Sun/moon toggle in nav. Persists via `next-themes` (`abs-theme`). System preference is the default.
