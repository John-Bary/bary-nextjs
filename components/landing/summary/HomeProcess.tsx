"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/components/i18n/I18nProvider";

export function HomeProcess() {
  const { t } = useI18n();
  const steps = t.process.steps.slice(0, 3);

  return (
    <section className="py-16 md:py-20" id="process">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="space-y-4 rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))]/80 p-7 shadow-[var(--shadow-md)]">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-3 block">
              {t.process.badge}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-3">{t.process.title}</h2>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">{t.process.description}</p>
            <Link
              href="/process"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
            >
              {t.process.cta}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-5 shadow-[var(--shadow-sm)]"
              >
                <div className="absolute inset-y-0 left-0 w-1 rounded-full bg-[hsl(var(--primary))]" aria-hidden />
                <div className="flex flex-col gap-2 pl-4">
                  <div className="text-primary font-semibold text-sm">{step.number}</div>
                  <h3 className="font-heading text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  <div className="text-xs text-[hsl(var(--text-muted))]">{index === 0 ? "Discovery" : index === 1 ? "Delivery" : "Optimization"}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
