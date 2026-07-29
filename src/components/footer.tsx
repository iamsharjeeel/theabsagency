import Link from "next/link";
import { SITE } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-outline-variant/50 bg-surface-low">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pt-16 pb-8 md:grid-cols-3 md:px-8 md:pt-20 md:pb-10">
        <div className="space-y-4">
          <p className="font-heading text-xs tracking-[0.22em] text-foreground uppercase">
            {SITE.wordmark}
          </p>
          <p className="prose-body max-w-xs text-sm text-on-surface-variant">
            {SITE.tagline} Boutique sales & marketing from Phoenix, AZ.
          </p>
        </div>

        <div className="space-y-3 text-sm text-on-surface-variant">
          <p className="label-caps text-primary">Contact</p>
          <a
            href={`tel:${SITE.phone.replace(/\D/g, "")}`}
            className="block transition-colors hover:text-foreground"
          >
            {SITE.phone}
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="block transition-colors hover:text-foreground"
          >
            {SITE.email}
          </a>
          <p>{SITE.location}</p>
        </div>

        <div className="space-y-3 text-sm text-on-surface-variant">
          <p className="label-caps text-primary">Connect</p>
          <a
            href={SITE.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-colors hover:text-foreground"
          >
            Instagram
          </a>
          <a
            href={SITE.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <div className="flex gap-6 pt-2">
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-outline-variant/40">
        <p className="mx-auto max-w-7xl px-5 pt-10 pb-10 text-xs tracking-wide text-outline md:px-8 md:pt-12 md:pb-12">
          © {year} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
