import { CtaLink } from "@/components/cta-link";
import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/section-label";
import { cn } from "@/lib/utils";

export function CtaBand({
  title = "Let's Fill Your Calendar.",
  copy = "Book a strategy call. We'll show you where your pipeline is leaking before you spend another dollar on ads.",
  className,
}: {
  title?: string;
  copy?: string;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative bg-surface-container px-5 section-y md:px-8",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_srgb,var(--primary)_12%,transparent),transparent_55%)]" />
      <FadeIn className="relative mx-auto max-w-3xl text-center">
        <SectionLabel>Next step</SectionLabel>
        <h2 className="heading-display text-3xl text-foreground md:text-5xl">
          {title}
        </h2>
        <p className="prose-body mx-auto mt-6 text-base text-on-surface-variant md:text-lg">
          {copy}
        </p>
        <div className="mt-10">
          <CtaLink href="/services#contact">Book a Strategy Call</CtaLink>
        </div>
      </FadeIn>
    </section>
  );
}
