import React from 'react';
import Navbar from '@/components/Navbar';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-muted font-sans">
            <Navbar />

            {/* Hero Section */}
            <header className="py-20 bg-primary text-white text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                        Our Mission
                    </h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        To eradicate hunger by deploying intelligent logistics and empowering local leadership.
                    </p>
                </div>
            </header>

            <main className="container mx-auto px-6 py-16 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2">
                            <span className="text-accent">01.</span> The Philosophy
                        </h2>
                        <p className="text-text/70 leading-relaxed">
                            Hunger is a logistics problem, not a scarcity problem. By using <strong className="text-primary">behavioral AI</strong>, we predict needs before they become crises and route resources efficiently.
                        </p>
                    </section>

                    <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2">
                            <span className="text-accent">02.</span> Comparison
                        </h2>
                        <p className="text-text/70 leading-relaxed">
                            Unlike traditional NGOs that rely on top-down distribution, we build <strong className="text-primary">decentralized networks</strong> where every member is trained to be a leader in their own zone.
                        </p>
                    </section>

                </div>

                <section className="mt-16 text-center">
                    <h2 className="text-2xl font-bold mb-8 text-primary">Core Values</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['Transparency', 'Intelligence', 'Speed', 'Decentralization'].map((val) => (
                            <span key={val} className="px-6 py-3 bg-white border border-primary/10 rounded-full text-primary font-bold shadow-sm">
                                {val}
                            </span>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
