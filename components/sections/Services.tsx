"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BarChart3, Palette, Cpu } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage, type Translations } from '@/components/providers/LanguageProvider';

type ServiceKey = keyof Translations["services"]["items"];

const services: { key: ServiceKey; icon: React.ReactNode }[] = [
    {
        key: "consulting",
        icon: <BarChart3 className="h-9 w-9" strokeWidth={2.2} />,
    },
    {
        key: "creative",
        icon: <Palette className="h-9 w-9" strokeWidth={2.2} />,
    },
    {
        key: "digital",
        icon: <Cpu className="h-9 w-9" strokeWidth={2.2} />,
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export function Services() {
    const { t } = useLanguage();

    return (
        <section id="services" className="section">
            <div className="container">
                <div className="text-center mb-2xl">
                    <h2>{t.services.heading}</h2>
                    <p className="text-large max-w-[600px] mx-auto">
                        {t.services.description}
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg items-stretch"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service, index) => (
                        <motion.div key={index} variants={itemVariants} className="h-full">
                            <Card className="text-center h-full flex flex-col">
                                <div
                                    className="w-16 h-16 mx-auto mb-md rounded-full flex items-center justify-center transition-all duration-base bg-primary/10 text-primary"
                                    style={{
                                        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)'
                                    }}
                                >
                                    {service.icon}
                                </div>
                                <h4 className="mb-sm">{t.services.items[service.key].title}</h4>
                                <p className="mb-md text-[hsl(var(--text-muted))] flex-grow">{t.services.items[service.key].description}</p>
                                <Link
                                    href="#contact"
                                    className="no-underline font-semibold text-[hsl(var(--primary))] hover:text-[hsl(var(--primary-hover))]"
                                >
                                    {t.services.learnMore}
                                </Link>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
