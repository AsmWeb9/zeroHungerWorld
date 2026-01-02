import React from 'react';
import Navbar from '@/components/Navbar';

export default function ImpactPage() {
    return (
        <div className="min-h-screen bg-muted font-sans">
            <Navbar />

            <header className="py-20 bg-primary text-white text-center">
                <div className="container mx-auto px-6">
                    <div className="inline-block px-3 py-1 mb-4 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-wider">
                        Live Data Feed
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight">Global Impact</h1>
                    <p className="text-white/60">Real-time metrics from our decentralized grid.</p>
                </div>
            </header>

            <main className="container mx-auto px-6 -mt-10 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <StatCard label="Meals Routed" value="1,250,342" />
                    <StatCard label="Active Nodes" value="3,400" />
                    <StatCard label="Zones Covered" value="128" />
                    <StatCard label="CO2 Saved" value="450 Tons" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold mb-6 text-primary">Distribution Velocity</h3>
                        <div className="h-64 flex items-end justify-between space-x-4 px-4 border-b border-gray-100 pb-0">
                            <div className="w-full bg-primary/20 hover:bg-primary/30 h-[40%] rounded-t-lg transition-all"></div>
                            <div className="w-full bg-primary/40 hover:bg-primary/50 h-[55%] rounded-t-lg transition-all"></div>
                            <div className="w-full bg-primary/60 hover:bg-primary/70 h-[70%] rounded-t-lg transition-all"></div>
                            <div className="w-full bg-accent hover:bg-accent/80 h-[85%] rounded-t-lg transition-all shadow-[0_0_15px_rgba(242,200,48,0.3)]"></div>
                        </div>
                        <div className="flex justify-between text-xs font-bold text-text/40 mt-4 px-4 uppercase tracking-widest">
                            <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4 (Current)</span>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
                        <h3 className="text-xl font-bold mb-2 text-primary">Volunteer Retention</h3>
                        <p className="text-text/50 text-sm mb-8">AI-matched roles increase engagement.</p>

                        <div className="relative w-48 h-48 rounded-full border-[12px] border-muted flex items-center justify-center">
                            <span className="text-5xl font-extrabold text-primary">88%</span>
                            <div className="absolute top-0 left-0 w-full h-full rounded-full border-[12px] border-primary border-t-transparent border-r-transparent rotate-45"></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

const StatCard = ({ label, value }: { label: string, value: string }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
        <div className="text-3xl font-bold text-primary mb-1">{value}</div>
        <div className="text-xs font-bold uppercase tracking-widest text-text/40">{label}</div>
    </div>
);
