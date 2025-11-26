"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const steps = [
    {
        number: 1,
        title: "Discovery",
        description: "We start by understanding your business, market position, and objectives. Through workshops and research, we identify challenges and opportunities.",
        color: "bg-cerulean"
    },
    {
        number: 2,
        title: "Strategy",
        description: "We develop a comprehensive plan aligned with your goals. This includes roadmaps, timelines, resource allocation, and success metrics.",
        color: "bg-orange"
    },
    {
        number: 3,
        title: "Design",
        description: "We create solutions that balance aesthetics with functionality. Every design decision is backed by user research and business objectives.",
        color: "bg-amber text-dark-gray"
    },
    {
        number: 4,
        title: "Development",
        description: "We build using modern technologies and best practices. Our development process emphasizes quality, scalability, and maintainability.",
        color: "bg-emerald"
    },
    {
        number: 5,
        title: "Launch & Support",
        description: "We manage deployment and provide ongoing support. Post-launch, we monitor performance and make data-driven optimizations.",
        color: "bg-berry"
    }
];

export function Process() {
    return (
        <section id="process" className="section bg-light-gray">
            <div className="container">
                <div className="text-center mb-2xl">
                    <h2>Our Process</h2>
                    <p className="text-large max-w-[600px] mx-auto">
                        A proven methodology that ensures successful project delivery from discovery to launch.
                    </p>
                </div>

                <div className="max-w-[900px] mx-auto mb-2xl space-y-lg">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="text-center">
                                <div className={`w-15 h-15 mx-auto mb-md rounded-full ${step.color} text-white flex items-center justify-center text-h3 font-bold shadow-[0_4px_16px_rgba(34,116,165,0.3)]`}>
                                    {step.number}
                                </div>
                                <h4 className="mb-md">{step.title}</h4>
                                <p className="m-0">{step.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="#contact">
                        <Button size="lg">Ready to Start?</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
