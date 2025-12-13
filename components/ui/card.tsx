import * as React from "react";
import { cn } from "@/lib/utils";

type CardVariant = "default" | "muted" | "outline";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Visual style for the card. Defaults to `default`.
   */
  variant?: CardVariant;
}

const variantClasses: Record<CardVariant, string> = {
  default: "border border-[hsl(var(--border))] bg-[hsl(var(--surface))] shadow-[var(--shadow-sm)]",
  muted: "border border-transparent bg-[hsl(var(--surface-2))]",
  outline: "border border-[hsl(var(--border))] bg-[hsl(var(--surface))/0.9]",
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("rounded-2xl", variantClasses[variant], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
