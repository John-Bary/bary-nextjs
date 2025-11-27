"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { useLanguage, type Translations } from '@/components/providers/LanguageProvider';

type AboutStatKey = keyof Translations["about"]["stats"];

const stats: { value: number; suffix: string; key: AboutStatKey; color: "cerulean" | "orange" | "emerald" | "berry" }[] = [
    { value: 50, suffix: "+", key: "projects", color: "cerulean" },
    { value: 98, suffix: "%", key: "satisfaction", color: "orange" },
    { value: 5, suffix: "+", key: "years", color: "emerald" },
    { value: 10, suffix: "+", key: "team", color: "berry" }
];

export function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="section">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl items-center mb-2xl">
                    <div className="w-full h-[400px] lg:h-[400px] rounded-2xl flex items-center justify-center bg-gradient-to-br from-cerulean/15 to-orange/15 glass-medium frosted-card border border-white/30 shadow-[0_16px_56px_rgba(0,0,0,0.1)] overflow-hidden">
                        <Image
                            src="/logo.png"
                            alt="bary.lt"
                            width={400}
                            height={200}
                            className="max-w-[80%] h-auto"
                        />
                    </div>

                    <div>
                        <h2 className="mb-lg">{t.about.heading}</h2>
                        <p className="text-large mb-md">
                            {t.about.paragraphs[0]}
                        </p>
                        <p className="mb-md">
                            {t.about.paragraphs[1]}
                        </p>
                        <p className="mb-xl">
                            {t.about.paragraphs[2]}
                        </p>
                        <Link href="#contact">
                            <Button>{t.about.cta}</Button>
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
                            <Card className="flex h-full w-full max-w-[340px] sm:max-w-full mx-auto min-h-[220px] sm:min-h-[260px] flex-col items-center justify-center text-center aspect-auto sm:aspect-[3/4] p-lg sm:p-xl">
                                <div className={`text-[38px] sm:text-h1 font-bold leading-none mb-xs ${stat.color === 'cerulean' ? 'text-cerulean' :
                                        stat.color === 'orange' ? 'text-orange' :
                                            stat.color === 'emerald' ? 'text-emerald' :
                                                'text-berry'
                                    }`}>
                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                </div>
                                <h5 className="mb-xs">{t.about.stats[stat.key].label}</h5>
                                <p className="text-small m-0 text-text-gray">{t.about.stats[stat.key].description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
