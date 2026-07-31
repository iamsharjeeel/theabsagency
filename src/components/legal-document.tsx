import Link from "next/link";
import type { LegalBlock, LegalDoc } from "@/lib/legal";
import { FadeIn } from "@/components/fade-in";

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-10 font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-6 font-heading text-lg font-semibold tracking-tight text-foreground">
          {block.text}
        </h3>
      );
    case "p":
      return <p>{block.text}</p>;
    case "ul":
      return (
        <ul className="list-disc space-y-2 pl-5">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div className="border border-outline-variant/60 bg-surface-low px-5 py-5 md:px-6">
          {block.title ? (
            <p className="mb-3 font-heading text-sm font-semibold tracking-[0.06em] text-foreground uppercase">
              {block.title}
            </p>
          ) : null}
          <ul className="list-disc space-y-2 pl-5 text-sm md:text-base">
            {block.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      );
    default:
      return null;
  }
}

export function LegalDocument({ doc }: { doc: LegalDoc }) {
  return (
    <article className="mx-auto max-w-3xl px-5 pt-32 pb-24 md:px-8 md:pt-40 md:pb-32">
      <FadeIn>
        <h1 className="heading-display text-3xl text-foreground md:text-5xl">
          {doc.title}
        </h1>
        <p className="mt-4 text-sm font-medium text-on-surface-variant">
          Effective Date: {doc.effectiveDate}
        </p>
        <div className="mt-2 space-y-1 text-sm font-medium text-on-surface-variant">
          {doc.meta.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.08} className="mt-10 space-y-4 text-sm font-medium leading-relaxed text-on-surface-variant md:text-base">
        {doc.blocks.map((block, i) => (
          <Block key={i} block={block} />
        ))}
        <p className="pt-6">
          <Link href="/" className="text-primary underline-offset-2 hover:underline">
            Return home
          </Link>
        </p>
      </FadeIn>
    </article>
  );
}
