import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: "default" | "muted";
} & HTMLAttributes<HTMLElement>;

export function Section({ id, children, className, background, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        background === "muted" ? "bg-[hsl(var(--bg))]" : "",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
}: {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("space-y-3", align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl")}> 
      {label && (
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--text-muted))]">{label}</span>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[hsl(var(--text))] text-balance">{title}</h2>
      {description && <p className="text-[hsl(var(--text-muted))] leading-relaxed text-base">{description}</p>}
    </div>
  );
}
