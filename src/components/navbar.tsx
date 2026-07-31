"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const overDarkHero = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 isolate transition-[background-color,border-color,color] duration-300",
        scrolled || open
          ? "border-b border-outline-variant/40 bg-background/95"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 md:h-20 md:px-8"
        aria-label="Primary"
      >
        <Link
          href="/"
          className={cn(
            "font-heading text-[0.75rem] font-medium tracking-[0.16em] uppercase transition-colors md:text-sm",
            overDarkHero
              ? "text-white hover:text-white/80"
              : "text-foreground hover:text-primary"
          )}
        >
          {SITE.wordmark}
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href.split("#")[0]);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "label-caps transition-colors",
                    overDarkHero
                      ? active
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                      : active
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1 md:gap-3">
          <ThemeToggle
            className={
              overDarkHero
                ? "text-white hover:text-white/80"
                : undefined
            }
          />
          <Link
            href="/services#contact"
            className="hidden items-center justify-center bg-cta px-5 py-2.5 text-[0.75rem] font-medium tracking-[0.14em] text-on-cta uppercase transition-all duration-300 hover:scale-[1.02] hover:brightness-110 md:inline-flex"
          >
            Book a Call
          </Link>
          <button
            type="button"
            className={cn(
              "inline-flex size-10 items-center justify-center lg:hidden",
              overDarkHero ? "text-white" : "text-foreground"
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-outline-variant/40 bg-background lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-3 font-heading text-lg font-medium tracking-[0.1em] text-foreground uppercase"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Link
                  href="/services#contact"
                  className="inline-flex w-full items-center justify-center bg-cta px-5 py-3.5 text-xs font-medium tracking-[0.14em] text-on-cta uppercase"
                  onClick={() => setOpen(false)}
                >
                  Book a Call
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
