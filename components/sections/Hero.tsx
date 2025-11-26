"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function Hero() {
    return (
        <section id="home" className="section-hero relative overflow-hidden">
            {/* Floating glass shapes */}
            <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] rounded-full glass animate-float" />
            <div className="absolute bottom-[20%] left-[5%] w-[200px] h-[200px] rounded-full glass animate-float-reverse" />

            {/* Radial gradient background */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-float opacity-10">
                <div className="w-full h-full bg-[radial-gradient(circle,rgba(34,116,165,0.3)_0%,transparent_70%)]" />
            </div>

            <div className="container relative z-10">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="display gradient-text mb-lg">
                        We Turn Strategy Into Results
                    </h1>

                    <p className="text-large mt-lg mb-xl max-w-[700px] mx-auto">
                        Business consulting and creative services that drive measurable growth. We help companies scale
                        through strategic planning, brand development, and digital innovation.
                    </p>

                    <div className="flex items-center justify-center gap-md mb-2xl">
                        <Link href="#contact">
                            <Button size="lg">Start Your Project</Button>
                        </Link>
                        <Link href="#services">
                            <Button variant="glass" size="lg">Our Services</Button>
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <motion.div
                        className="flex gap-xl justify-center flex-wrap"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <div className="text-center">
                            <div className="text-h2 font-bold gradient-text mb-xs">50+</div>
                            <p className="text-small m-0 text-text-gray">Projects</p>
                        </div>
                        <div className="text-center">
                            <div className="text-h2 font-bold gradient-text mb-xs">98%</div>
                            <p className="text-small m-0 text-text-gray">Satisfaction</p>
                        </div>
                        <div className="text-center">
                            <div className="text-h2 font-bold gradient-text mb-xs">5+</div>
                            <p className="text-small m-0 text-text-gray">Years</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
