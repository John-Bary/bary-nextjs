"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "10+", label: "Projects Completed", sublabel: "Across multiple industries" },
  { value: "99%", label: "Client Satisfaction", sublabel: "Based on post-project surveys" },
  { value: "2+", label: "Years of Excellence", sublabel: "Consistent quality delivery" },
  { value: "5+", label: "Expert Team", sublabel: "Specialists in their fields" },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div
        className="floating-orb w-[500px] h-[500px] bg-primary/10 top-1/2 -translate-y-1/2 -right-60 animate-pulse-glow"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              About BARY
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-8 leading-tight">
              Strategic consulting
              <br />
              <span className="gradient-text">& creative agency</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                We're a strategic consulting and creative agency based in Vilnius, Lithuania.
                Since 2024, we've helped businesses across Europe transform their operations,
                strengthen their brands, and build digital products that scale.
              </p>
              <p>
                Our approach is straightforward: understand the problem, develop a clear strategy,
                and execute with precision. We don't believe in unnecessary complexity or drawn-out
                timelines. We believe in delivering measurable results.
              </p>
              <p>
                Our team brings together expertise in business strategy, design, and technology.
                This combination allows us to tackle challenges holistically—from initial concept
                through final implementation.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground font-medium transition-all duration-300"
            >
              Work With Us
            </a>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card relative overflow-hidden rounded-2xl p-5 sm:p-6 text-center border border-white/10 shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background/60 to-secondary/5" />
                <div className="relative flex flex-col gap-2">
                <div className="text-4xl sm:text-5xl font-heading font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-foreground font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
