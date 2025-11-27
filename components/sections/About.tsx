"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const stats = [
    { value: 50, suffix: "+", label: "Projects Completed", description: "Across multiple industries", color: "cerulean" },
    { value: 98, suffix: "%", label: "Client Satisfaction", description: "Based on post-project surveys", color: "orange" },
    { value: 5, suffix: "+", label: "Years of Excellence", description: "Consistent quality delivery", color: "emerald" },
    { value: 10, suffix: "+", label: "Expert Team", description: "Specialists in their fields", color: "berry" }
];

function AnimatedCounter({ value, suffix = "", duration = 1200 }: { value: number; suffix?: string; duration?: number }) {
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
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [inView, duration, value]);

    return (
        <span ref={ref} className="inline-flex items-baseline gap-1">
            <span>{displayValue}</span>
            {suffix && <span>{suffix}</span>}
        </span>
    );
}

export function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl items-center mb-2xl">
                    <div className="w-full h-[400px] lg:h-[400px] rounded-xl flex items-center justify-center bg-gradient-to-br from-cerulean/10 to-orange/10">
                        <Image
                            src="/logo.png"
                            alt="bary.lt"
                            width={400}
                            height={200}
                            className="max-w-[80%] h-auto"
                        />
                    </div>

                    <div>
                        <h2 className="mb-lg">About BARY</h2>
                        <p className="text-large mb-md">
                            We're a strategic consulting and creative agency based in Vilnius, Lithuania. Since 2019, we've
                            helped businesses across Europe transform their operations, strengthen their brands, and build
                            digital products that scale.
                        </p>
                        <p className="mb-md">
                            Our approach is straightforward: understand the problem, develop a clear strategy, and execute
                            with precision. We don't believe in unnecessary complexity or drawn-out timelines. We believe in
                            delivering measurable results.
                        </p>
                        <p className="mb-xl">
                            Our team brings together expertise in business strategy, design, and technology. This
                            combination allows us to tackle challenges holistically—from initial concept through final
                            implementation.
                        </p>
                        <Link href="#contact">
                            <Button>Work With Us</Button>
                        </Link>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid auto-rows-[1fr] grid-cols-1 items-stretch gap-lg sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="h-full"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="flex h-full w-full min-h-[260px] flex-col items-center justify-center text-center aspect-[3/4]">
                                <div className={`text-h1 font-bold leading-none mb-xs ${stat.color === 'cerulean' ? 'text-cerulean' :
                                        stat.color === 'orange' ? 'text-orange' :
                                            stat.color === 'emerald' ? 'text-emerald' :
                                                'text-berry'
                                    }`}>
                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                </div>
                                <h5 className="mb-xs">{stat.label}</h5>
                                <p className="text-small m-0 text-text-gray">{stat.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
