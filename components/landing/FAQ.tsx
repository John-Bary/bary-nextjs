"use client";

import { useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What types of projects do you take on?",
    answer:
      "We help with strategy sprints, brand identity, UI/UX, marketing sites, and product builds. Typical engagements range from 4 to 12 weeks based on scope.",
  },
  {
    question: "Do you handle end-to-end delivery?",
    answer:
      "Yes. We cover research, strategy, design, development, and launch. If you already have internal teams, we can plug into existing workflows.",
  },
  {
    question: "How do you price projects?",
    answer:
      "We scope around outcomes and complexity, not hours. Most projects land between €2,500 - €10,000, with fixed-fee milestones and weekly check-ins.",
  },
  {
    question: "How soon can we start?",
    answer:
      "We can usually kick off within 7-10 days. For urgent timelines, we can adjust resourcing or run an accelerated discovery to unblock decisions quickly.",
  },
  {
    question: "What does collaboration look like?",
    answer:
      "You'll work directly with the founders and senior specialists. Expect async updates, Loom walkthroughs, and transparent boards so you always know status.",
  },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="glass-card-hover p-6">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between text-left"
      >
        <div>
          <p className="text-sm uppercase tracking-wider text-muted-foreground">FAQ {String(index + 1).padStart(2, "0")}</p>
          <h3 className="font-heading text-xl font-semibold mt-2">{question}</h3>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180 text-primary" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 text-muted-foreground"
          >
            <p className="leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-32 relative">
      <div className="section-gradient absolute inset-0 rotate-180" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">FAQ</span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Answers, upfront</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The essentials clients ask before partnering with us. If you need more detail, drop us a line.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <FAQItem {...faq} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
