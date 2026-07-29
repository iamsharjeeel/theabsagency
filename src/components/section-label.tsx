import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "label-caps mb-4 text-primary",
        className
      )}
    >
      {children}
    </p>
  );
}
