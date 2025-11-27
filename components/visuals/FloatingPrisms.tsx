"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type PrismProps = {
  size?: number;
  className?: string;
  animationDuration?: number;
  spinDirection?: 1 | -1;
};

function Orb({ size = 140, className, animationDuration = 14, spinDirection = 1 }: PrismProps) {
  const rings = [
    { inset: "0%", stroke: "rgba(255,255,255,0.16)", blur: "0 10px 24px rgba(0,0,0,0.08)" },
    { inset: "12%", stroke: "rgba(255,255,255,0.12)", blur: "0 8px 20px rgba(0,0,0,0.06)" },
    { inset: "24%", stroke: "rgba(255,255,255,0.1)", blur: "0 6px 18px rgba(0,0,0,0.05)" },
  ];

  const shellGradient = "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.55), rgba(180,206,255,0.18) 40%, rgba(110,157,200,0.08) 65%, rgba(120,140,180,0.04) 100%)";
  const glowGradient = "radial-gradient(circle, rgba(120,190,240,0.2), rgba(90,140,200,0.0) 60%)";

  return (
    <motion.div
      className={cn("relative", className)}
      style={{ width: size, height: size, perspective: 1000, transformStyle: "preserve-3d" }}
      animate={{
        rotateX: [10, -8, 10],
        rotateY: [-8, 8, -8],
        rotateZ: [1.5 * spinDirection, -1.5 * spinDirection, 1.5 * spinDirection],
      }}
      transition={{ duration: animationDuration, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ background: glowGradient, filter: "blur(10px)" }}
        animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: animationDuration * 0.6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 rounded-full" style={{ background: shellGradient, border: "1px solid rgba(255,255,255,0.25)" }} />

      {rings.map((ring, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            inset: ring.inset,
            border: `1px solid ${ring.stroke}`,
            boxShadow: ring.blur,
          }}
          animate={{ rotateZ: [0, 360 * spinDirection] }}
          transition={{ duration: animationDuration + index * 2, repeat: Infinity, ease: "linear" }}
        />
      ))}

      <div
        className="absolute inset-[26%]"
        style={{ transformStyle: "preserve-3d", transform: "translateZ(32px)" }}
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.55),rgba(255,255,255,0))]"
          style={{ mixBlendMode: "screen" }}
          animate={{ scale: [0.9, 1.08, 0.9], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: animationDuration * 0.7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}

const prismField = [
  { top: "10%", left: "14%", size: 120, duration: 18, float: { x: [-10, 10, -10], y: [-16, 16, -16] } },
  { top: "24%", right: "12%", size: 110, duration: 17, float: { x: [9, -9, 9], y: [-12, 12, -12] }, direction: -1 },
  { top: "46%", left: "24%", size: 100, duration: 20, float: { x: [-6, 6, -6], y: [10, -10, 10] } },
  { top: "64%", right: "16%", size: 115, duration: 19, float: { x: [5, -5, 5], y: [12, -12, 12] }, direction: -1 },
  { top: "80%", left: "10%", size: 95, duration: 16, float: { x: [-8, 8, -8], y: [9, -9, 9] } },
];

export function FloatingPrismsBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {prismField.map((prism, index) => (
        <motion.div
          key={index}
          className="absolute opacity-50"
          style={{ top: prism.top, left: prism.left, right: prism.right, width: prism.size, height: prism.size }}
          animate={{ x: prism.float.x, y: prism.float.y }}
          transition={{ duration: prism.duration, repeat: Infinity, ease: "easeInOut" }}
        >
          <Orb size={prism.size} animationDuration={prism.duration} spinDirection={prism.direction === -1 ? -1 : 1} />
        </motion.div>
      ))}
    </div>
  );
}
