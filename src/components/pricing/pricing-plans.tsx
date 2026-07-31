"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import {
  PRICING_PLANS,
  planPrice,
  yearlySavings,
  type BillingPeriod,
  type PricingPlan,
} from "@/lib/pricing";
import { cn } from "@/lib/utils";

const PREVIEW_COUNT = 8;

function formatUsd(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

function FeatureList({ plan }: { plan: PricingPlan }) {
  const [expanded, setExpanded] = useState(false);
  const needsCollapse = plan.features.length > PREVIEW_COUNT;

  return (
    <div className="mt-8 flex-1 border-t border-outline-variant/50 pt-6">
      {plan.includesFrom ? (
        <p className="mb-4 text-xs font-semibold tracking-[0.1em] text-primary uppercase">
          {plan.includesFrom}
        </p>
      ) : (
        <p className="mb-4 text-xs font-semibold tracking-[0.1em] text-on-surface-variant uppercase">
          Includes
        </p>
      )}
      <ul className="space-y-2.5">
        {plan.features.map((feature, i) => (
          <li
            key={feature}
            className={cn(
              "flex gap-2.5 text-sm font-medium text-foreground",
              needsCollapse &&
                i >= PREVIEW_COUNT &&
                !expanded &&
                "hidden lg:flex"
            )}
          >
            <Check
              className="mt-0.5 size-4 shrink-0 text-primary"
              aria-hidden
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      {needsCollapse ? (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-4 min-h-11 text-left text-xs font-semibold tracking-[0.1em] text-primary uppercase transition-colors hover:text-foreground lg:hidden"
          aria-expanded={expanded}
        >
          {expanded
            ? "Show less"
            : `Show all ${plan.features.length} features`}
        </button>
      ) : null}
    </div>
  );
}

export function PricingPlans() {
  const [period, setPeriod] = useState<BillingPeriod>("monthly");

  return (
    <div>
      <FadeIn className="flex flex-col items-center gap-4">
        <div
          className="inline-flex rounded-sm border border-outline-variant/70 bg-surface-lowest p-1"
          role="group"
          aria-label="Billing period"
        >
          {(
            [
              ["monthly", "Monthly"],
              ["yearly", "Yearly"],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setPeriod(value)}
              className={cn(
                "min-h-11 min-w-[7.5rem] px-5 py-2.5 text-sm font-semibold transition-colors",
                period === value
                  ? "bg-cta text-on-cta"
                  : "text-on-surface-variant hover:text-foreground"
              )}
              aria-pressed={period === value}
            >
              {label}
            </button>
          ))}
        </div>
        {period === "yearly" ? (
          <p className="text-sm font-medium text-on-surface-variant">
            Pay yearly and keep more of your pipeline budget.
          </p>
        ) : null}
      </FadeIn>

      <div className="mt-10 grid gap-8 sm:mt-12 lg:grid-cols-3 lg:items-stretch lg:gap-5">
        {PRICING_PLANS.map((plan, i) => {
          const price = planPrice(plan, period);
          const save = yearlySavings(plan);
          return (
            <FadeIn key={plan.id} delay={0.06 * i} className="h-full">
              <article
                className={cn(
                  "relative flex h-full flex-col border px-5 py-7 sm:px-6 sm:py-8 md:px-7 md:py-9",
                  plan.featured
                    ? "mt-2 border-primary bg-surface-lowest shadow-[0_24px_60px_-28px_color-mix(in_srgb,var(--primary)_45%,transparent)] lg:mt-0 lg:-translate-y-2"
                    : "border-outline-variant/70 bg-surface-low"
                )}
              >
                {plan.badge ? (
                  <p className="absolute -top-3 left-6 bg-cta px-3 py-1 text-[0.65rem] font-semibold tracking-[0.14em] text-on-cta uppercase">
                    {plan.badge}
                  </p>
                ) : null}

                <header>
                  <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
                    {plan.name}
                  </h2>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-on-surface-variant">
                    {plan.blurb}
                  </p>
                </header>

                <div className="mt-8 border-t border-outline-variant/50 pt-6">
                  <p className="flex items-baseline gap-1">
                    <span className="heading-display text-4xl text-foreground md:text-5xl">
                      {formatUsd(price)}
                    </span>
                    <span className="text-sm font-medium text-on-surface-variant">
                      /{period === "monthly" ? "mo" : "yr"}
                    </span>
                  </p>
                  {period === "yearly" && save > 0 ? (
                    <p className="mt-2 text-xs font-semibold tracking-[0.08em] text-primary uppercase">
                      Save {formatUsd(save)} vs monthly
                    </p>
                  ) : (
                    <p className="mt-2 text-xs font-medium text-on-surface-variant">
                      or {formatUsd(plan.yearly)}/yr
                    </p>
                  )}
                </div>

                <Link
                  href="/services#contact"
                  className={cn(
                    "mt-8 inline-flex min-h-11 items-center justify-center px-6 py-3.5 text-[0.8rem] font-semibold tracking-[0.1em] uppercase transition-all duration-300 hover:scale-[1.02]",
                    plan.featured
                      ? "bg-cta text-on-cta hover:brightness-110"
                      : "border border-outline text-foreground hover:border-primary hover:text-primary"
                  )}
                >
                  {plan.cta}
                </Link>

                <FeatureList plan={plan} />
              </article>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
