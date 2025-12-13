"use client";

import { Card } from "@/components/ui/card";
import { Container, Section, SectionHeader } from "../Section";

const logos = ["Fintech partner", "Logistics coop", "Vilnius tech", "EU services"];
const proofPoints = [
  { label: "Launch slots each month", value: "2", detail: "So we stay hands-on" },
  { label: "Accessibility standard", value: "AA", detail: "Contrast + keyboard first" },
  { label: "Average delivery", value: "6–8 weeks", detail: "Site + CRM wired" },
];

export function SocialProof() {
  return (
    <Section background="muted">
      <Container>
        <div className="space-y-8">
          <SectionHeader
            label="Credibility"
            title="Proof points, not promises"
            description="We keep the roster small, build with accessibility baked in, and publish results once clients approve."
          />

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <Card variant="muted" className="p-6">
              <div className="text-sm font-semibold text-[hsl(var(--text))] mb-3">Recent collaborators</div>
              <div className="flex flex-wrap gap-3">
                {logos.map((logo) => (
                  <span
                    key={logo}
                    className="rounded-full bg-[hsl(var(--surface))] px-4 py-2 text-xs font-semibold text-[hsl(var(--text-muted))] shadow-[var(--shadow-sm)]"
                  >
                    {logo}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-[hsl(var(--text-muted))]">Client names are anonymized until publication approvals clear.</p>
            </Card>

            <div className="grid gap-4 sm:grid-cols-3">
              {proofPoints.map((point) => (
                <Card key={point.label} className="p-4 text-center">
                  <div className="text-3xl font-bold text-[hsl(var(--text))]">{point.value}</div>
                  <p className="text-sm font-semibold text-[hsl(var(--text))]">{point.label}</p>
                  <p className="text-xs text-[hsl(var(--text-muted))]">{point.detail}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
