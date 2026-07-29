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
    <section className="bg-background px-5 section-y md:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <FadeIn>
          <SectionLabel>Capabilities</SectionLabel>
          <h2 className="heading-display text-3xl text-foreground md:text-5xl">
            What we run
          </h2>
          <p className="prose-body mt-6 text-base text-on-surface-variant md:text-lg">
            Digital marketing, brand identity, market analysis, and creative
            design, run as one system instead of four vendors.
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
                <AccordionTrigger className="py-7 font-heading text-base tracking-[0.08em] text-foreground uppercase hover:no-underline hover:text-primary md:py-8 md:text-lg">
                  {service.title}
                </AccordionTrigger>
                <AccordionContent className="pb-7 text-sm font-light leading-[1.6] text-on-surface-variant md:pb-8 md:text-base">
                  <p className="max-w-[62ch]">{service.teaser}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
