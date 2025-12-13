"use client";

import Link from "next/link";
import { ArrowUpRight, CircleDot } from "lucide-react";
import { useI18n } from "@/components/i18n/I18nProvider";

export function HomeAbout() {
  const { t } = useI18n();
  const paragraphs = t.about.paragraphs;

  return (
    <section className="py-16 md:py-20" id="about">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-4 rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))]/80 p-7 shadow-[var(--shadow-md)]">
            <span className="text-primary text-sm font-medium tracking-wider uppercase block">
              {t.about.badge}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">
              {t.about.title} <span className="gradient-text">{t.about.highlight}</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">{paragraphs[0]}</p>
            <p className="text-muted-foreground leading-relaxed">{paragraphs[1]}</p>
            <Link href="/about" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80">
              {t.about.cta}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {t.about.stats.slice(0, 4).map((stat) => (
              <div key={stat.label} className="glass-card-hover p-4 sm:p-5 rounded-2xl flex flex-col gap-2">
                <div className="flex items-center gap-2 text-primary">
                  <CircleDot className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wide font-semibold">{stat.sublabel}</span>
                </div>
                <div className="font-heading text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
