"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Section, SectionHeader } from "../Section";

const faqs = [
  {
    question: "What types of projects do you take on?",
    answer:
      "Webflow sites, messaging, CRM wiring (HubSpot/email), and low-risk paid validation for Baltic B2B service firms.",
  },
  {
    question: "How do you price projects?",
    answer:
      "Discovery Sprint starts at €2,800. Launch builds typically land between €6,500 - €9,500. Growth Companion starts at €2,000/mo. Pricing is fixed per scope, never hourly.",
  },
  {
    question: "Do you handle end-to-end delivery?",
    answer:
      "Yes. We cover research, copy, design, build, QA, accessibility, and handover. If you have an internal team, we plug into existing workflows.",
  },
  {
    question: "How soon can we start?",
    answer:
      "We open 2 launch slots per month. Discovery can start within 7-10 days depending on complexity.",
  },
  {
    question: "Who will I work with?",
    answer:
      "You work directly with the founders plus specialists as needed. Weekly check-ins and transparent boards keep you in the loop.",
  },
];

export function HomeFAQ() {
  return (
    <Section id="faq">
      <Container>
        <div className="space-y-8">
          <SectionHeader
            label="FAQ"
            title="Answers, upfront"
            description="If you need more detail, mention it in the form — we’ll cover it live."
          />

          <div className="space-y-4 divide-y divide-[hsl(var(--border))] rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-4">
            {faqs.map((item, index) => (
              <details key={item.question} className="group">
                <summary className="flex cursor-pointer items-center justify-between gap-3 py-3 text-left text-base font-semibold text-[hsl(var(--text))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--focus))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--bg))]">
                  <span className="text-sm text-[hsl(var(--text))]">{item.question}</span>
                  <span className="text-xs text-[hsl(var(--text-muted))]">{`FAQ ${index + 1}`}</span>
                </summary>
                <p className="pb-3 text-sm text-[hsl(var(--text-muted))] leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
          <Link href="/faq" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80">
            Full FAQ
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
