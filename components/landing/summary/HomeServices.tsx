"use client";

import { Briefcase, Palette, Code2, TrendingUp, ArrowUpRight, Compass, Target } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/components/i18n/I18nProvider";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { TranslationContent } from "@/components/i18n/translations";

const serviceIcons = [Briefcase, Palette, Code2, TrendingUp];
type Service = TranslationContent["services"]["items"][number];

export function HomeServices() {
  const { t } = useI18n();

  return (
    <section className="relative bg-[hsl(var(--bg))] py-20" id="services">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))]/80 p-7 shadow-[var(--shadow-md)]">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wide text-[hsl(var(--text-muted))]">
                {t.services.badge}
              </span>
              <h2 className="text-3xl font-semibold text-[hsl(var(--text))]">
                {t.services.title}
              </h2>
              <p className="text-[hsl(var(--text-muted))] leading-relaxed">{t.services.description}</p>
            </div>

            <div className="mt-6 grid gap-3 rounded-2xl bg-[hsl(var(--surface-2))] p-4">
              {[t.services.items[0].title, t.services.items[2].title, t.services.items[3]?.title].filter(Boolean).map((item, index) => {
                const Icon = [Compass, Target, Briefcase][index];
                return (
                  <div key={item as string} className="flex items-center gap-3 text-sm text-[hsl(var(--text-muted))]">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--primary))/0.12] text-[hsl(var(--primary))]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="leading-snug">{item as string}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild>
                <Link href="/services" className="flex items-center gap-2 text-sm font-semibold">
                  {t.navbar.links.find((link) => link.href === "/services")?.label}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <p className="text-sm text-[hsl(var(--text-muted))]">Full-funnel service blends with the same colour system.</p>
            </div>
          </div>

          <ServiceGrid services={t.services.items} />
        </div>
      </div>
    </section>
  );
}

function ServiceGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid gap-4 md:auto-rows-fr md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => {
        const Icon = serviceIcons[index % serviceIcons.length];
        return (
          <Card
            key={service.title}
            className="flex h-full flex-col justify-between gap-4 rounded-2xl border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-5 shadow-[var(--shadow-sm)] transition hover:-translate-y-1 hover:border-[hsl(var(--primary))] hover:shadow-[var(--shadow-md)]"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[hsl(var(--primary))/0.12] text-[hsl(var(--primary))]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-[hsl(var(--text))]">{service.title}</h3>
              </div>
              <p className="text-sm text-[hsl(var(--text-muted))]">{service.description}</p>
            </div>
            <ul className="mt-2 space-y-2 text-sm text-[hsl(var(--text))]">
              {service.features.slice(0, 3).map((feature: string) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[hsl(var(--primary))]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        );
      })}
    </div>
  );
}
