import React from 'react';
import Section from './Section';
import GradientBackground from './GradientBackground';

const features = [
    {
        title: "AI Routing",
        description: "Predictive algorithms that match surplus food to real-time needs.",
        icon: "⚡",
    },
    {
        title: "Skill Academy",
        description: "Gamified learning for sustainable farming and tech skills.",
        icon: "🎓",
    },
    {
        title: "Youth Nodes",
        description: "Decentralized, youth-led distribution hubs in every zone.",
        icon: "🌐",
    }
];

export default function WhatWeDo() {
    return (
        <Section id="actions" className="bg-[var(--color-muted)]">
            <GradientBackground variant="accent" />

            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">What We Do</h2>
                <p className="text-lg text-gray-600">Three pillars of our ecosystem.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-transparent hover:border-[var(--color-accent)]/30"
                    >
                        <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/5 flex items-center justify-center text-3xl mb-6 group-hover:bg-[var(--color-accent)] group-hover:scale-110 transition-all duration-300">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">{feature.title}</h3>
                        <p className="text-gray-500 leading-relaxed font-medium">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
