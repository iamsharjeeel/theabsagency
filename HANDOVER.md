# Handover — The A.B.S. Agency site

## What changed

- Contact form POSTs JSON to LeadConnector webhook (`CONTACT_WEBHOOK_URL`; default set in API route)
- `/pricing` + home teaser: ABS Pro ($149/$1490), Smart Pro ($249/$2899), ABS Platinum ($399/$3990) with feature sets from plan admin screenshots
- Official logo (`public/images/logo.png`) in nav + footer; light cream asset → as-is on dark, `brightness-0` on light (`dark:` restores)
- Display/body font: **Poppins** (clearer than thin serif caps)
- Legal pages from Google Doc template → `/privacy`, `/terms`, `/sms-terms`
  - Dynamic fields: business name, email, phone, address, governing law, effective dates (`SITE` in `constants.ts`)
  - Full section coverage preserved from the source doc
- Scroll/load motion: FadeIn (opacity + rise), staggered hero, LazyMotion for smaller JS
- Speed: AVIF/WebP images, package-import optimize, dynamic ContactForm, dropped Unsplash remote

## Pending (manual)

- Set `CONTACT_WEBHOOK_URL` in Vercel env if overriding the default webhook
- Replace placeholder phone/email/social/address in `src/lib/constants.ts`
- Confirm governing law (doc uses Pennsylvania; change `SITE.governingLaw` if needed)
- Replace sample testimonials with real client quotes
- Legal review of facility/membership template language for agency use

## Key files

- `src/lib/constants.ts` — site data
- `src/lib/legal.tsx` — privacy / terms / sms-terms content
- `src/components/legal-document.tsx` — legal page renderer
- `src/components/fade-in.tsx`, `motion-provider.tsx` — animation
- `public/images/{hero,joshua-mayes}.jpg`
