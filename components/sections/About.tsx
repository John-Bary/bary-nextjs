"use client";

import React from 'react';
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

function About3DAnimation() {
    const layers = [
        {
            id: 'front',
            z: 56,
            scale: 1,
            gradient: 'linear-gradient(135deg, rgba(110, 231, 255, 0.95), rgba(142, 241, 226, 0.95))',
            glow: '0 16px 42px rgba(0, 0, 0, 0.12)',
        },
        {
            id: 'middle',
            z: 32,
            scale: 0.92,
            gradient: 'linear-gradient(135deg, rgba(247, 92, 3, 0.82), rgba(247, 196, 107, 0.65))',
            glow: '0 14px 38px rgba(247, 92, 3, 0.2)',
        },
        {
            id: 'back',
            z: 16,
            scale: 0.86,
            gradient: 'linear-gradient(140deg, rgba(34, 116, 165, 0.9), rgba(96, 164, 255, 0.48))',
            glow: '0 12px 32px rgba(34, 116, 165, 0.18)',
        },
    ];

    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <motion.div
                className="absolute inset-[-20%] bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.9),transparent_45%)] blur-3xl opacity-60"
                animate={{ rotate: [0, 10, -6, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute inset-[-18%] bg-[radial-gradient(circle_at_80%_20%,rgba(34,116,165,0.16),transparent_50%)] blur-3xl opacity-70"
                animate={{ rotate: [0, -8, 6, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
                className="relative w-[260px] h-[260px]"
                style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
                animate={{ rotateX: [14, -10, 14], rotateY: [-12, 12, -12], rotateZ: [2, -2, 2] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            >
                {layers.map((layer, index) => (
                    <motion.div
                        key={layer.id}
                        className="absolute inset-0 rounded-[32px] border border-white/25 shadow-lg"
                        style={{
                            translateZ: layer.z,
                            scale: layer.scale,
                            background: layer.gradient,
                            boxShadow: layer.glow,
                            transformStyle: 'preserve-3d',
                        }}
                        animate={{ y: [0, -10, 0], rotateZ: [0, 1.5, 0] }}
                        transition={{ duration: 6 + index * 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                ))}

                <motion.div
                    className="absolute inset-[14%] rounded-[28px] bg-white/18 backdrop-blur-lg border border-white/20"
                    style={{ translateZ: 72, boxShadow: '0 18px 48px rgba(0,0,0,0.08)' }}
                    animate={{ y: [-6, 6, -6] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />

                <motion.div
                    className="absolute inset-[8%] rounded-full border border-white/50 shadow-[0_10px_28px_rgba(0,0,0,0.12)]"
                    style={{ translateZ: 80 }}
                    animate={{ rotateZ: 360 }}
                    transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                />

                <motion.div
                    className="absolute inset-[30%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.9),rgba(255,255,255,0))]"
                    style={{ translateZ: 90, mixBlendMode: 'screen' }}
                    animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                />
            </motion.div>
        </div>
    );
}

export function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="section">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl items-center mb-2xl">
                    <div className="w-full h-[400px] lg:h-[400px] rounded-2xl flex items-center justify-center bg-gradient-to-br from-cerulean/15 to-orange/15 glass-medium frosted-card border border-white/30 shadow-[0_16px_56px_rgba(0,0,0,0.1)] overflow-hidden">
                        <About3DAnimation />
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
