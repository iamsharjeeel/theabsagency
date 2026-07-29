import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/section-label";
import { CtaLink } from "@/components/cta-link";
import { CtaBand } from "@/components/cta-band";
import { SITE, VALUES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: `Meet ${SITE.founder}, founder of ${SITE.name} — a boutique sales & marketing consultancy in Phoenix, AZ built on discretion, precision, and results.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-surface-low pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,color-mix(in_srgb,var(--primary)_10%,transparent),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <FadeIn>
            <SectionLabel>About</SectionLabel>
            <h1 className="heading-display max-w-3xl text-4xl text-foreground md:text-6xl">
              Built for brands that prefer substance over spectacle
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="bg-background px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80"
                alt={`${SITE.founder}, founder of ${SITE.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <SectionLabel>Founder</SectionLabel>
            <h2 className="heading-display text-3xl text-foreground md:text-4xl">
              {SITE.founder}
            </h2>
            <div className="mt-6 space-y-5 text-base font-light leading-relaxed text-on-surface-variant md:text-lg">
              <p>
                The A.B.S. Agency exists because ambitious businesses deserve
                marketing that behaves like a sales engine — not a content
                machine. Founded in Phoenix by {SITE.founder}, ABS was built for
                operators who value discretion, clarity, and measurable growth.
              </p>
              <p>
                Our philosophy is simple: precision over volume, systems over
                slogans, results over noise. We design brand identity, market
                strategy, creative, and digital campaigns that generate leads,
                book appointments, and scale revenue — powered by automation we
                own and refine.
              </p>
              <p>
                If your brand should feel expensive without shouting, and your
                pipeline should fill without chaos, you&apos;re in the right place.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-outline-variant/50 bg-surface-container px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 text-center sm:grid-cols-3">
          {[
            { value: "500+", label: "Clients served" },
            { value: "10+", label: "Years active" },
            { value: "100%", label: "Results focus" },
          ].map((stat, i) => (
            <FadeIn key={stat.label} delay={0.08 * i}>
              <p className="heading-display text-4xl text-primary md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 text-xs tracking-[0.15em] text-on-surface-variant uppercase">
                {stat.label}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-background px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="mb-14 max-w-2xl">
            <SectionLabel>Approach</SectionLabel>
            <h2 className="heading-display text-3xl text-foreground md:text-4xl">
              Three pillars we never compromise
            </h2>
          </FadeIn>

          <div className="grid gap-12 md:grid-cols-3 md:gap-10">
            {VALUES.map((value, i) => (
              <FadeIn key={value.title} delay={0.08 * i}>
                <p className="label-caps text-primary-fixed-dim">0{i + 1}</p>
                <h3 className="mt-3 font-heading text-2xl tracking-[0.08em] text-foreground uppercase">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-on-surface-variant md:text-base">
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
        title="Let's build your growth system"
        copy="Tell us where you are. We'll show you the quietest path to more appointments and stronger revenue."
      />
    </>
  );
}
