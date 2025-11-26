import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "glass" | "orange" | "emerald" | "berry";
    size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center gap-xs font-semibold rounded-md transition-all duration-base cursor-pointer border-none focus:outline-none focus:ring-4 focus:ring-cerulean/20";

        const variants = {
            primary: "bg-cerulean text-white shadow-[0_4px_16px_rgba(34,116,165,0.24)] hover:bg-[#1a5a82] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(34,116,165,0.32)] active:translate-y-0 active:shadow-[0_2px_8px_rgba(34,116,165,0.16)]",
            secondary: "bg-transparent text-cerulean border-2 border-cerulean hover:bg-cerulean hover:text-white hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(34,116,165,0.24)]",
            glass: "glass text-dark-gray hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]",
            orange: "bg-orange text-white shadow-[0_4px_16px_rgba(247,92,3,0.24)] hover:bg-[#d94f02] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(247,92,3,0.32)]",
            emerald: "bg-emerald text-white shadow-[0_4px_16px_rgba(0,204,102,0.24)] hover:bg-[#00b359] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,204,102,0.32)]",
            berry: "bg-berry text-white shadow-[0_4px_16px_rgba(217,3,104,0.24)] hover:bg-[#b8025a] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(217,3,104,0.32)]",
        };

        const sizes = {
            sm: "px-5 py-2.5 text-sm rounded-sm",
            md: "px-8 py-3.5 text-base",
            lg: "px-10 py-[18px] text-lg rounded-[14px]",
        };

        return (
            <button
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                ref={ref}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

export { Button };
