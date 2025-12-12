"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useI18n } from "../i18n/I18nProvider";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-[hsl(var(--bg))]">
      <div className="hero-backdrop absolute inset-0" aria-hidden />
      <div className="container relative z-10 mx-auto px-4 pb-20 pt-28 md:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 text-balance">
            <div className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[hsl(var(--text-muted))]">
              <span className="h-2 w-2 rounded-full bg-[hsl(var(--success))]" aria-hidden />
              {t.hero.badge}
            </div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {t.hero.title}
              <span className="block gradient-text">{t.hero.highlight}</span>
            </h1>
            <p className="max-w-2xl text-lg text-[hsl(var(--text-muted))]">
              {t.hero.description}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <Link href="#contact" className="flex items-center gap-2">
                  {t.hero.ctas.primary}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="#services">{t.hero.ctas.secondary}</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-[hsl(var(--text-muted))]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[hsl(var(--success))]" />
                <span>{t.hero.badge}</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[hsl(var(--accent))]" />
                <span>{t.hero.ctas.secondary}</span>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <Card className="p-5 shadow-[var(--shadow-md)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[hsl(var(--text-muted))]">Engagement growth</p>
                  <p className="text-3xl font-semibold text-[hsl(var(--text))]">+142%</p>
                </div>
                <LineChart className="h-12 w-12 text-[hsl(var(--primary))]" />
              </div>
              <p className="mt-3 text-sm text-[hsl(var(--text-muted))]">
                Built with a cross-channel roadmap that protects accessibility and brand consistency.
              </p>
            </Card>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4">
                <p className="text-sm text-[hsl(var(--text-muted))]">Average ROI</p>
                <p className="text-2xl font-semibold">4.6x</p>
              </Card>
              <Card className="p-4">
                <p className="text-sm text-[hsl(var(--text-muted))]">Projects delivered</p>
                <p className="text-2xl font-semibold">180+</p>
              </Card>
            </div>
            <Card className="p-4 bg-[hsl(var(--surface-2))]">
              <p className="text-sm font-medium text-[hsl(var(--text))]">Customer spotlight</p>
              <p className="mt-2 text-sm text-[hsl(var(--text-muted))]">
                "Bary rebuilt our launch playbook and gave us predictable growth. The new design system keeps every page cohesive."
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-[hsl(var(--text-muted))]">
                <span className="h-8 w-8 rounded-full bg-[hsl(var(--primary))/0.12]" />
                <div>
                  <p className="font-semibold text-[hsl(var(--text))]">Dovile, COO</p>
                  <p>Series A SaaS</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
