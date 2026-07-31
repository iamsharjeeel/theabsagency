import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/section-label";
import { CtaLink } from "@/components/cta-link";
import { PRICING_PLANS } from "@/lib/pricing";

export function PricingTeaser() {
  return (
    <section className="border-y border-outline-variant/50 bg-surface-low px-5 section-y md:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="max-w-2xl">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="heading-display text-3xl text-foreground md:text-5xl">
            Plans that scale with your pipeline
          </h2>
          <p className="prose-body mt-5 text-base text-on-surface-variant md:text-lg">
            Three tiers — from booking conversations to the full growth stack.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {PRICING_PLANS.map((plan, i) => (
            <FadeIn key={plan.id} delay={0.08 * i}>
              <Link
                href="/pricing"
                className="group block border border-outline-variant/70 bg-surface-lowest px-6 py-7 transition-colors hover:border-primary"
              >
                <p className="label-caps text-primary">{plan.name}</p>
                <p className="mt-3 flex items-baseline gap-1">
                  <span className="heading-display text-3xl text-foreground md:text-4xl">
                    ${plan.monthly}
                  </span>
                  <span className="text-sm font-medium text-on-surface-variant">
                    /mo
                  </span>
                </p>
                <p className="mt-3 text-sm font-medium text-on-surface-variant">
                  {plan.blurb}
                </p>
                <p className="mt-5 text-xs font-semibold tracking-[0.12em] text-foreground uppercase transition-colors group-hover:text-primary">
                  View features →
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10">
          <CtaLink href="/pricing" variant="outline">
            Compare all plans
          </CtaLink>
        </FadeIn>
      </div>
    </section>
  );
}
