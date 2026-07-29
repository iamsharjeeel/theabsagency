import { Hero } from "@/components/home/hero";
import { ServicesShowcase } from "@/components/home/services-showcase";
import { ProofStrip } from "@/components/home/proof-strip";
import { FaqSection } from "@/components/home/faq-section";
import { CtaBand } from "@/components/cta-band";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesShowcase />
      <ProofStrip />
      <FaqSection />
      <CtaBand />
    </>
  );
}
