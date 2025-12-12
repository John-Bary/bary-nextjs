"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const buttonVariants = {
  primary:
    "bg-[hsl(var(--primary))] text-[hsl(var(--primary-contrast))] shadow-[var(--shadow-md)] hover:bg-[hsl(var(--primary-hover))] focus-visible:ring-2 focus-visible:ring-[hsl(var(--focus))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--bg))]",
  secondary:
    "bg-[hsl(var(--surface-2))] text-[hsl(var(--text))] border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--text))]",
  ghost:
    "bg-transparent text-[hsl(var(--text))] hover:bg-[hsl(var(--surface-2))]",
  destructive:
    "bg-[hsl(var(--danger))] text-[hsl(var(--primary-contrast))] hover:bg-[hsl(var(--danger))/0.9]",
};

const buttonSizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export type ButtonVariant = keyof typeof buttonVariants;
export type ButtonSize = keyof typeof buttonSizes;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

export const Button = React.forwardRef<React.ElementRef<"button">, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      asChild = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors duration-200",
          "focus-visible:outline-none disabled:opacity-60 disabled:cursor-not-allowed",
          "shadow-sm",
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";
