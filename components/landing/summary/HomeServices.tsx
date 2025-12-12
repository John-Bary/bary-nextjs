"use client";

import { Briefcase, Palette, Code2, TrendingUp, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/components/i18n/I18nProvider";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { TranslationContent } from "@/components/i18n/translations";

const serviceIcons = [Briefcase, Palette, Code2, TrendingUp];
type Service = TranslationContent["services"]["items"][number];

export function HomeServices() {
  const { t } = useI18n();

  const categories = [
    { key: "core", label: "Core" },
    { key: "growth", label: "Growth" },
  ];

  return (
    <section className="relative bg-[hsl(var(--bg))] py-20" id="services">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-[hsl(var(--text-muted))]">
              {t.services.badge}
            </span>
            <h2 className="text-3xl font-semibold text-[hsl(var(--text))]">{t.services.title}</h2>
            <p className="max-w-2xl text-[hsl(var(--text-muted))]">{t.services.description}</p>
          </div>
          <Button asChild variant="ghost" className="self-start md:self-end">
            <Link href="/services" className="flex items-center gap-2 text-sm font-semibold">
              {t.navbar.links.find((link) => link.href === "/services")?.label}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <Tabs defaultValue="core" className="mt-8">
            <TabsList>
              {categories.map((category) => (
                <TabsTrigger key={category.key} value={category.key}>
                  <span>{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

          <TabsContent value="core" className="mt-6">
            <ServiceGrid services={t.services.items.slice(0, 3)} />
          </TabsContent>
          <TabsContent value="growth" className="mt-6">
            <ServiceGrid services={t.services.items.slice(1)} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function ServiceGrid({ services }: { services: Service[] }) {
  return (
    <div
      className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:auto-rows-fr md:grid-cols-2 lg:grid-cols-3 md:gap-4 md:overflow-visible md:snap-none"
    >
      {services.map((service, index) => {
        const Icon = serviceIcons[index % serviceIcons.length];
        return (
          <Card
            key={service.title}
            className="flex h-full w-full min-w-[280px] shrink-0 snap-start flex-col justify-between p-5 transition hover:-translate-y-1 hover:shadow-[var(--shadow-md)] md:w-auto md:min-w-0 md:snap-none"
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
            <ul className="mt-4 space-y-2 text-sm text-[hsl(var(--text))]">
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
