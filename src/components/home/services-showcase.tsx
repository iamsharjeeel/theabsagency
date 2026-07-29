import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/section-label";
import { SERVICES } from "@/lib/constants";
import { CtaLink } from "@/components/cta-link";

export function ServicesShowcase() {
  return (
    <section className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <FadeIn>
          <SectionLabel>Capabilities</SectionLabel>
          <h2 className="heading-display text-3xl text-foreground md:text-5xl">
            Four pillars. One outcome.
          </h2>
          <p className="mt-6 max-w-md text-base font-light leading-relaxed text-on-surface-variant">
            Digital marketing, brand identity, market analysis, and creative
            design — orchestrated to generate leads, book appointments, and
            scale revenue.
          </p>
          <div className="mt-8">
            <CtaLink href="/services" variant="outline">
              Explore Services
            </CtaLink>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible defaultValue="digital-marketing">
            {SERVICES.map((service) => (
              <AccordionItem
                key={service.id}
                value={service.id}
                className="border-outline-variant"
              >
                <AccordionTrigger className="py-5 font-heading text-base tracking-[0.08em] text-foreground uppercase hover:no-underline hover:text-primary md:text-lg">
                  {service.title}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm font-light leading-relaxed text-on-surface-variant md:text-base">
                  {service.summary}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
