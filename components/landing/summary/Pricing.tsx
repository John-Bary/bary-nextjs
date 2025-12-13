"use client";

import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import { Card } from "@/components/ui/card";
import { Container, Section, SectionHeader } from "../Section";

const tiers = [
  {
    name: "Discovery Sprint",
    price: "Starts at €2,800",
    description: "2-week engagement to clarify positioning and a prioritized roadmap.",
    includes: ["Stakeholder workshop", "Messaging + site map", "Implementation plan"],
    bestFor: "Teams needing clarity before building",
  },
  {
    name: "Launch Build",
    price: "Typical range €6,500 - €9,500",
    description: "Webflow site + CRM wiring + analytics with accessibility baked in.",
    includes: ["Design + build", "HubSpot/forms setup", "QA + accessibility report"],
    bestFor: "B2B service teams shipping a new site in 6-8 weeks",
  },
  {
    name: "Growth Companion",
    price: "From €2,000/mo",
    description: "Ongoing experiments: landing updates, nurture tweaks, and light paid validation.",
    includes: ["Monthly roadmap", "Creative + keyword tests", "Reporting cadence"],
    bestFor: "Teams with traffic who need consistent iteration",
  },
];

export function Pricing() {
  return (
    <Section id="pricing" aria-labelledby="pricing-title" background="muted">
      <Container>
        <div className="space-y-8">
          <SectionHeader
            label="Pricing"
            title="Straightforward, outcome-based pricing"
            description="Fixed scopes based on complexity — every tier includes accessibility, QA, and weekly founder access."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {tiers.map((tier, index) => (
              <Card
                key={tier.name}
                className={`flex h-full flex-col p-6 ${index === 1 ? "border-[hsl(var(--primary))] shadow-[var(--shadow-md)]" : ""}`}
              >
                <div className="mb-3 text-xs uppercase tracking-wide text-[hsl(var(--text-muted))]">{tier.bestFor}</div>
                <h3 className="text-xl font-semibold text-[hsl(var(--text))]">{tier.name}</h3>
                <p className="text-lg font-semibold text-[hsl(var(--text))]">{tier.price}</p>
                <p className="mt-2 text-sm text-[hsl(var(--text-muted))]">{tier.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-[hsl(var(--text))]">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-[hsl(var(--primary))]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--text))] underline-offset-4 hover:underline"
                  onClick={() => trackEvent("cta_click", { location: `pricing_${tier.name}` })}
                >
                  Discuss this tier
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
