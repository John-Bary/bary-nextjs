import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: "cerulean" | "orange" | "amber" | "berry" | "emerald";
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
    ({ className, variant = "cerulean", ...props }, ref) => {
        const variants = {
            cerulean: "bg-cerulean text-white",
            orange: "bg-orange text-white",
            amber: "bg-amber text-dark-gray",
            berry: "bg-berry text-white",
            emerald: "bg-emerald text-white",
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
