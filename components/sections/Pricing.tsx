"use client";

import React from 'react';
import Link from 'next/link';
import { Briefcase, Palette, Cpu, Megaphone } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/LanguageProvider';

export function Pricing() {
    const { t } = useLanguage();
    const cardIcons = [Briefcase, Palette, Cpu, Megaphone];

    return (
        <section id="pricing" className="section">
            <div className="container">
                <div className="text-center mb-2xl">
                    <h2>{t.pricing.heading}</h2>
                    <p className="text-large max-w-[600px] mx-auto">
                        {t.pricing.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-lg lg:gap-xl max-w-5xl mx-auto">
                    {t.pricing.cards.map((card, idx) => (
                        <Card key={idx} className="h-full rounded-2xl p-xl glass frosted-card shadow-[0_16px_48px_rgba(0,0,0,0.08)] border border-white/30">
                            <div className="flex items-center gap-2 mb-sm text-[hsl(var(--text))]">
                                {React.createElement(cardIcons[idx] ?? Briefcase, { className: "h-6 w-6 text-primary" })}
                                <h4 className="m-0 text-[hsl(var(--text))]">{card.title}</h4>
                            </div>
                            <p className="text-[hsl(var(--text-muted))] mb-md">{card.description}</p>
                            <p className="text-small font-semibold uppercase tracking-wide text-[hsl(var(--text))] mb-sm">
                                {t.pricing.servicesLabel}
                            </p>
                            <ul className="list-none m-0 space-y-sm text-[hsl(var(--text))]">
                                {card.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-sm">
                                        <span className="text-primary font-bold text-h5 leading-none">✓</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-2xl">
                    <h3 className="mb-md text-[hsl(var(--text))]">{t.pricing.ctaHeading}</h3>
                    <p className="text-large mb-xl text-[hsl(var(--text-muted))]">
                        {t.pricing.ctaDescription}
                    </p>
                    <Link href="#contact">
                        <Button size="lg">{t.pricing.ctaButton}</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
