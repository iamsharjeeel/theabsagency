# Handover — The A.B.S. Agency site

## What changed (v2)

- Fixed ghost nav (removed backdrop-blur + overflow-hidden trapping fixed header; FadeIn is opacity-only)
- Global `--section-y` spacing: 72px mobile / 120px desktop; `prose-body` at 62ch / lh 1.6
- Per-section polish: hero scrim, accordion padding, testimonial cards, stats rules, form gaps, founder photo inset
- Copy rewrite: killed tricolon/"X over Y", parallel hero device, quiet-theme spam (one keep on About)
- Stats/testimonials use `[BRACKET]` placeholders where numbers aren't client-confirmed

## Pending (manual)

- Replace placeholder phone/email/social in `src/lib/constants.ts`
- Confirm `[X]+` years active and `[avg appts/mo]` with Joshua; or drop to two stats
- Replace sample testimonials with real client quotes
- Confirm contact SLA `[one business day]`
- Optional: owned photography for hero/about
