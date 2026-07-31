import Image from "next/image";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";

const LOGO = {
  src: "/images/logo.png",
  width: 640,
  height: 567,
} as const;

type SiteLogoProps = {
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  onDark?: boolean;
};

export function SiteLogo({
  className,
  imgClassName,
  priority = false,
  onDark = false,
}: SiteLogoProps) {
  return (
    <span className={cn("relative inline-flex shrink-0 items-center", className)}>
      <Image
        src={LOGO.src}
        alt={SITE.name}
        width={LOGO.width}
        height={LOGO.height}
        priority={priority}
        sizes="(max-width: 768px) 112px, 144px"
        quality={90}
        className={cn(
          "h-full w-auto object-contain transition-[filter,opacity] duration-300",
          onDark
            ? "brightness-100"
            : "brightness-0 dark:brightness-100",
          imgClassName
        )}
      />
    </span>
  );
}
