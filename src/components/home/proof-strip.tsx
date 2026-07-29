import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/section-label";
import { TESTIMONIALS } from "@/lib/constants";

export function ProofStrip() {
  return (
    <section className="border-y border-outline-variant/50 bg-surface-low px-5 section-y md:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mb-16 text-center md:mb-20">
          <SectionLabel>Proof</SectionLabel>
          <div className="mx-auto max-w-xs">
            <div className="mx-auto mb-6 h-px w-16 bg-outline-variant" />
            <p className="heading-display text-4xl text-foreground md:text-6xl">
              500+
            </p>
            <p className="mt-3 text-sm tracking-[0.12em] text-on-surface-variant uppercase">
              Clients served
            </p>
          </div>
          <p className="mt-4 text-xs tracking-wide text-outline">
            Sample testimonials below; replace with client quotes
          </p>
        </FadeIn>

        <div className="grid gap-10 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.author} delay={0.08 * i}>
              <blockquote className="flex h-full flex-col bg-surface-lowest p-10">
                <p className="flex-1 font-heading text-[1.125rem] font-light leading-[1.6] text-foreground">
                  “{t.quote}”
                </p>
                <footer className="mt-8">
                  <cite className="not-italic">
                    <span className="block text-sm text-primary">
                      {t.author}
                    </span>
                    <span className="mt-1 block text-xs tracking-wide text-on-surface-variant">
                      {t.role}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
