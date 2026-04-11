import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          {
            "bg-brand-500 text-white hover:bg-brand-600 focus-visible:ring-brand-500 shadow-sm hover:shadow-md active:scale-[0.98]":
              variant === "primary",
            "bg-neutral-900 text-white hover:bg-neutral-800 focus-visible:ring-neutral-900 shadow-sm hover:shadow-md active:scale-[0.98]":
              variant === "secondary",
            "bg-transparent text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 focus-visible:ring-neutral-300":
              variant === "ghost",
          },
          {
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
