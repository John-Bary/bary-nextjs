"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkle } from "lucide-react";
import { useI18n } from "@/components/i18n/I18nProvider";

export function HomeAdPlatforms() {
  const { t } = useI18n();

  return (
    <section className="py-16 md:py-20" id="ad-platforms">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-3 block">
              {t.adPlatforms.badge}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-3">{t.adPlatforms.title}</h2>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">{t.adPlatforms.description}</p>
          </div>
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
            <div key={platform.key} className="glass-card-hover flex h-full flex-col gap-3 p-5">
              <div className="flex items-center gap-2">
                <Sparkle className="w-4 h-4 text-primary" />
                <h3 className="font-heading text-lg font-semibold">{platform.name}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{platform.summary}</p>
              <p className="text-foreground/80 text-sm">{platform.bestFor}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
