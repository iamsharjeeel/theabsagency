"use client";

import { m, useReducedMotion } from "framer-motion";
import { CtaLink } from "@/components/cta-link";
import { HeroIllustration } from "@/components/home/hero-illustration";

export function Hero() {
  const reduce = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <HeroIllustration className="absolute inset-0 h-full w-full scale-[1.12] origin-[78%_55%] md:scale-100 md:origin-center" />
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(to right, rgba(13,9,6,0.72) 0%, rgba(13,9,6,0.35) 42%, transparent 62%)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 grain opacity-20 md:opacity-30" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:px-8 md:pb-24 md:pt-28">
        <div className="max-w-4xl">
          <m.p
            className="label-caps mb-4 text-primary-fixed-dim md:mb-6"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
          >
            Phoenix · Sales & Marketing
          </m.p>
          <m.h1
            className="heading-display text-[clamp(2.25rem,9vw,5.75rem)] text-white"
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.06, ease }}
          >
            Precision Growth for Ambitious Brands
          </m.h1>
          <m.p
            className="mt-5 max-w-[62ch] text-base font-medium leading-[1.65] text-white/95 md:mt-8 md:text-[1.25rem]"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.14, ease }}
          >
            Lead generation, appointment booking, and revenue systems, handled
            without the agency theater.
          </m.p>
          <m.div
            className="mt-8 md:mt-10"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22, ease }}
          >
            <CtaLink href="/services#contact">Book a Strategy Call</CtaLink>
          </m.div>
        </div>
      </div>
    </section>
  );
}
