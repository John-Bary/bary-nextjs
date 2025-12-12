import * as React from "react";
import { SlotProps } from "@radix-ui/react-slot";

export interface SelectRootProps {
  children?: React.ReactNode;
  value?: string;
  defaultValue?: string;
  defaultOpen?: boolean;
  onValueChange?: (value: string) => void;
}

export const Root: React.FC<SelectRootProps>;
export const Trigger: React.ForwardRefExoticComponent<SlotProps & React.RefAttributes<HTMLElement>>;
export interface SelectValueProps extends React.HTMLAttributes<HTMLSpanElement> {
  placeholder?: React.ReactNode;
}
export const Value: React.FC<SelectValueProps>;
export const Portal: React.FC<{ children?: React.ReactNode }>;
export const Content: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
>;
export interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  disabled?: boolean;
}
export const Item: React.ForwardRefExoticComponent<
  SelectItemProps & React.RefAttributes<HTMLDivElement>
>;
export const Group: React.FC<React.HTMLAttributes<HTMLDivElement>>;
export const Label: React.FC<React.HTMLAttributes<HTMLDivElement>>;
export const ScrollUpButton: React.FC<React.HTMLAttributes<HTMLDivElement>>;
export const ScrollDownButton: React.FC<React.HTMLAttributes<HTMLDivElement>>;
export const Viewport: React.FC<React.HTMLAttributes<HTMLDivElement>>;
export const Separator: React.FC<React.HTMLAttributes<HTMLDivElement>>;
export const Icon: React.ForwardRefExoticComponent<SlotProps & React.RefAttributes<HTMLElement>>;
export const ItemIndicator: React.FC<React.HTMLAttributes<HTMLSpanElement>>;
export const ItemText: React.FC<React.HTMLAttributes<HTMLSpanElement>>;
