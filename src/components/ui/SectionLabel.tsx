import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full",
        className
      )}
    >
      {children}
    </span>
  );
}
