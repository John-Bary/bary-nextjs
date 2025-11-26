"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
    {
        title: "Tech Startup Growth",
        category: "Consulting",
        description: "Developed go-to-market strategy and operational framework for a B2B SaaS startup. Implemented customer acquisition systems and optimized pricing model.",
        result: "📈 500% revenue growth in 12 months",
        gradient: "from-cerulean to-emerald",
        badgeVariant: "cerulean" as const
    },
    {
        title: "Brand Transformation",
        category: "Creative",
        description: "Complete brand redesign for an established retail company entering digital markets. Created new visual identity, brand guidelines, and marketing collateral.",
        result: "📊 40% increase in brand recognition",
        gradient: "from-orange to-amber",
        badgeVariant: "orange" as const
    },
    {
        title: "E-commerce Platform",
        category: "Digital",
        description: "Built custom e-commerce solution with inventory management, payment processing, and analytics dashboard. Optimized for conversion and mobile experience.",
        result: "🚀 10,000+ active users",
        gradient: "from-emerald to-cerulean",
        badgeVariant: "emerald" as const
    },
    {
        title: "Digital Marketing Campaign",
        category: "Marketing",
        description: "Designed and executed multi-channel campaign including content strategy, paid advertising, and conversion optimization. Focused on qualified lead generation.",
        result: "💰 300% ROI in 6 months",
        gradient: "from-berry to-orange",
        badgeVariant: "berry" as const
    }
];

export function Portfolio() {
    return (
        <section id="portfolio" className="section bg-light-gray">
            <div className="container">
                <div className="text-center mb-2xl">
                    <h2>Recent Work</h2>
                    <p className="text-large max-w-[600px] mx-auto">
                        Case studies from our recent projects across consulting, creative, and digital services.
                    </p>
                </div>

                <div className="max-w-[800px] mx-auto space-y-xl">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="overflow-hidden p-0">
                                <div className={`w-full h-[250px] bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white text-h3 font-bold rounded-t-xl`}>
                                    Project {index + 1}
                                </div>
                                <div className="p-lg">
                                    <Badge variant={project.badgeVariant} className="mb-md">
                                        {project.category}
                                    </Badge>
                                    <h4 className="mb-sm">{project.title}</h4>
                                    <p className="mb-md">{project.description}</p>
                                    <p className="text-small text-emerald font-semibold mb-md">
                                        {project.result}
                                    </p>
                                    <Link
                                        href="#contact"
                                        className={`no-underline font-semibold ${project.badgeVariant === 'cerulean' ? 'text-cerulean' :
                                                project.badgeVariant === 'orange' ? 'text-orange' :
                                                    project.badgeVariant === 'emerald' ? 'text-emerald' :
                                                        'text-berry'
                                            }`}
                                    >
                                        View case study →
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
