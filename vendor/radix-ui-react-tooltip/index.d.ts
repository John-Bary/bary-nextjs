import * as React from "react";
import { SlotProps } from "@radix-ui/react-slot";

export interface TooltipProviderProps {
  children?: React.ReactNode;
  delayDuration?: number;
}

export const Provider: React.FC<TooltipProviderProps>;
export const Root: React.FC<TooltipProviderProps>;
export const Trigger: React.ForwardRefExoticComponent<SlotProps & React.RefAttributes<HTMLElement>>;
export const Portal: React.FC<{ children?: React.ReactNode }>;
export interface TooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  sideOffset?: number;
}
export const Content: React.ForwardRefExoticComponent<
  TooltipContentProps & React.RefAttributes<HTMLDivElement>
>;
export const Arrow: React.FC<React.HTMLAttributes<HTMLDivElement>>;
