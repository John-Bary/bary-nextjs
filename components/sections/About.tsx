"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const stats = [
    { number: "50+", label: "Projects Completed", description: "Across multiple industries", color: "cerulean" },
    { number: "98%", label: "Client Satisfaction", description: "Based on post-project surveys", color: "orange" },
    { number: "5+", label: "Years of Excellence", description: "Consistent quality delivery", color: "emerald" },
    { number: "10+", label: "Expert Team", description: "Specialists in their fields", color: "berry" }
];

export function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl items-center mb-2xl">
                    <div className="w-full h-[400px] lg:h-[400px] rounded-xl flex items-center justify-center bg-gradient-to-br from-cerulean/10 to-orange/10">
                        <Image
                            src="/logo.png"
                            alt="bary.lt"
                            width={400}
                            height={200}
                            className="max-w-[80%] h-auto"
                        />
                    </div>

                    <div>
                        <h2 className="mb-lg">About BARY</h2>
                        <p className="text-large mb-md">
                            We're a strategic consulting and creative agency based in Vilnius, Lithuania. Since 2019, we've
                            helped businesses across Europe transform their operations, strengthen their brands, and build
                            digital products that scale.
                        </p>
                        <p className="mb-md">
                            Our approach is straightforward: understand the problem, develop a clear strategy, and execute
                            with precision. We don't believe in unnecessary complexity or drawn-out timelines. We believe in
                            delivering measurable results.
                        </p>
                        <p className="mb-xl">
                            Our team brings together expertise in business strategy, design, and technology. This
                            combination allows us to tackle challenges holistically—from initial concept through final
                            implementation.
                        </p>
                        <Link href="#contact">
                            <Button>Work With Us</Button>
                        </Link>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="text-center">
                                <div className={`text-h1 font-bold mb-xs ${stat.color === 'cerulean' ? 'text-cerulean' :
                                        stat.color === 'orange' ? 'text-orange' :
                                            stat.color === 'emerald' ? 'text-emerald' :
                                                'text-berry'
                                    }`}>
                                    {stat.number}
                                </div>
                                <h5 className="mb-xs">{stat.label}</h5>
                                <p className="text-small m-0 text-text-gray">{stat.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
