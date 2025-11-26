import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "w-full px-5 py-3.5 text-base text-dark-gray bg-white/90 backdrop-blur-glass-subtle border border-black/10 rounded-md transition-all duration-base",
                    "focus:outline-none focus:border-cerulean focus:ring-4 focus:ring-cerulean/10",
                    "placeholder:text-border-gray",
                    className
                )}
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif' }}
                ref={ref}
                {...props}
            />
        );
    }
);

Input.displayName = "Input";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                className={cn(
                    "w-full px-5 py-3.5 text-base text-dark-gray bg-white/90 backdrop-blur-glass-subtle border border-black/10 rounded-md transition-all duration-base resize-vertical min-h-[120px]",
                    "focus:outline-none focus:border-cerulean focus:ring-4 focus:ring-cerulean/10",
                    "placeholder:text-border-gray",
                    className
                )}
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif' }}
                ref={ref}
                {...props}
            />
        );
    }
);

Textarea.displayName = "Textarea";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> { }

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ className, ...props }, ref) => {
        return (
            <select
                className={cn(
                    "w-full px-5 py-3.5 text-base text-dark-gray bg-white/90 backdrop-blur-glass-subtle border border-black/10 rounded-md transition-all duration-base",
                    "focus:outline-none focus:border-cerulean focus:ring-4 focus:ring-cerulean/10",
                    className
                )}
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif' }}
                ref={ref}
                {...props}
            />
        );
    }
);

Select.displayName = "Select";

export { Input, Textarea, Select };
