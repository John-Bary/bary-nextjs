"use client";

import * as React from "react";
import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";

export const DropdownMenu = DropdownPrimitive.Root;
export const DropdownMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Trigger> & { asChild?: boolean }
>(({ className, ...props }, ref) => (
  <DropdownPrimitive.Trigger ref={ref} className={className} {...props} />
));
DropdownMenuTrigger.displayName = DropdownPrimitive.Trigger.displayName;
export const DropdownMenuGroup = DropdownPrimitive.Group;
export const DropdownMenuPortal = DropdownPrimitive.Portal;

export const DropdownMenuContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Content>
>(({ className, align = "end", sideOffset = 8, ...props }, ref) => (
  <DropdownPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 min-w-[12rem] rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-2 shadow-[var(--shadow-lg)]",
      "animate-fade-in",
      className
    )}
    {...props}
  />
));
DropdownMenuContent.displayName = DropdownPrimitive.Content.displayName;

export const DropdownMenuLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Label>
>(({ className, ...props }, ref) => (
  <DropdownPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-xs font-semibold text-[hsl(var(--text-muted))]", className)}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownPrimitive.Label.displayName;

export const DropdownMenuItem = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Item>
>(({ className, ...props }, ref) => (
  <DropdownPrimitive.Item
    ref={ref}
    className={cn(
      "flex w-full cursor-pointer select-none items-center rounded-md px-3 py-2 text-sm text-[hsl(var(--text))]",
      "focus:bg-[hsl(var(--surface-2))] focus:outline-none",
      className
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownPrimitive.Item.displayName;

export const DropdownMenuSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownPrimitive.Separator
    ref={ref}
    className={cn("my-2 h-px bg-[hsl(var(--border))]", className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownPrimitive.Separator.displayName;
