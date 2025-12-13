"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/components/providers/LanguageProvider';

export function Portfolio() {
    const { t } = useLanguage();

    return (
        <section id="portfolio" className="section bg-[hsl(var(--surface))]">
            <div className="container">
                <div className="text-center mb-2xl">
                    <h2>{t.portfolio.heading}</h2>
                    <p className="text-large max-w-[600px] mx-auto">
                        {t.portfolio.description}
                    </p>
                </div>

                <div className="max-w-[800px] mx-auto space-y-xl">
                    {t.portfolio.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="overflow-hidden p-0">
                                <div className={`w-full h-[250px] bg-gradient-to-br ${project.gradient} flex items-center justify-center text-primary-contrast text-h3 font-bold rounded-t-xl`}>
                                    Project {index + 1}
                                </div>
                                <div className="p-lg">
                                    <Badge variant={project.badgeVariant} className="mb-md">
                                        {project.category}
                                    </Badge>
                                    <h4 className="mb-sm">{project.title}</h4>
                                    <p className="mb-md">{project.description}</p>
                                    <p className="text-small text-[hsl(var(--primary))] font-semibold mb-md">
                                        {project.result}
                                    </p>
                                    <Link
                                        href="#contact"
                                        className="no-underline font-semibold text-[hsl(var(--primary))] hover:text-[hsl(var(--primary-hover))]"
                                    >
                                        {t.portfolio.viewCaseStudy}
                                    </Link>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
