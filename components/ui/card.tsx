import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "compact" | "featured";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = "default", ...props }, ref) => {
        const variants = {
            default: "glass frosted-card rounded-xl p-xl shadow-lg transition-all duration-slow hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.14)]",
            compact: "glass frosted-card rounded-lg p-md shadow-sm",
            featured: "glass frosted-card rounded-2xl p-12 shadow-[0_16px_56px_rgba(0,0,0,0.14)]",
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
