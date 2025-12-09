"use client";

import { ArrowUpRight, Briefcase, Code2, Palette, TrendingUp } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";

const serviceIcons = [Briefcase, Palette, Code2, TrendingUp];

function ServiceCard({
  service,
  index,
  Icon,
}: {
  service: { title: string; description: string; features: readonly string[] };
  index: number;
  Icon: typeof Briefcase;
}) {
  return (
    <div className="group glass-card-hover p-6 sm:p-8 flex flex-col h-full">
      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
        <Icon className="w-7 h-7 text-primary" />
      </div>

      <h3 className="font-heading text-2xl font-semibold mb-4 flex items-center justify-between">
        {service.title}
        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
      </h3>

      <p className="text-muted-foreground mb-6 leading-relaxed">
        {service.description}
      </p>

      <div className="mt-auto space-y-3">
        {service.features.map((feature) => (
          <div key={feature} className="flex items-center gap-3 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-foreground/80">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Services() {
  const { t } = useI18n();

  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="section-gradient absolute inset-0" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-14 sm:mb-20">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            {t.services.badge}
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            {t.services.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.services.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            return <ServiceCard key={service.title} service={service} index={index} Icon={Icon} />;
          })}
        </div>
      </div>
    </section>
  );
}
