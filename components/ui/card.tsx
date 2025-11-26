import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "compact" | "featured";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = "default", ...props }, ref) => {
        const variants = {
            default: "glass rounded-xl p-xl shadow-lg transition-all duration-slow hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)]",
            compact: "glass rounded-lg p-md shadow-sm",
            featured: "glass rounded-2xl p-12 shadow-[0_12px_48px_rgba(0,0,0,0.12)]",
        };

        return (
            <div
                ref={ref}
                className={cn(variants[variant], className)}
                {...props}
            />
        );
    }
);

Card.displayName = "Card";

export { Card };
