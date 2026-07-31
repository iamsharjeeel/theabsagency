import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/section-label";
import { CtaLink } from "@/components/cta-link";
import { CtaBand } from "@/components/cta-band";
import { ABOUT_STATS, SITE, VALUES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: `Meet ${SITE.founder}, founder of ${SITE.name}. A Phoenix sales & marketing agency measured by appointments booked and deals closed.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-surface-low pt-28 md:pt-36 section-y">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,color-mix(in_srgb,var(--primary)_10%,transparent),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <FadeIn>
            <SectionLabel>About</SectionLabel>
            <h1 className="heading-display max-w-3xl text-4xl text-foreground md:text-6xl">
              Marketing measured by appointments
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="bg-background px-5 section-y md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <div className="bg-surface-container p-3 md:p-4">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/joshua-mayes.jpg"
                  alt={`${SITE.founder}, founder of ${SITE.name}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  quality={82}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <SectionLabel>Founder</SectionLabel>
            <h2 className="heading-display text-3xl text-foreground md:text-4xl">
              {SITE.founder}
            </h2>
            <div className="mt-6 space-y-5 text-base text-on-surface-variant md:text-lg">
              <p className="prose-body">
                Joshua Mayes started The A.B.S. Agency in Phoenix because most
                marketing gets judged on impressions, not on appointments booked
                or deals closed. ABS reports on the two numbers that move
                revenue.
              </p>
              <p className="prose-body">
                We build brand, strategy, and campaigns, then measure all of it
                against your calendar and your close rate. This is quiet,
                deliberate work for operators who want the results without the
                noise.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-outline-variant/50 bg-surface-container px-5 section-y md:px-8">
        <div className="mx-auto grid max-w-7xl gap-0 text-center sm:grid-cols-2">
          {ABOUT_STATS.map((stat, i) => (
            <FadeIn
              key={stat.label}
              delay={0.08 * i}
              className={
                i > 0
                  ? "border-t border-outline-variant/60 py-10 sm:border-t-0 sm:border-l sm:py-0 sm:px-8"
                  : "py-10 sm:py-0 sm:px-8"
              }
            >
              <div className="mx-auto mb-5 h-px w-12 bg-outline-variant sm:mx-auto" />
              <p className="heading-display text-3xl text-primary md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 text-xs font-semibold tracking-[0.08em] text-on-surface-variant uppercase">
                {stat.label}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-background px-5 section-y md:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="mb-14 max-w-2xl">
            <SectionLabel>Approach</SectionLabel>
            <h2 className="heading-display text-3xl text-foreground md:text-4xl">
              How we work
            </h2>
          </FadeIn>

          <div className="grid gap-12 md:grid-cols-3 md:gap-10">
            {VALUES.map((value, i) => (
              <FadeIn key={value.title} delay={0.08 * i}>
                <p className="label-caps text-primary-fixed-dim">0{i + 1}</p>
                <h3 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground">
                  {value.title}
                </h3>
                <p className="prose-body mt-4 text-sm text-on-surface-variant md:text-base">
                  {value.description}
                </p>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-16 flex flex-wrap gap-4">
            <CtaLink href="/services">View Services</CtaLink>
            <CtaLink href="/services#contact" variant="outline">
              Contact Us
            </CtaLink>
          </FadeIn>
        </div>
      </section>

      <CtaBand
        title="Ready to talk pipeline?"
        copy="Tell us where you are. We'll show you the fastest path to more booked appointments."
      />
    </>
  );
}
