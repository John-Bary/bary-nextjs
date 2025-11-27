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

function Prism({ size = 160, className, animationDuration = 12, spinDirection = 1 }: PrismProps) {
  const layers = [
    {
      id: "front",
      z: 36,
      scale: 1,
      gradient: "linear-gradient(135deg, rgba(110, 231, 255, 0.95), rgba(142, 241, 226, 0.95))",
      glow: "0 12px 32px rgba(0, 0, 0, 0.12)",
    },
    {
      id: "middle",
      z: 22,
      scale: 0.9,
      gradient: "linear-gradient(135deg, rgba(247, 92, 3, 0.75), rgba(247, 196, 107, 0.55))",
      glow: "0 10px 28px rgba(247, 92, 3, 0.18)",
    },
    {
      id: "back",
      z: 12,
      scale: 0.82,
      gradient: "linear-gradient(140deg, rgba(34, 116, 165, 0.9), rgba(96, 164, 255, 0.48))",
      glow: "0 8px 22px rgba(34, 116, 165, 0.16)",
    },
  ];

  return (
    <motion.div
      className={cn("relative", className)}
      style={{ width: size, height: size, perspective: 1000, transformStyle: "preserve-3d" }}
      animate={{
        rotateX: [12, -10, 12],
        rotateY: [-10, 10, -10],
        rotateZ: [2 * spinDirection, -2 * spinDirection, 2 * spinDirection],
      }}
      transition={{ duration: animationDuration, repeat: Infinity, ease: "easeInOut" }}
    >
      {layers.map((layer, index) => (
        <div
          key={layer.id}
          className="absolute inset-0"
          style={{ transformStyle: "preserve-3d", transform: `translateZ(${layer.z}px) scale(${layer.scale})` }}
        >
          <motion.div
            className="absolute inset-0 rounded-[28px] border border-white/25 shadow-lg"
            style={{
              background: layer.gradient,
              boxShadow: layer.glow,
              transformStyle: "preserve-3d",
            }}
            animate={{ y: [0, -8, 0], rotateZ: [0, 1.2, 0] }}
            transition={{ duration: 6 + index * 1.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      ))}

      <div
        className="absolute inset-[16%]"
        style={{ transformStyle: "preserve-3d", transform: "translateZ(48px)" }}
      >
        <motion.div
          className="absolute inset-0 rounded-[24px] bg-white/14 backdrop-blur-lg border border-white/20"
          style={{ boxShadow: "0 14px 38px rgba(0,0,0,0.08)" }}
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div
        className="absolute inset-[12%]"
        style={{ transformStyle: "preserve-3d", transform: "translateZ(58px)" }}
      >
        <motion.div
          className="absolute inset-0 rounded-full border border-white/40 shadow-[0_8px_22px_rgba(0,0,0,0.12)]"
          animate={{ rotateZ: 360 * spinDirection }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div
        className="absolute inset-[34%]"
        style={{ transformStyle: "preserve-3d", transform: "translateZ(64px)" }}
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.9),rgba(255,255,255,0))]"
          style={{ mixBlendMode: "screen" }}
          animate={{ scale: [0.85, 1.05, 0.85], opacity: [0.65, 1, 0.65] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}

const prismField = [
  { top: "12%", left: "12%", size: 140, duration: 15, float: { x: [-12, 12, -12], y: [-18, 18, -18] } },
  { top: "22%", right: "10%", size: 120, duration: 13, float: { x: [10, -10, 10], y: [-14, 14, -14] }, direction: -1 },
  { top: "48%", left: "26%", size: 110, duration: 17, float: { x: [-8, 8, -8], y: [12, -12, 12] } },
  { top: "62%", right: "18%", size: 130, duration: 16, float: { x: [6, -6, 6], y: [14, -14, 14] }, direction: -1 },
  { top: "78%", left: "8%", size: 100, duration: 14, float: { x: [-10, 10, -10], y: [10, -10, 10] } },
];

export function FloatingPrismsBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {prismField.map((prism, index) => (
        <motion.div
          key={index}
          className="absolute opacity-70"
          style={{ top: prism.top, left: prism.left, right: prism.right, width: prism.size, height: prism.size }}
          animate={{ x: prism.float.x, y: prism.float.y }}
          transition={{ duration: prism.duration, repeat: Infinity, ease: "easeInOut" }}
        >
          <Prism size={prism.size} animationDuration={prism.duration} spinDirection={prism.direction === -1 ? -1 : 1} />
        </motion.div>
      ))}
    </div>
  );
}
