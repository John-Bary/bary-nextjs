import * as React from "react";
import { SlotProps } from "@radix-ui/react-slot";

export interface DialogRootProps {
  children?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const Root: React.FC<DialogRootProps>;
export const Trigger: React.ForwardRefExoticComponent<SlotProps & React.RefAttributes<HTMLElement>>;
export const Portal: React.FC<{ children?: React.ReactNode }>;
export const Overlay: React.FC<React.HTMLAttributes<HTMLDivElement>>;
export const Content: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
>;
export const Title: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>
>;
export const Description: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>
>;
export const Close: React.ForwardRefExoticComponent<SlotProps & React.RefAttributes<HTMLElement>>;
