# Handover — The A.B.S. Agency site

## What changed (clarity pass)

- Nav over home hero: white wordmark/links/toggle when transparent; theme colors after scroll or on light pages
- Typography: removed `font-light`/300 weights; headings medium; tighter letter-spacing on caps
- About portrait: local `/images/joshua-mayes.jpg` (replaces Unsplash stock)

## Pending (manual)

- Confirm portrait file is the exact preferred shot (replace `public/images/joshua-mayes.jpg` if needed)
- Replace placeholder phone/email/social in `src/lib/constants.ts`
- Confirm `[X]+` years active and `[avg appts/mo]` with Joshua; or drop to two stats
- Replace sample testimonials with real client quotes
- Confirm contact SLA `[one business day]`
- Optional: owned photography for hero

## Files touched

- `src/components/navbar.tsx`, `theme-toggle.tsx` (via className), `cta-link.tsx`, `footer.tsx`, `contact-form.tsx`, `ui/button.tsx`
- `src/components/home/{hero,services-showcase,proof-strip,faq-section}.tsx`
- `src/app/{globals.css,layout.tsx,about/page.tsx,services/page.tsx,privacy/page.tsx,terms/page.tsx}`
- `public/images/joshua-mayes.jpg`
