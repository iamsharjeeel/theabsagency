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
    <section className="bg-background px-5 section-y md:px-8">
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
                <AccordionTrigger className="py-7 text-left text-sm font-normal tracking-wide text-foreground hover:no-underline hover:text-primary md:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-7 text-sm font-normal leading-[1.65] text-on-surface-variant">
                  <p className="max-w-[62ch]">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
