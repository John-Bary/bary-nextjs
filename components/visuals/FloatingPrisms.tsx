"use client";

import React from "react";
import { motion } from "framer-motion";

type Pulse = {
  size: number;
  top?: string;
  left?: string;
  right?: string;
  color: string;
  duration: number;
  delay?: number;
};

const pulses: Pulse[] = [
  { size: 420, top: "12%", left: "10%", color: "rgba(82, 150, 200, 0.12)", duration: 12 },
  { size: 360, top: "28%", right: "12%", color: "rgba(120, 180, 220, 0.1)", duration: 14, delay: 2 },
  { size: 320, top: "52%", left: "18%", color: "rgba(160, 200, 240, 0.08)", duration: 16, delay: 1 },
  { size: 380, top: "70%", right: "18%", color: "rgba(130, 180, 220, 0.09)", duration: 15, delay: 3 },
  { size: 300, top: "82%", left: "8%", color: "rgba(100, 160, 210, 0.08)", duration: 13, delay: 4 },
];

export function FloatingPrismsBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {pulses.map((pulse, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full blur-3xl"
          style={{
            top: pulse.top,
            left: pulse.left,
            right: pulse.right,
            width: pulse.size,
            height: pulse.size,
            background: `radial-gradient(circle, ${pulse.color}, rgba(255,255,255,0))`,
            opacity: 0.45,
          }}
          animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.35, 0.5, 0.35] }}
          transition={{ duration: pulse.duration, repeat: Infinity, ease: "easeInOut", delay: pulse.delay ?? 0 }}
        />
      ))}
    </div>
  );
}
