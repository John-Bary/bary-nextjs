"use client";

import React from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedCounterProps = {
    value: number;
    suffix?: string;
    duration?: number;
    className?: string;
};

// Counts up when it enters the viewport.
export function AnimatedCounter({ value, suffix = "", duration = 1200, className }: AnimatedCounterProps) {
    const ref = React.useRef<HTMLSpanElement | null>(null);
    const inView = useInView(ref, { once: true, margin: "-20% 0px" });
    const [displayValue, setDisplayValue] = React.useState(0);
    const hasAnimated = React.useRef(false);

    React.useEffect(() => {
        if (!inView || hasAnimated.current) return;
        hasAnimated.current = true;

        const start = performance.now();
        const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const next = Math.round(progress * value);
            setDisplayValue(next);
            if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, [inView, duration, value]);

    return (
        <span ref={ref} className={cn("inline-flex items-baseline gap-1", className)}>
            <span>{displayValue}</span>
            {suffix && <span>{suffix}</span>}
        </span>
    );
}
