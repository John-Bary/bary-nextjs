import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type MotionButtonProps = React.ComponentPropsWithoutRef<typeof motion.button>;

export interface ButtonProps extends Omit<MotionButtonProps, "ref" | "children"> {
    children?: React.ReactNode;
    variant?: "primary" | "secondary" | "glass" | "orange" | "emerald" | "berry";
    size?: "sm" | "md" | "lg";
    liquid?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", liquid = true, children, ...props }, ref) => {
        const baseStyles = "relative overflow-hidden isolate inline-flex items-center justify-center gap-xs font-semibold rounded-md transition-all duration-base cursor-pointer border-none focus:outline-none focus:ring-4 focus:ring-cerulean/20";

        const variants = {
            primary: "bg-cerulean text-white shadow-[0_4px_16px_rgba(100,158,192,0.24)] hover:bg-[#5F8CA8] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(100,158,192,0.32)] active:translate-y-0 active:shadow-[0_2px_8px_rgba(100,158,192,0.16)]",
            secondary: "bg-transparent text-cerulean border-2 border-cerulean hover:bg-cerulean hover:text-white hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(100,158,192,0.24)]",
            glass: "glass frosted-card text-dark-gray border border-white/30 hover:bg-white/85 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]",
            orange: "bg-orange text-white shadow-[0_4px_16px_rgba(249,141,79,0.24)] hover:bg-[#E4844E] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(249,141,79,0.32)]",
            emerald: "bg-emerald text-white shadow-[0_4px_16px_rgba(76,219,148,0.24)] hover:bg-[#4CCA8B] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(76,219,148,0.32)]",
            berry: "bg-berry text-white shadow-[0_4px_16px_rgba(228,79,149,0.24)] hover:bg-[#CD4E8C] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(228,79,149,0.32)]",
        };

        const sizes = {
            sm: "px-5 py-2.5 text-sm rounded-sm",
            md: "px-8 py-3.5 text-base",
            lg: "px-10 py-[18px] text-lg rounded-[14px]",
        };

        const [hovered, setHovered] = React.useState(false);

        const rippleVariants = {
            initial: { scale: 0.2, opacity: 0 },
            hover: { scale: 2.2, opacity: 0.12 },
        };

        const glowVariants = {
            initial: { scale: 0.6, opacity: 0 },
            hover: { scale: 1.6, opacity: 0.07 },
        };

        return (
            <motion.button
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                ref={ref}
                onMouseEnter={(e) => {
                    setHovered(true);
                    props.onMouseEnter?.(e);
                }}
                onMouseLeave={(e) => {
                    setHovered(false);
                    props.onMouseLeave?.(e);
                }}
                {...props}
            >
                {liquid && (
                    <>
                        <motion.span
                            className="pointer-events-none absolute inset-[-20%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.6),rgba(255,255,255,0))]"
                            variants={rippleVariants}
                            animate={hovered ? "hover" : "initial"}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                        <motion.span
                            className="pointer-events-none absolute inset-[-10%] rounded-full bg-[radial-gradient(circle,rgba(100,158,192,0.32),rgba(100,158,192,0))]"
                            variants={glowVariants}
                            animate={hovered ? "hover" : "initial"}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        />
                    </>
                )}
                <span className="relative z-10 flex items-center gap-2">
                    {children}
                </span>
            </motion.button>
        );
    }
);

Button.displayName = "Button";

export { Button };
