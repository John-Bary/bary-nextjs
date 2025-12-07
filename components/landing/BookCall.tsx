"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CalendarClock, Clock4, PhoneCall, Sparkles } from "lucide-react";

const perks = [
  "15-minute intro to scope your goals and timeline",
  "We'll share quick ideas and the best next step",
  "No obligation — just clarity on fit and approach",
];

const slots = [
  { day: "Tuesday", time: "09:00 - 12:00 EET" },
  { day: "Thursday", time: "13:00 - 17:00 EET" },
  { day: "Friday", time: "11:00 - 15:00 EET" },
];

export function BookCall() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="book-a-call" className="py-32 relative">
      <div className="section-gradient absolute inset-0" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Book a Call
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Talk with the founders
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Grab a quick slot to validate fit, map your next 90 days, and leave with a clear action plan.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <PhoneCall className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground">Intro call</p>
                  <h3 className="font-heading text-2xl font-semibold">Free, fast, and focused</h3>
                </div>
              </div>

              <ul className="space-y-3 text-muted-foreground">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://calendly.com/u0060604156"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/25"
              >
                Book a call
                <CalendarClock className="w-5 h-5" />
              </a>
            </div>

            <div className="glass-card p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Clock4 className="w-5 h-5 text-primary" />
                <p className="text-sm uppercase tracking-wider text-muted-foreground">Typical availability</p>
              </div>
              <div className="grid sm:grid-cols-3 gap-3">
                {slots.map((slot) => (
                  <div key={slot.day} className="p-4 rounded-xl bg-secondary/60 border border-border">
                    <p className="text-sm font-medium text-foreground">{slot.day}</p>
                    <p className="text-sm text-muted-foreground">{slot.time}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Need another time? Mention it in the contact form and we&apos;ll accommodate.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm uppercase tracking-wider text-muted-foreground">Discovery Outline</p>
                <h3 className="font-heading text-2xl font-semibold">What we cover in 15 minutes</h3>
              </div>
              <CalendarClock className="w-6 h-6 text-primary" />
            </div>

            <div className="space-y-4">
              {["Goals & success metrics", "Current bottlenecks", "Budget & timeline", "Next best step"].map((item, idx) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="font-medium">{item}</p>
                    {idx === 2 ? (
                      <p className="text-sm text-muted-foreground">We tailor our approach to your constraints and team.</p>
                    ) : idx === 3 ? (
                      <p className="text-sm text-muted-foreground">Walk away with a simple plan you can execute immediately.</p>
                    ) : (
                      <p className="text-sm text-muted-foreground">We go straight to the signal so you get value fast.</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-4 rounded-xl bg-gradient-to-r from-primary/10 via-accent/10 to-transparent border border-primary/20">
              <p className="text-sm text-muted-foreground">
                Prefer email? Reach us at <span className="text-foreground">hello@bary.lt</span> — we&apos;ll reply within one business day.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
