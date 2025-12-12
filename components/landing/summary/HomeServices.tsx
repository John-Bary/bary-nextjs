"use client";

import { ArrowUpRight, Briefcase, Code2, Palette, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/components/i18n/I18nProvider";

const serviceIcons = [Briefcase, Palette, Code2, TrendingUp];

export function HomeServices() {
  const { t } = useI18n();

  return (
    <section className="py-20 md:py-24 relative" id="services">
      <div className="section-gradient absolute inset-0" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-3 block">
              {t.services.badge}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-3">{t.services.title}</h2>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              {t.services.description}
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
          >
            {t.navbar.links.find((link) => link.href === "/services")?.label}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            return (
              <div key={service.title} className="glass-card-hover p-6 sm:p-7 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-foreground/80">
                  {service.features.slice(0, 2).map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
