"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";

type LocationSpot = {
  id: string;
  city: string;
  country: string;
  note: string;
  position: { x: number; y: number };
};

export function Locations() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const locations = useMemo<LocationSpot[]>(
    () => [
      {
        id: "adeje",
        city: "Costa Adeje",
        country: "Tenerife, Spain",
        note: t.locations.spots[0].note,
        position: { x: 43, y: 37 },
      },
      {
        id: "london",
        city: "London",
        country: "United Kingdom",
        note: t.locations.spots[1].note,
        position: { x: 50, y: 30 },
      },
      {
        id: "vilnius",
        city: "Vilnius",
        country: "Lithuania",
        note: t.locations.spots[2].note,
        position: { x: 57, y: 28 },
      },
    ],
    [t.locations.spots],
  );

  const [activeId, setActiveId] = useState(locations[0]?.id ?? "");
  const activeLocation = locations.find((location) => location.id === activeId) ?? locations[0];

  const channels = t.locations.contactCards;

  return (
    <section id="locations" className="py-24 md:py-32 relative overflow-hidden">
      <div className="floating-orb hidden sm:block w-[600px] h-[600px] bg-primary/10 top-16 -left-40 animate-pulse-glow" />
      <div className="floating-orb hidden sm:block w-[500px] h-[500px] bg-secondary/40 -bottom-16 -right-20" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            {t.locations.badge}
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            {t.locations.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.locations.description}
          </p>
        </motion.div>

        <div className="glass-card overflow-hidden p-6 sm:p-10">
          <div className="relative rounded-3xl border border-border/60 bg-secondary/40 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#94a3b830_1px,transparent_1px)] bg-[length:28px_28px] opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <Image
                src="/world-map.svg"
                alt="World map"
                width={1600}
                height={900}
                className="w-full h-[360px] sm:h-[420px] object-cover"
                priority
              />

              {locations.map((location, index) => (
                <motion.button
                  key={location.id}
                  type="button"
                  className="group absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${location.position.x}%`, top: `${location.position.y}%` }}
                  onMouseEnter={() => setActiveId(location.id)}
                  onFocus={() => setActiveId(location.id)}
                  aria-label={`${location.city}, ${location.country}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                >
                  <span className="absolute inset-0 w-16 h-16 -left-6 -top-6 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute inset-0 w-10 h-10 -left-4 -top-4 rounded-full bg-primary/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute inset-0 w-6 h-6 -left-2 -top-2 rounded-full bg-primary/40 blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex items-center justify-center w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/30 ring-4 ring-primary/30" />
                </motion.button>
              ))}

              <AnimatePresence>
                {activeLocation && (
                  <motion.div
                    key={activeLocation.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.35 }}
                    className="absolute left-1/2 -translate-x-1/2 bottom-6 w-[min(520px,90%)]"
                  >
                    <div className="glass-card bg-background/90 border border-border/60 rounded-2xl px-5 py-4 shadow-xl shadow-black/10 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-primary font-medium tracking-wide uppercase mb-1">
                          {activeLocation.country}
                        </div>
                        <div className="text-2xl font-heading font-semibold">{activeLocation.city}</div>
                        <p className="text-muted-foreground mt-2 leading-relaxed">{activeLocation.note}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {channels.map((channel, index) => (
            <motion.div
              key={channel.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              className="glass-card h-full p-6 flex flex-col gap-2"
            >
              <div className="text-sm text-muted-foreground">{channel.label}</div>
              <a
                href={channel.href}
                className="font-heading text-xl font-semibold text-foreground hover:text-primary transition-colors"
              >
                {channel.value}
              </a>
              <p className="text-muted-foreground text-sm leading-relaxed mt-2">{channel.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
