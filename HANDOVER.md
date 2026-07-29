# Handover — The A.B.S. Agency site

## What changed

- Greenfield Next.js 15 marketing site (Home, About, Services/Contact)
- Quiet-luxury theme tokens (exact light/dark CSS variables) + next-themes toggle
- Nav, footer, Framer Motion scroll fades, FAQ/services accordions
- Contact form → `POST /api/contact` → Supabase `inquiries` (Zod client + server validation)
- Privacy/terms stubs, SEO metadata/OG tags

## Files touched

- `src/app/**` — pages, layout, globals, API route
- `src/components/**` — nav, footer, home sections, contact form, theme
- `src/lib/**` — constants, supabase, validations
- `supabase/migrations/001_inquiries.sql`
- `.env.example`, `README.md`, `CHANGELOG.md`, `next.config.ts`

## Pending (manual)

- Create Supabase project and run `001_inquiries.sql`
- Set `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` (and optional `SUPABASE_SERVICE_ROLE_KEY`) in `.env.local` + Vercel
- Replace placeholder phone/email/social URLs in `src/lib/constants.ts` with real ones
- Optional: swap Unsplash hero/about images for owned photography

## Notes

- Contact API returns 503 if Supabase env vars are missing
- RLS: public insert only; no public select on `inquiries`
