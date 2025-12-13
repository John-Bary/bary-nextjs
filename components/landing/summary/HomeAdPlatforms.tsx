"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkle } from "lucide-react";
import { useI18n } from "@/components/i18n/I18nProvider";

export function HomeAdPlatforms() {
  const { t } = useI18n();

  return (
    <section className="py-16 md:py-20" id="ad-platforms">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="space-y-4 rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))]/80 p-7 shadow-[var(--shadow-md)]">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-3 block">
              {t.adPlatforms.badge}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-2">{t.adPlatforms.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.adPlatforms.description}</p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
            >
              {t.adPlatforms.title}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid gap-4 md:auto-rows-fr md:grid-cols-2 lg:grid-cols-3">
            {t.adPlatforms.platforms.slice(0, 6).map((platform) => (
              <div
                key={platform.key}
                className="relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-5 shadow-[var(--shadow-sm)] transition hover:-translate-y-1 hover:border-[hsl(var(--primary))] hover:shadow-[var(--shadow-md)]"
              >
                <div className="absolute right-4 top-4 h-10 w-10 rounded-full bg-[hsl(var(--primary))/0.1]" aria-hidden />
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[hsl(var(--primary))/0.14] text-primary">
                    <Sparkle className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold">{platform.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{platform.summary}</p>
                <p className="text-foreground/80 text-sm">{platform.bestFor}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
