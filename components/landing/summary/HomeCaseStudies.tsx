"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Container, Section, SectionHeader } from "../Section";

type CaseStudy = {
  industry: string;
  title: string;
  problem: string;
  approach: string;
  deliverables: string[];
  timeline: string;
  result?: string;
  testimonial?: string;
  isSample?: boolean;
};

const caseStudies: CaseStudy[] = [
  {
    industry: "Professional services (sample)",
    title: "Advisory firm website reset",
    problem: "Leads arrived via referrals but prospects were unclear on the offer and pricing range.",
    approach: "We rebuilt the narrative to speak to decision-makers, replaced generic icons, and connected forms to HubSpot stages.",
    deliverables: ["Positioning sprint", "Webflow rebuild", "HubSpot routing", "Accessibility audit"],
    timeline: "6 weeks",
    testimonial: "Sample case study — awaiting client approval for publishing.",
    isSample: true,
  },
  {
    industry: "Technology services (sample)",
    title: "Data platform launch",
    problem: "The MVP had traction but no clear messaging for EU buyers and no nurture journey.",
    approach: "Created a founder-led landing, built a structured CMS for use-cases, and launched a minimal paid validation loop.",
    deliverables: ["Narrative + page flows", "CMS case library", "Email nurture x3", "Paid search starter"],
    timeline: "8 weeks",
    result: "Team received qualitative feedback that clarified the ICP before scaling spend.",
    isSample: true,
  },
  {
    industry: "Logistics (placeholder)",
    title: "Operational visibility dashboard",
    problem: "Regional logistics provider needed to expose ETA data to customers without rebuilding core systems.",
    approach: "We designed a lightweight portal, integrated with existing spreadsheets, and documented handoff for their IT partner.",
    deliverables: ["User flows", "Design system", "Portal prototype", "Handoff docs"],
    timeline: "5 weeks",
    result: "Placeholder until client approves publication.",
    testimonial: "TODO: replace with client quote.",
  },
];

export function HomeCaseStudies() {
  return (
    <Section id="case-studies">
      <Container>
        <div className="space-y-10">
          <SectionHeader
            label="Proof of work"
            title="Case studies with approvals pending"
            description="Names are anonymized until clients approve publication. Each story follows the same structure: problem → approach → deliverables → timeline → result."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {caseStudies.map((study) => (
              <Card
                key={study.title}
                className="relative flex h-full flex-col gap-4 p-6 transition hover:-translate-y-1 hover:border-[hsl(var(--primary))] hover:shadow-[var(--shadow-md)]"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs uppercase tracking-wide text-primary font-semibold">{study.industry}</div>
                  {study.isSample && <span className="text-[10px] rounded-full bg-[hsl(var(--surface-2))] px-2 py-1 text-[hsl(var(--text-muted))]">Sample</span>}
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">{study.title}</h3>
                <ul className="space-y-2 text-sm text-[hsl(var(--text-muted))] leading-relaxed">
                  <li><strong className="text-[hsl(var(--text))]">Problem:</strong> {study.problem}</li>
                  <li><strong className="text-[hsl(var(--text))]">Approach:</strong> {study.approach}</li>
                  <li><strong className="text-[hsl(var(--text))]">Deliverables:</strong> {study.deliverables.join(", ")}</li>
                  <li><strong className="text-[hsl(var(--text))]">Timeline:</strong> {study.timeline}</li>
                  {study.result && <li><strong className="text-[hsl(var(--text))]">Result:</strong> {study.result}</li>}
                  {study.testimonial && <li className="italic text-[hsl(var(--text))]">“{study.testimonial}”</li>}
                </ul>
              </Card>
            ))}
          </div>
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
          >
            View full library
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
