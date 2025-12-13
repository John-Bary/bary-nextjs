import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: "primary" | "muted";
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
    ({ className, variant = "primary", ...props }, ref) => {
        const variants = {
            primary: "bg-primary text-primary-foreground",
            muted: "bg-[hsl(var(--surface-2))] text-[hsl(var(--text))]",
        };

        return (
            <span
                ref={ref}
                className={cn(
                    "inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full whitespace-nowrap",
                    variants[variant],
                    className
                )}
                {...props}
            />
        );
    }
);

Badge.displayName = "Badge";

export { Badge };
