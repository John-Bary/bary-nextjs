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
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-3 block">
              {t.process.badge}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-3">{t.process.title}</h2>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">{t.process.description}</p>
          </div>
          <Link
            href="/process"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
          >
            {t.process.cta}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((step) => (
            <div key={step.number} className="glass-card-hover p-5 flex flex-col gap-3">
              <div className="text-primary font-semibold text-sm">{step.number}</div>
              <h3 className="font-heading text-xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
