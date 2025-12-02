"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/LanguageProvider';

export function Hero() {
    const { t } = useLanguage();

    return (
        <section id="home" className="relative bg-gradient-to-b from-[#f8fafc] via-white to-[#eef2f6] py-16 sm:py-20">
            <div className="container">
                <div className="grid items-center gap-10 lg:gap-16 md:grid-cols-[1fr_1.1fr]">
                    <motion.div
                        className="relative w-full md:w-[48%] justify-self-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative h-[320px] sm:h-[380px] md:h-[460px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-white/40 backdrop-blur">
                            <Image
                                src="/pexels-leish-5255319.jpg"
                                alt="Consulting team at work"
                                fill
                                priority
                                className="object-cover object-center"
                                sizes="(min-width: 1024px) 45vw, (min-width: 640px) 70vw, 100vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald/10 via-black/10 to-cerulean/20 mix-blend-multiply" />
                        </div>
                    </motion.div>

                    <motion.div
                        className="space-y-6 text-left"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.05 }}
                    >
                        <h1 className="display leading-tight text-dark-gray">
                            {t.hero.title}
                        </h1>
                        <p className="text-large sm:text-xl max-w-2xl text-text-gray">
                            {t.hero.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-sm sm:gap-md">
                            <Link href="#contact" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto shadow-[0_15px_35px_rgba(14,165,233,0.35)] bg-gradient-to-r from-cerulean to-emerald text-white border border-cerulean/20"
                                >
                                    {t.hero.primaryCta}
                                </Button>
                            </Link>
                            <Link href="#services" className="w-full sm:w-auto">
                                <Button
                                    variant="glass"
                                    size="lg"
                                    className="w-full sm:w-auto border-dark-gray/10 text-dark-gray hover:bg-white/60"
                                >
                                    {t.hero.secondaryCta}
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
