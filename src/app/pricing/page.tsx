import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/section-label";
import { PricingPlans } from "@/components/pricing/pricing-plans";
import { CtaBand } from "@/components/cta-band";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing",
  description: `ABS Pro, Smart Pro, and ABS Platinum plans from ${SITE.name}. Compare features and choose the stack that fills your calendar.`,
};

export default function PricingPage() {
  return (
    <>
      <section className="relative bg-surface-low pt-28 md:pt-36 section-y">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_srgb,var(--primary)_12%,transparent),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <FadeIn className="max-w-3xl">
            <SectionLabel>Pricing</SectionLabel>
            <h1 className="heading-display text-[2rem] leading-tight text-foreground sm:text-4xl md:text-6xl">
              Choose the stack that books the call
            </h1>
            <p className="prose-body mt-5 text-sm text-on-surface-variant sm:mt-6 sm:text-base md:text-lg">
              ABS Pro, Smart Pro, and ABS Platinum — priced monthly or yearly.
              Features match your live plan configuration.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-background px-5 pb-[var(--section-y)] md:px-8">
        <div className="mx-auto max-w-7xl">
          <PricingPlans />
        </div>
      </section>

      <CtaBand
        title="Not sure which plan fits?"
        copy="Tell us your volume and channels. We'll map the right tier before you spend a dollar."
      />
    </>
  );
}
