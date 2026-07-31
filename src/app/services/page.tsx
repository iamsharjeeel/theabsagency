import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/section-label";
import { SERVICES, SITE } from "@/lib/constants";

const ContactForm = dynamic(
  () =>
    import("@/components/contact-form").then((mod) => mod.ContactForm),
  {
    loading: () => (
      <div className="h-80 animate-pulse bg-surface-low" aria-hidden />
    ),
  }
);

export const metadata: Metadata = {
  title: "Services & Contact",
  description: `Explore ${SITE.name} services: digital marketing, brand identity, market analysis, and creative design.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative bg-surface-low pt-28 md:pt-36 section-y">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,color-mix(in_srgb,var(--tertiary)_10%,transparent),transparent_45%)]" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <FadeIn>
            <SectionLabel>Services</SectionLabel>
            <h1 className="heading-display max-w-3xl text-4xl text-foreground md:text-6xl">
              End-to-end growth systems
            </h1>
            <p className="prose-body mt-6 text-base text-on-surface-variant md:text-lg">
              Four capabilities we run end-to-end and back with automation. Your
              brand looks expensive. Your calendar fills with the right calls.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-background px-5 section-y md:px-8">
        <div className="mx-auto max-w-7xl space-y-16 md:space-y-24">
          {SERVICES.map((service, i) => (
            <FadeIn key={service.id} delay={0.05 * i}>
              <article className="grid gap-6 border-t border-outline-variant/60 pt-10 lg:grid-cols-[280px_1fr] lg:gap-16">
                <div>
                  <p className="label-caps text-primary">0{i + 1}</p>
                  <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                    {service.title}
                  </h2>
                </div>
                <div className="space-y-4 text-base text-on-surface-variant md:text-lg">
                  <p className="prose-body text-foreground">{service.summary}</p>
                  <p className="prose-body">{service.detail}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 border-t border-outline-variant/50 bg-surface-low px-5 section-y md:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <FadeIn>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="heading-display text-3xl text-foreground md:text-5xl">
              Book a strategy call
            </h2>
            <p className="prose-body mt-5 text-base text-on-surface-variant">
              Tell us about your business. We&apos;ll reply within 1 hour.
            </p>

            <div className="mt-10 space-y-4 text-sm text-on-surface-variant">
              <div>
                <p className="label-caps mb-1 text-primary">Phone</p>
                <a
                  href={`tel:${SITE.phone.replace(/\D/g, "")}`}
                  className="text-foreground transition-colors hover:text-primary"
                >
                  {SITE.phone}
                </a>
              </div>
              <div>
                <p className="label-caps mb-1 text-primary">Email</p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-foreground transition-colors hover:text-primary"
                >
                  {SITE.email}
                </a>
              </div>
              <div>
                <p className="label-caps mb-1 text-primary">Location</p>
                <p className="text-foreground">{SITE.location}</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-surface-lowest p-8 md:p-12">
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
