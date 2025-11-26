"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const services = [
    {
        title: "Business Consulting",
        description: "Strategic planning and market analysis that identifies opportunities and eliminates inefficiencies. We help you make data-driven decisions, optimize operations, and build sustainable competitive advantages.",
        icon: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18 17l-5-5-3 3-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="18" cy="17" r="1.5" fill="currentColor" />
                <circle cx="13" cy="12" r="1.5" fill="currentColor" />
                <circle cx="10" cy="15" r="1.5" fill="currentColor" />
                <circle cx="6" cy="11" r="1.5" fill="currentColor" />
            </svg>
        ),
        color: "cerulean",
        link: "#contact"
    },
    {
        title: "Creative Services",
        description: "Brand identity and visual design that captures attention and builds recognition. From logo design to complete brand systems, we create cohesive visual languages that resonate with your target audience.",
        icon: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="7" cy="7" r="2" fill="currentColor" opacity="0.3" />
                <circle cx="17" cy="7" r="2" fill="currentColor" opacity="0.5" />
                <circle cx="7" cy="17" r="2" fill="currentColor" opacity="0.7" />
                <circle cx="17" cy="17" r="2" fill="currentColor" opacity="0.4" />
            </svg>
        ),
        color: "orange",
        link: "#contact"
    },
    {
        title: "Digital Solutions",
        description: "Custom web applications and digital products built with modern technologies. We develop scalable platforms that enhance user experience, streamline operations, and drive business growth.",
        icon: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 7h2M7 17h10M17 7h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
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
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="text-center">
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
                                <p className="mb-md text-text-gray">{service.description}</p>
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
