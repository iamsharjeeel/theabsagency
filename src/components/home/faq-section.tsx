import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/section-label";
import { FAQS } from "@/lib/constants";

export function FaqSection() {
  return (
    <section className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-3xl">
        <FadeIn className="mb-12 text-center">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="heading-display text-3xl text-foreground md:text-4xl">
            Clarity before commitment
          </h2>
        </FadeIn>

        <FadeIn delay={0.08}>
          <Accordion type="single" collapsible>
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${i}`}
                className="border-outline-variant"
              >
                <AccordionTrigger className="py-5 text-left text-sm font-normal tracking-wide text-foreground hover:no-underline hover:text-primary md:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm font-light leading-relaxed text-on-surface-variant">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
