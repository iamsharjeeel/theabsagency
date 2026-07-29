import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/section-label";
import { ContactForm } from "@/components/contact-form";
import { SERVICES, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services & Contact",
  description: `Explore ${SITE.name} services — digital marketing, brand identity, market analysis, and creative design — and book a strategy call.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-surface-low pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,color-mix(in_srgb,var(--tertiary)_10%,transparent),transparent_45%)]" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <FadeIn>
            <SectionLabel>Services</SectionLabel>
            <h1 className="heading-display max-w-3xl text-4xl text-foreground md:text-6xl">
              Systems that sell. Design that converts.
            </h1>
            <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-on-surface-variant md:text-lg">
              Four integrated capabilities, owned end-to-end and powered by
              automation — so your brand looks expensive and your calendar fills
              with the right conversations.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-background px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl space-y-16 md:space-y-24">
          {SERVICES.map((service, i) => (
            <FadeIn key={service.id} delay={0.05 * i}>
              <article className="grid gap-6 border-t border-outline-variant/60 pt-10 lg:grid-cols-[280px_1fr] lg:gap-16">
                <div>
                  <p className="label-caps text-primary">0{i + 1}</p>
                  <h2 className="mt-3 font-heading text-2xl tracking-[0.1em] text-foreground uppercase md:text-3xl">
                    {service.title}
                  </h2>
                </div>
                <div className="space-y-4 text-base font-light leading-relaxed text-on-surface-variant md:text-lg">
                  <p className="text-foreground">{service.summary}</p>
                  <p>{service.detail}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 border-t border-outline-variant/50 bg-surface-low px-5 py-24 md:px-8 md:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <FadeIn>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="heading-display text-3xl text-foreground md:text-5xl">
              Book a strategy call
            </h2>
            <p className="mt-5 max-w-md text-base font-light leading-relaxed text-on-surface-variant">
              Share a few details. We respond promptly with next steps —
              discreetly and without pressure.
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
            <div className="bg-surface-lowest p-6 md:p-10">
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
