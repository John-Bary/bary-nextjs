import * as React from "react";
import { SlotProps } from "@radix-ui/react-slot";

export interface TabsRootProps {
  children?: React.ReactNode;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export const Root: React.FC<TabsRootProps>;
export const List: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
>;
export interface TabsTriggerProps extends SlotProps {
  value: string;
}
export const Trigger: React.ForwardRefExoticComponent<TabsTriggerProps & React.RefAttributes<HTMLElement>>;
export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}
export const Content: React.ForwardRefExoticComponent<
  TabsContentProps & React.RefAttributes<HTMLDivElement>
>;
