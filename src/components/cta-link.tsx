import Link from "next/link";
import { cn } from "@/lib/utils";

type CtaLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
};

export function CtaLink({
  href,
  children,
  variant = "primary",
  className,
}: CtaLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.1em] uppercase transition-all duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        variant === "primary" &&
          "bg-cta text-on-cta hover:brightness-110",
        variant === "outline" &&
          "border border-outline text-foreground hover:border-primary hover:text-primary",
        variant === "ghost" &&
          "text-on-surface-variant hover:text-primary",
        className
      )}
    >
      {children}
    </Link>
  );
}
