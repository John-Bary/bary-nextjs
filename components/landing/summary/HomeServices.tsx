"use client";

import Link from "next/link";
import { ArrowRight, Briefcase, LayoutDashboard, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Container, Section, SectionHeader } from "../Section";
import { trackEvent } from "@/lib/analytics";

const packages = [
  {
    title: "Conversion Site Sprint",
    audience: "For B2B service firms needing the site to book qualified meetings.",
    deliverables: [
      "Positioning workshop + messaging hierarchy",
      "Webflow build with AA contrast and CMS for proof",
      "Conversion tracking for demos, calls, and calendar links",
    ],
    timeline: "4-6 weeks",
    outcomes: "A site that clarifies the offer and removes form-drop friction.",
  },
  {
    title: "Lifecycle & CRM Tune-Up",
    audience: "For teams with traffic but weak nurture — especially HubSpot motions.",
    deliverables: [
      "Lifecycle mapping + lead status definitions",
      "Email/journey setup with consent and preferences",
      "Reporting pack tying form fills, meetings, and won deals",
    ],
    timeline: "3-5 weeks",
    outcomes: "Cleaner pipeline hygiene and clearer drop-off signals.",
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
    <Section id="services" background="muted" aria-labelledby="services-title">
      <Container>
        <div className="space-y-10">
          <SectionHeader
            label="Services"
            title="Three ways to work together"
            description="Message, design, build, and measurement under one roof. We limit concurrent work so your launch stays on schedule."
          />

          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <Card variant="outline" className="space-y-5 p-6">
              <div className="space-y-3">
                <h3 id="services-title" className="text-2xl font-semibold text-[hsl(var(--text))]">
                  What stays consistent
                </h3>
                <p className="text-[hsl(var(--text-muted))] leading-relaxed">
                  Every package follows the same rhythm: tighten the narrative, design with accessibility defaults, wire CRM + analytics, then validate with light experiments.
                </p>
              </div>
              <ul className="grid gap-3 text-sm text-[hsl(var(--text))] sm:grid-cols-2">
                {["Message first, visuals second", "Accessibility baked in", "Founder check-ins weekly", "Measurement before paid"].map((item) => (
                  <li key={item} className="flex items-center gap-3 rounded-xl bg-[hsl(var(--surface-2))] px-3 py-2 text-[hsl(var(--text-muted))]">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[hsl(var(--primary))/0.12] text-[hsl(var(--primary))]">
                      <Target className="h-4 w-4" />
                    </span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild onClick={() => trackEvent("cta_click", { location: "services_primary" })}>
                  <Link href="#contact" className="flex items-center gap-2 text-sm font-semibold" aria-label="Book a project intro">
                    Hold a launch slot
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
            </Card>

            <ServiceGrid />
          </div>
        </div>
      </Container>
    </Section>
  );
}

function ServiceGrid() {
  const icons = [Briefcase, LayoutDashboard, Target];
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {packages.map((service, index) => {
        const Icon = icons[index];
        return (
          <Card
            key={service.title}
            className="flex h-full flex-col justify-between gap-4 p-5 transition hover:-translate-y-1 hover:border-[hsl(var(--primary))] hover:shadow-[var(--shadow-md)]"
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
