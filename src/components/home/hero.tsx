"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CtaLink } from "@/components/cta-link";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100svh]">
      <Image
        src="/images/hero.jpg"
        alt="Desert-modern Phoenix architecture at golden hour"
        fill
        priority
        sizes="100vw"
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
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <p className="label-caps mb-6 text-primary-fixed-dim">
            Phoenix · Sales & Marketing
          </p>
          <h1 className="heading-display text-[clamp(2.5rem,8vw,5.75rem)] text-white">
            Precision Growth for Ambitious Brands
          </h1>
          <p className="mt-7 max-w-[62ch] text-[1.25rem] font-medium leading-[1.65] text-white md:mt-8">
            Lead generation, appointment booking, and revenue systems, handled
            without the agency theater.
          </p>
          <div className="mt-10">
            <CtaLink href="/services#contact">Book a Strategy Call</CtaLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
