import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of use for ${SITE.name}.`,
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 pt-32 pb-24 md:px-8 md:pt-40 md:pb-32">
      <h1 className="heading-display text-3xl text-foreground md:text-4xl">
        Terms of Use
      </h1>
      <div className="mt-8 space-y-4 text-sm font-normal leading-relaxed text-on-surface-variant md:text-base">
        <p>
          By using {SITE.name}&apos;s website, you agree to these terms. Content on
          this site is provided for general informational purposes and does not
          constitute a binding offer of services until a separate agreement is
          executed.
        </p>
        <p>
          Inquiries submitted through this site are subject to review. We reserve
          the right to decline engagements that are not a mutual fit. All
          trademarks and brand materials on this site belong to their respective
          owners.
        </p>
        <p>
          Questions about these terms:{" "}
          <a href={`mailto:${SITE.email}`} className="text-primary underline-offset-2 hover:underline">
            {SITE.email}
          </a>
          .
        </p>
        <p>
          <Link href="/" className="text-primary underline-offset-2 hover:underline">
            Return home
          </Link>
        </p>
      </div>
    </section>
  );
}
