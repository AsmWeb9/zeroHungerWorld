'use client';

import React from 'react';
import Section from './Section';
import CTAButton from './CTAButton';
import { motion } from 'framer-motion';
import { PlayCircle, CheckCircle } from 'lucide-react';

export default function AcademyTeaser() {
    return (
        <Section id="academy" className="bg-[var(--color-primary)] text-white overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[#15617a] to-transparent rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--color-accent)] text-[var(--color-primary)] text-xs font-black uppercase tracking-wider">
                        Coming Soon
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                        Zero Hunger <span className="text-[var(--color-accent)]">Academy</span>
                    </h2>
                    <p className="text-white/80 text-lg leading-relaxed font-light">
                        A fully-featured Learning Management System (LMS) designed to train the next generation of agri-tech leaders and logistics coordinators.
                    </p>

                    <ul className="space-y-4">
                        {["Sustainable Farming Modules", "Crisis Management Certification", "Blockchain Logistics 101"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-white/90 font-medium">
                                <CheckCircle className="w-5 h-5 text-[var(--color-accent)]" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="pt-6">
                        <CTAButton href="#academy-waitlist">
                            Join the Waitlist
                        </CTAButton>
                    </div>
                </div>

                {/* Product Mockup */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="relative rounded-xl bg-[#0f172a] p-2 shadow-2xl border border-white/10 transform rotate-2 hover:rotate-0 transition-transform duration-700">
                        {/* Fake Browser Header */}
                        <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        {/* Content Preview */}
                        <div className="aspect-video bg-[#1e293b] relative overflow-hidden flex flex-col items-center justify-center p-8 text-center group">
                            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform cursor-pointer">
                                <PlayCircle className="w-10 h-10 text-[var(--color-accent)]" />
                            </div>
                            <h4 className="font-bold text-lg">Course 1: Hydroponics Basics</h4>
                            <div className="flex gap-2 justify-center mt-4">
                                <div className="h-1 w-32 bg-gray-700 rounded-full overflow-hidden">
                                    <div className="h-full w-2/3 bg-[var(--color-accent)]"></div>
                                </div>
                                <div className="text-xs text-gray-400">65%</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
