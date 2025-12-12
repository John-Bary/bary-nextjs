import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  muted?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, muted, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] shadow-[var(--shadow-sm)]",
          muted && "bg-[hsl(var(--surface-2))]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
