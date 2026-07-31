import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE.name}.`,
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 pt-32 pb-24 md:px-8 md:pt-40 md:pb-32">
      <h1 className="heading-display text-3xl text-foreground md:text-4xl">
        Privacy Policy
      </h1>
      <div className="mt-8 space-y-4 text-sm font-medium leading-relaxed text-on-surface-variant md:text-base">
        <p>
          {SITE.name} (&quot;we&quot;, &quot;us&quot;) respects your privacy. When you submit
          our contact form, we collect the information you provide — name,
          company, email, phone, and message — solely to respond to your inquiry
          and deliver related services.
        </p>
        <p>
          We do not sell your personal information. Inquiry details you choose to
          send via email are used only to respond to your request. You may contact
          us at{" "}
          <a href={`mailto:${SITE.email}`} className="text-primary underline-offset-2 hover:underline">
            {SITE.email}
          </a>{" "}
          with any privacy questions.
        </p>
        <p>
          This site may use essential cookies and local storage for theme
          preference. Analytics, if enabled in the future, will be disclosed
          here.
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
