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
        const baseStyles = "relative overflow-hidden isolate inline-flex items-center justify-center gap-xs font-semibold rounded-md transition-all duration-base cursor-pointer border-none focus:outline-none focus:ring-4 focus:ring-cerulean/25";

        const variants = {
            primary: "bg-cerulean text-white shadow-[0_6px_18px_rgba(38,67,230,0.26)] hover:bg-[#213AC9] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(38,67,230,0.36)] active:translate-y-0 active:shadow-[0_2px_10px_rgba(38,67,230,0.18)]",
            secondary: "bg-transparent text-cerulean border-2 border-cerulean hover:bg-cerulean hover:text-white hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(38,67,230,0.25)]",
            glass: "glass frosted-card text-dark-gray border border-white/30 hover:bg-white/85 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(17,23,42,0.18)]",
            orange: "bg-orange text-dark-gray shadow-[0_6px_18px_rgba(246,163,19,0.28)] hover:bg-[#E89A12] hover:text-white hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(246,163,19,0.36)]",
            emerald: "bg-emerald text-white shadow-[0_6px_18px_rgba(26,196,168,0.26)] hover:bg-[#17AE95] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(26,196,168,0.34)]",
            berry: "bg-berry text-white shadow-[0_6px_18px_rgba(213,64,143,0.26)] hover:bg-[#C53A82] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(213,64,143,0.34)]",
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
                            className="pointer-events-none absolute inset-[-20%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.2),rgba(255,255,255,0))]"
                            variants={rippleVariants}
                            animate={hovered ? "hover" : "initial"}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                        <motion.span
                            className="pointer-events-none absolute inset-[-10%] rounded-full bg-[radial-gradient(circle,rgba(38,67,230,0.24),rgba(38,67,230,0))]"
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
