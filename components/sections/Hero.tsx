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
        <section id="home" className="relative min-h-[70vh] sm:min-h-[80vh] overflow-hidden bg-[#0b1f33]">
            <div className="absolute inset-0">
                <Image
                    src="/pexels-leish-5255319.jpg"
                    alt="Consulting team at work"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/65" />
            </div>

            <div className="container relative z-10 flex items-center min-h-[70vh] sm:min-h-[80vh]">
                <motion.div
                    className="max-w-3xl w-full md:w-auto bg-white/12 backdrop-blur-2xl border border-white/20 shadow-[0_16px_48px_rgba(0,0,0,0.35)] rounded-2xl p-6 sm:p-8 space-y-5 text-left text-white"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h1 className="display leading-tight text-white drop-shadow-[0_12px_28px_rgba(0,0,0,0.45)]">
                        {t.hero.title}
                    </h1>

                    <p className="text-large sm:text-xl text-white/85 drop-shadow">
                        {t.hero.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-sm sm:gap-md pt-2">
                        <Link href="#contact" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto shadow-[0_15px_40px_rgba(6,182,212,0.35)] bg-gradient-to-r from-cerulean to-emerald text-white border border-white/10"
                            >
                                {t.hero.primaryCta}
                            </Button>
                        </Link>
                        <Link href="#services" className="w-full sm:w-auto">
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full sm:w-auto border-white/60 text-white hover:bg-white/10"
                            >
                                {t.hero.secondaryCta}
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
