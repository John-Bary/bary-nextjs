import * as React from "react";
import { SlotProps } from "@radix-ui/react-slot";

export interface DropdownMenuRootProps {
  children?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const Root: React.FC<DropdownMenuRootProps>;
export const Trigger: React.ForwardRefExoticComponent<SlotProps & React.RefAttributes<HTMLElement>>;
export const Portal: React.FC<{ children?: React.ReactNode }>;
export interface DropdownMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: "start" | "center" | "end";
  sideOffset?: number;
}
export const Content: React.ForwardRefExoticComponent<
  DropdownMenuContentProps & React.RefAttributes<HTMLDivElement>
>;
export const Item: React.ForwardRefExoticComponent<
  React.ButtonHTMLAttributes<HTMLButtonElement> & { onSelect?: (event: Event) => void } & React.RefAttributes<HTMLButtonElement>
>;
export const Label: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
>;
export const Separator: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
>;
export const Group: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
>;
