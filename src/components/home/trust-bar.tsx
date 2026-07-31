import { TRUSTED_CLIENTS } from "@/lib/constants";

function MarqueeTrack({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-10 md:gap-14"
      aria-hidden={ariaHidden || undefined}
    >
      {TRUSTED_CLIENTS.map((name) => (
        <li key={`${ariaHidden ? "b" : "a"}-${name}`} className="flex items-center gap-10 md:gap-14">
          <span className="trust-name whitespace-nowrap font-heading text-sm font-semibold tracking-[0.14em] text-on-surface-variant uppercase transition-colors duration-300 hover:text-primary md:text-base">
            {name}
          </span>
          <span
            className="block size-1.5 shrink-0 rounded-full bg-outline-variant"
            aria-hidden
          />
        </li>
      ))}
    </ul>
  );
}

export function TrustBar() {
  return (
    <section
      className="relative overflow-hidden border-b border-outline-variant/50 bg-surface-low py-7 md:py-9"
      aria-label="Businesses we help"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface-low to-transparent md:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface-low to-transparent md:w-28" />

      <p className="label-caps mb-5 text-center text-primary">Trusted by</p>

      <div className="trust-marquee flex w-max items-center gap-10 md:gap-14">
        <MarqueeTrack />
        <MarqueeTrack ariaHidden />
      </div>
    </section>
  );
}
