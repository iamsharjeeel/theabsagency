"use client";

import Image from "next/image";
import { m, useReducedMotion } from "framer-motion";
import { CtaLink } from "@/components/cta-link";

export function Hero() {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="relative min-h-[100svh]">
      <Image
        src="/images/hero.jpg"
        alt="Desert-modern Phoenix architecture at golden hour"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        quality={80}
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/35" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.55), transparent 70%)",
        }}
      />
      <div className="absolute inset-0 grain opacity-40" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-20 pt-32 md:justify-center md:px-8 md:pb-24 md:pt-28">
        <div className="max-w-4xl">
          <m.p
            className="label-caps mb-6 text-primary-fixed-dim"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            Phoenix · Sales & Marketing
          </m.p>
          <m.h1
            className="heading-display text-[clamp(2.5rem,8vw,5.75rem)] text-white"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease }}
          >
            Precision Growth for Ambitious Brands
          </m.h1>
          <m.p
            className="mt-7 max-w-[62ch] text-[1.25rem] font-medium leading-[1.65] text-white md:mt-8"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18, ease }}
          >
            Lead generation, appointment booking, and revenue systems, handled
            without the agency theater.
          </m.p>
          <m.div
            className="mt-10"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28, ease }}
          >
            <CtaLink href="/services#contact">Book a Strategy Call</CtaLink>
          </m.div>
        </div>
      </div>
    </section>
  );
}
