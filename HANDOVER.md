# Handover — The A.B.S. Agency site

## What changed

- Greenfield Next.js 15 marketing site (Home, About, Services/Contact)
- Quiet-luxury theme tokens (exact light/dark CSS variables) + next-themes toggle
- Nav, footer, Framer Motion scroll fades, FAQ/services accordions
- Contact form with Zod client + server validation; submits via `mailto:` (no database)
- Privacy/terms stubs, SEO metadata/OG tags
- Supabase removed

## Files touched

- `src/app/**` — pages, layout, globals, API route
- `src/components/**` — nav, footer, home sections, contact form, theme
- `src/lib/**` — constants, validations
- `.env.example`, `README.md`, `CHANGELOG.md`, `next.config.ts`

## Pending (manual)

- Replace placeholder phone/email/social URLs in `src/lib/constants.ts` with real ones
- Optional: swap Unsplash hero/about images for owned photography
- Optional: wire a real email/CRM endpoint later if mailto is not enough
