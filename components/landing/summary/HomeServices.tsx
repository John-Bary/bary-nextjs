"use client";

import Link from "next/link";
import { Briefcase, Compass, Target, LayoutDashboard, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

const packages = [
  {
    title: "Conversion Site Sprint",
    audience: "For Baltic B2B service firms needing a site that converts meetings, not traffic.",
    deliverables: [
      "Positioning workshop + messaging hierarchy",
      "Webflow build with AA contrast, fast load, and CMS for case studies",
      "Conversion tracking for demo forms, calendar links, and calls",
    ],
    timeline: "4-6 weeks",
    outcomes: "A site that clarifies your offer and produces qualified demos (no guaranteed numbers).",
  },
  {
    title: "Lifecycle & CRM Tune-Up",
    audience: "For teams with traffic but weak nurture — especially HubSpot and email-led motions.",
    deliverables: [
      "Lifecycle mapping + lead status definitions",
      "Email/Journey setup with consent capture and preferences",
      "Reporting pack that ties form fills, meetings, and won deals",
    ],
    timeline: "3-5 weeks",
    outcomes: "Cleaner pipeline hygiene and clearer drop-off insights without overbuilding automation.",
  },
  {
    title: "Measured Paid Validation",
    audience: "For founders testing a B2B service offer with controlled spend across Google + LinkedIn.",
    deliverables: [
      "Offer angles + landing variant for paid",
      "Channel plan with when-not-to-run guidance",
      "Weekly creative and keyword experiments with source notes",
    ],
    timeline: "4 weeks to first read, 8 weeks to confidence",
    outcomes: "Evidence on whether to scale or pause paid without committing to a long retainer.",
  },
];

export function HomeServices() {
  return (
    <section className="relative bg-[hsl(var(--bg))] py-20" id="services" aria-labelledby="services-title">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))]/80 p-7 shadow-[var(--shadow-md)] space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wide text-[hsl(var(--text-muted))]">Offer packages</span>
              <h2 id="services-title" className="text-3xl font-semibold text-[hsl(var(--text))]">
                Focused engagements for B2B service teams
              </h2>
              <p className="text-[hsl(var(--text-muted))] leading-relaxed">
                One team for messaging, Webflow, CRM, and paid validation. We intentionally limit scope so you ship in weeks, not quarters.
              </p>
            </div>

            <div className="grid gap-3 rounded-2xl bg-[hsl(var(--surface-2))] p-4">
              {["Message > visuals > build", "Accessibility-first components", "Weekly founder check-ins"].map((item, index) => {
                const Icon = [Compass, Target, Briefcase][index];
                return (
                  <div key={item} className="flex items-center gap-3 text-sm text-[hsl(var(--text-muted))]">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--primary))/0.12] text-[hsl(var(--primary))]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="leading-snug">{item}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild onClick={() => trackEvent("cta_click", { location: "services_primary" })}>
                <Link href="#book-a-call" className="flex items-center gap-2 text-sm font-semibold" aria-label="Book a project intro">
                  Book this month’s slot
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Link
                href="#case-studies"
                className="text-sm font-semibold text-[hsl(var(--text))] underline-offset-4 hover:underline"
                onClick={() => trackEvent("cta_click", { location: "services_secondary" })}
              >
                See how we work
              </Link>
            </div>
          </div>

          <ServiceGrid />
        </div>
      </div>
    </section>
  );
}

function ServiceGrid() {
  const icons = [Briefcase, LayoutDashboard, Target];
  return (
    <div className="grid gap-4 md:auto-rows-fr md:grid-cols-2 lg:grid-cols-3">
      {packages.map((service, index) => {
        const Icon = icons[index];
        return (
        <Card
          key={service.title}
          className="flex h-full flex-col justify-between gap-4 rounded-2xl border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-5 shadow-[var(--shadow-sm)] transition hover:-translate-y-1 hover:border-[hsl(var(--primary))] hover:shadow-[var(--shadow-md)]"
        >
          <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[hsl(var(--primary))/0.12] text-[hsl(var(--primary))]">
                  {Icon && <Icon className="h-5 w-5" />}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[hsl(var(--text))]">{service.title}</h3>
                  <p className="text-xs uppercase tracking-wide text-[hsl(var(--text-muted))]">{service.timeline}</p>
                </div>
              </div>
            <p className="text-sm text-[hsl(var(--text-muted))]">{service.audience}</p>
          </div>
          <ul className="mt-2 space-y-2 text-sm text-[hsl(var(--text))]">
            {service.deliverables.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[hsl(var(--primary))]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-[hsl(var(--text-muted))] font-medium">{service.outcomes}</p>
        </Card>
        );
      })}
    </div>
  );
}
