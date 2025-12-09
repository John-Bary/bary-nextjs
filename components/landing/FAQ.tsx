"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useI18n } from "../i18n/I18nProvider";

function FAQItem({ question, answer, index, prefix }: { question: string; answer: string; index: number; prefix: string }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="glass-card-hover p-6">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between text-left"
      >
        <div>
          <p className="text-sm uppercase tracking-wider text-muted-foreground">
            {prefix} {String(index + 1).padStart(2, "0")}
          </p>
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
  const { t } = useI18n();

  return (
    <section id="faq" className="py-24 md:py-32 relative">
      <div className="section-gradient absolute inset-0 rotate-180" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">{t.faq.badge}</span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6">{t.faq.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.faq.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {t.faq.items.map((faq, index) => (
            <div key={faq.question}>
              <FAQItem {...faq} index={index} prefix={t.faq.itemPrefix} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
