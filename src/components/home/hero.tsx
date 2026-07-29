"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CtaLink } from "@/components/cta-link";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=80"
        alt="Refined architectural interior with warm stone and natural light"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35 dark:from-black/80 dark:via-black/60 dark:to-black/40" />
      <div className="absolute inset-0 grain opacity-40" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-20 pt-32 md:justify-center md:px-8 md:pb-24 md:pt-28">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <p className="label-caps mb-6 text-primary-fixed-dim">
            Phoenix · Sales & Marketing
          </p>
          <h1 className="heading-display text-[clamp(2.5rem,8vw,5.75rem)] text-white">
            Precision Growth for Ambitious Brands
          </h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-base font-light leading-relaxed text-white/80 md:text-lg"
          >
            Lead generation, appointment booking, and revenue systems —
            delivered with the discretion of a boutique consultancy.
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <CtaLink href="/services#contact">Book a Strategy Call</CtaLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
