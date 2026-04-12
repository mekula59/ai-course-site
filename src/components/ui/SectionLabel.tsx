import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-block text-[11px] font-semibold tracking-[0.14em] uppercase text-neutral-500",
        className
      )}
    >
      {children}
    </span>
  );
}
