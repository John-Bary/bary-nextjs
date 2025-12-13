"use client";

import { motion } from "framer-motion";
import { CalendarClock, Clock4, PhoneCall, Sparkles, Linkedin, User } from "lucide-react";
import { FormEvent, useState } from "react";
import { trackEvent } from "@/lib/analytics";

const founders = [
  {
    name: "TODO: Founder Name",
    role: "Strategy & positioning",
    credibility: "Former consultant guiding B2B service firms across the Baltics.",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "TODO: Co-founder Name",
    role: "Delivery & systems",
    credibility: "Leads Webflow, HubSpot, and analytics rollouts with an accessibility-first lens.",
    linkedin: "https://www.linkedin.com",
  },
];

export function BookCall() {
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  const handleFallbackSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    trackEvent("contact_submit", { location: "fallback_email" });
    const subject = encodeURIComponent("BARY — project inquiry");
    const body = encodeURIComponent(`Email: ${email}\nNotes: ${notes}`);
    window.location.href = `mailto:bary@gmx.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="book-a-call" className="py-24 md:py-32 relative">
      <div className="section-gradient absolute inset-0" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Book a call
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">
            Talk with the founders, get a plan
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            15-minute intro to confirm fit, map the first 90 days, and leave with a prioritised checklist. No pressure to sign — we care about clarity first.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
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
                {["We’ll map your funnel and blockers", "You’ll get 2-3 next steps and a timeline", "If we’re not a fit, we’ll say so"]
                  .map((perk) => (
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
                onClick={() => trackEvent("booking_start", { location: "book_call" })}
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
                {[{ day: "Tuesday", time: "09:00 - 12:00 EET" }, { day: "Thursday", time: "13:00 - 17:00 EET" }, { day: "Friday", time: "11:00 - 15:00 EET" }].map((slot) => (
                  <div key={slot.day} className="p-4 rounded-xl bg-secondary/60 border border-border">
                    <p className="text-sm font-medium text-foreground">{slot.day}</p>
                    <p className="text-sm text-muted-foreground">{slot.time}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Need another time? Mention it in the form and we’ll accommodate.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            className="glass-card p-8 space-y-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm uppercase tracking-wider text-muted-foreground">Discovery outline</p>
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
                    <p className="text-sm text-muted-foreground">We focus on signal so you can act right after the call.</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {founders.map((founder) => (
                <div key={founder.name} className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface-2))] p-4 flex gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--primary))/0.12] text-[hsl(var(--primary))]" aria-hidden>
                    <User className="h-5 w-5" />
                  </div>
                  <div className="space-y-1 text-sm">
                    <p className="font-semibold text-[hsl(var(--text))]">{founder.name}</p>
                    <p className="text-[hsl(var(--text-muted))]">{founder.role}</p>
                    <p className="text-[hsl(var(--text-muted))]">{founder.credibility}</p>
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[hsl(var(--text))] underline-offset-4 hover:underline"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-primary/10 via-accent/10 to-transparent border border-primary/20">
              <p className="text-sm text-muted-foreground">
                Prefer email? Fill the fallback form — we reply within one business day.
              </p>
              <form className="mt-4 space-y-3" onSubmit={handleFallbackSubmit}>
                <label className="block text-sm font-semibold text-[hsl(var(--text))]" htmlFor="email">
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-3 py-2 text-[hsl(var(--text))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--focus))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--bg))]"
                />
                <label className="block text-sm font-semibold text-[hsl(var(--text))]" htmlFor="notes">
                  Context (optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  className="w-full rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-3 py-2 text-[hsl(var(--text))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--focus))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--bg))]"
                />
                <button
                  type="submit"
                  onClick={() => trackEvent("contact_submit", { location: "fallback_email_click" })}
                  className="inline-flex items-center gap-2 rounded-md bg-[hsl(var(--primary))] px-4 py-2 text-sm font-semibold text-[hsl(var(--primary-contrast))] shadow-[var(--shadow-sm)] hover:bg-[hsl(var(--primary-hover))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--focus))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--bg))]"
                >
                  Send by email
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
