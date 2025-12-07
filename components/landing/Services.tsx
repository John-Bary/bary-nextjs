"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Briefcase, Code2, Palette, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Business Consulting",
    description: "Strategic planning and market analysis that identifies opportunities and eliminates inefficiencies. We help you make data-driven decisions.",
    features: ["Business strategy & planning", "Market and competitor analysis", "Operations optimization", "KPI and performance tracking"],
  },
  {
    icon: Palette,
    title: "Creative Services",
    description: "Brand identity and visual design that captures attention and builds recognition. We create cohesive visual languages that resonate.",
    features: ["Brand identity & logo design", "Full visual guidelines", "UI/UX design", "Marketing visuals"],
  },
  {
    icon: Code2,
    title: "Digital Solutions",
    description: "Custom web applications and digital products built with modern technologies. Scalable platforms that drive business growth.",
    features: ["Website development", "Custom software & dashboards", "API integrations", "Automation systems"],
  },
  {
    icon: TrendingUp,
    title: "Marketing Strategies",
    description: "Performance-focused marketing that drives visibility and growth. Data-driven campaigns across all channels.",
    features: ["Marketing strategy", "Social media strategy", "Performance ads", "SEO & content"],
  },
];

function ServiceCard({ service, index }: { service: typeof services[number]; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group glass-card-hover p-8 flex flex-col h-full"
    >
      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
        <Icon className="w-7 h-7 text-primary" />
      </div>

      <h3 className="font-heading text-2xl font-semibold mb-4 flex items-center justify-between">
        {service.title}
        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
      </h3>

      <p className="text-muted-foreground mb-6 leading-relaxed">
        {service.description}
      </p>

      <div className="mt-auto space-y-3">
        {service.features.map((feature, i) => (
          <div key={feature} className="flex items-center gap-3 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-foreground/80">{feature}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function Services() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 relative">
      <div className="section-gradient absolute inset-0" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We combine strategic thinking with creative execution to solve complex business challenges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
