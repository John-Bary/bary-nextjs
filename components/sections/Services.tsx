"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BarChart3, Palette, Cpu } from 'lucide-react';
import { Card } from '@/components/ui/card';

const services = [
    {
        title: "Business Consulting",
        description: "Strategic planning and market analysis that identifies opportunities and eliminates inefficiencies. We help you make data-driven decisions, optimize operations, and build sustainable competitive advantages.",
        icon: <BarChart3 className="h-9 w-9" strokeWidth={2.2} />,
        color: "cerulean",
        link: "#contact"
    },
    {
        title: "Creative Services",
        description: "Brand identity and visual design that captures attention and builds recognition. From logo design to complete brand systems, we create cohesive visual languages that resonate with your target audience.",
        icon: <Palette className="h-9 w-9" strokeWidth={2.2} />,
        color: "orange",
        link: "#contact"
    },
    {
        title: "Digital Solutions",
        description: "Custom web applications and digital products built with modern technologies. We develop scalable platforms that enhance user experience, streamline operations, and drive business growth.",
        icon: <Cpu className="h-9 w-9" strokeWidth={2.2} />,
        color: "emerald",
        link: "#contact"
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
    return (
        <section id="services" className="section">
            <div className="container">
                <div className="text-center mb-2xl">
                    <h2>What We Do</h2>
                    <p className="text-large max-w-[600px] mx-auto">
                        We combine strategic thinking with creative execution to solve complex business challenges.
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
                                    className={`w-16 h-16 mx-auto mb-md rounded-full flex items-center justify-center transition-all duration-base ${service.color === 'cerulean' ? 'bg-cerulean/10 text-cerulean' :
                                            service.color === 'orange' ? 'bg-orange/10 text-orange' :
                                                'bg-emerald/10 text-emerald'
                                        }`}
                                    style={{
                                        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)'
                                    }}
                                >
                                    {service.icon}
                                </div>
                                <h4 className="mb-sm">{service.title}</h4>
                                <p className="mb-md text-text-gray flex-grow">{service.description}</p>
                                <Link
                                    href={service.link}
                                    className={`no-underline font-semibold ${service.color === 'cerulean' ? 'text-cerulean' :
                                            service.color === 'orange' ? 'text-orange' :
                                                'text-emerald'
                                        }`}
                                >
                                    Learn more →
                                </Link>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
