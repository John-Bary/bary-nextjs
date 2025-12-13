"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
    <section className="py-20 md:py-24" id="case-studies">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))]/80 p-7 shadow-[var(--shadow-md)]">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-3 block">
              Proof of work
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-3">Sample case studies</h2>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              Real client names are redacted until approvals are secured. Each story follows the same template: problem → approach → deliverables → timeline → result.
            </p>
            <Link
              href="/testimonials"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
            >
              View full library
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid gap-4 md:auto-rows-fr md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <div
                key={study.title}
                className="relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-6 shadow-[var(--shadow-sm)] transition hover:-translate-y-1 hover:border-[hsl(var(--primary))] hover:shadow-[var(--shadow-md)]"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs uppercase tracking-wide text-primary font-semibold">{study.industry}</div>
                  {study.isSample && <span className="text-[10px] rounded-full bg-[hsl(var(--surface-2))] px-2 py-1 text-[hsl(var(--text-muted))]">Sample</span>}
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">{study.title}</h3>
                <div className="space-y-2 text-sm text-[hsl(var(--text-muted))] leading-relaxed">
                  <p><strong className="text-[hsl(var(--text))]">Problem: </strong>{study.problem}</p>
                  <p><strong className="text-[hsl(var(--text))]">Approach: </strong>{study.approach}</p>
                  <p><strong className="text-[hsl(var(--text))]">Deliverables: </strong>{study.deliverables.join(", ")}</p>
                  <p><strong className="text-[hsl(var(--text))]">Timeline: </strong>{study.timeline}</p>
                  {study.result && <p><strong className="text-[hsl(var(--text))]">Result: </strong>{study.result}</p>}
                  {study.testimonial && (
                    <p className="italic text-[hsl(var(--text))]">“{study.testimonial}”</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
