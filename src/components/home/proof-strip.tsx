import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/section-label";
import { TESTIMONIALS } from "@/lib/constants";

export function ProofStrip() {
  return (
    <section className="border-y border-outline-variant/50 bg-surface-low px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mb-16 text-center md:mb-20">
          <SectionLabel className="justify-center">Proof</SectionLabel>
          <p className="heading-display text-4xl text-foreground md:text-6xl">
            500+
          </p>
          <p className="mt-3 text-sm tracking-[0.12em] text-on-surface-variant uppercase">
            Clients served
          </p>
        </FadeIn>

        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.author} delay={0.08 * i}>
              <blockquote className="flex h-full flex-col">
                <p className="flex-1 font-heading text-lg font-light leading-relaxed text-foreground md:text-xl">
                  “{t.quote}”
                </p>
                <footer className="mt-6 border-t border-outline-variant/60 pt-4">
                  <cite className="not-italic">
                    <span className="block text-sm text-foreground">
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
