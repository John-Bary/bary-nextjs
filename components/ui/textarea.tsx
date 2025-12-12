"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "min-h-[120px] w-full rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-4 py-3 text-sm text-[hsl(var(--text))]",
          "placeholder:text-[hsl(var(--text-muted))] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--focus))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--bg))]",
          "disabled:cursor-not-allowed disabled:opacity-60",
          "resize-vertical",
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";
