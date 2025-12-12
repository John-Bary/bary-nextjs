"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "@/lib/utils";

export const Select = SelectPrimitive.Root;
export const SelectValue = SelectPrimitive.Value;

export const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-11 w-full items-center justify-between rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-4 text-sm text-[hsl(var(--text))] shadow-sm",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--focus))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--bg))]",
      "disabled:cursor-not-allowed disabled:opacity-60",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 text-[hsl(var(--text-muted))]" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

export const SelectContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 min-w-[12rem] overflow-hidden rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--surface))] shadow-[var(--shadow-lg)]",
        className
      )}
      {...props}
    >
      <SelectPrimitive.Viewport className="p-1">{children}</SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

export const SelectItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-pointer select-none items-center rounded-md px-3 py-2 text-sm text-[hsl(var(--text))]",
      "focus:bg-[hsl(var(--surface-2))] focus:outline-none",
      "data-[state=checked]:text-[hsl(var(--text))]",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <SelectPrimitive.ItemIndicator className="mr-2 inline-flex h-4 w-4 items-center justify-center">
      <Check className="h-3 w-3" />
    </SelectPrimitive.ItemIndicator>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
