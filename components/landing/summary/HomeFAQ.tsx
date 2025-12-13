"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
    <section className="py-16 md:py-20" id="faq">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="space-y-4 rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))]/80 p-7 shadow-[var(--shadow-md)]">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-3 block">
              FAQ
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-3">Answers, upfront</h2>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">If you need more detail, mention it in the form — we’ll cover it live.</p>
            <Link href="/faq" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80">
              Full FAQ
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {faqs.map((item, index) => (
              <div
                key={item.question}
                className="glass-card-hover p-5 rounded-2xl h-full"
              >
                <div className="text-primary text-sm font-semibold mb-2">{`FAQ ${index + 1}`}</div>
                <h3 className="font-heading text-lg font-semibold mb-2">{item.question}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
