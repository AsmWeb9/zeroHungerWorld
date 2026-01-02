'use client';

import React, { useState, useEffect } from 'react';
import Section from './Section';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Users, Utensils, Home, Heart, Hammer, ShowerHead, HandCoins } from 'lucide-react';

// --- Data Structure ---
// Static Mock Data for 2023, 2024, 2025
// Defined type for impact data to avoid any implicity any errors
type MonthData = { name: string; meals: number; housing: number; bath: number; projects: number; medical: number; theme: string };
type YearData = { totalMeals: number; beneficiaries: number; months: MonthData[] };
type ImpactData = { [key: string]: YearData };

const impactData: ImpactData = {
    2023: {
        totalMeals: 15200,
        beneficiaries: 1200,
        months: [
            { name: "Nov", meals: 2400, housing: 8, bath: 15, projects: 2, medical: 10, theme: "Winter Warmth" },
            { name: "Dec", meals: 3100, housing: 12, bath: 20, projects: 4, medical: 15, theme: "Holiday Care" },
        ]
    },
    2024: {
        totalMeals: 48500,
        beneficiaries: 3400,
        months: [
            { name: "Jan", meals: 3500, housing: 10, bath: 25, projects: 3, medical: 20, theme: "New Beginnings" },
            { name: "Feb", meals: 3800, housing: 8, bath: 28, projects: 2, medical: 18, theme: "" },
            { name: "Mar", meals: 4200, housing: 15, bath: 30, projects: 5, medical: 25, theme: "Ramadan Spirit" },
            { name: "Apr", meals: 5100, housing: 12, bath: 22, projects: 4, medical: 30, theme: "Eid Joy" },
            { name: "May", meals: 4600, housing: 9, bath: 26, projects: 2, medical: 15, theme: "" },
            { name: "Jun", meals: 4300, housing: 11, bath: 24, projects: 3, medical: 12, theme: "Summer Aid" },
        ]
    },
    2025: {
        totalMeals: 12400,
        beneficiaries: 950,
        months: [
            { name: "Jan", meals: 5500, housing: 14, bath: 35, projects: 6, medical: 40, theme: "Strong Start" },
            { name: "Feb", meals: 6900, housing: 18, bath: 40, projects: 5, medical: 35, theme: "Record High" },
        ]
    }
};

// --- Helper Components ---
const KpiCard = ({ icon: Icon, number, label, color }: { icon: any, number: string, label: string, color: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all flex items-center gap-4"
    >
        <div className={`p-3 rounded-xl bg-gray-50 ${color}`}>
            <Icon className="w-6 h-6" />
        </div>
        <div>
            <div className="text-2xl font-black text-gray-800">{number}</div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">{label}</div>
        </div>
    </motion.div>
);

const MonthlyCard = ({ data }: { data: MonthData }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-[var(--color-accent)]/30 transition-colors"
    >
        <div className="flex justify-between items-start mb-4">
            <div>
                <h4 className="font-bold text-lg text-gray-800">{data.name}</h4>
                {data.theme && <span className="text-xs font-medium text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded-full">{data.theme}</span>}
            </div>
            {/* Year is implied by context, but we can visualize it if needed */}
        </div>
        <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
                <Utensils className="w-4 h-4 text-[var(--color-primary)]" />
                <span className="font-bold">{data.meals.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
                <ShowerHead className="w-4 h-4 text-blue-400" />
                <span className="font-bold">{data.bath}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
                <Home className="w-4 h-4 text-orange-400" />
                <span className="font-bold">{data.housing}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
                <Hammer className="w-4 h-4 text-purple-400" />
                <span className="font-bold">{data.projects}</span>
            </div>
        </div>
    </motion.div>
);

export default function Impact() {
    const [year, setYear] = useState('2024');
    const [currentData, setCurrentData] = useState<YearData>(impactData[2024]);

    useEffect(() => {
        setCurrentData(impactData[year] || impactData[2024]);
    }, [year]);

    return (
        <Section id="impact" className="bg-gray-50/50">
            <div className="section-container">

                {/* 1. Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black text-[var(--color-primary)] mb-4">Our Activities & Impact</h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Every action counts. Real-time data measuring our contribution to a better world.
                    </p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mx-auto rounded-full mt-6"></div>
                </div>

                {/* 2. Global KPIs */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
                    <KpiCard icon={Utensils} number="76k+" label="Meals Served" color="text-orange-500" />
                    <KpiCard icon={Users} number="5,500+" label="People Assisted" color="text-blue-500" />
                    <KpiCard icon={ShowerHead} number="850+" label="Hygiene Care" color="text-cyan-500" />
                    <KpiCard icon={Hammer} number="45" label="Projects Funded" color="text-purple-500" />
                </div>

                {/* 3. Dashboard Container */}
                <div className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-xl border border-gray-100">

                    {/* Header + Year Selector */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                                <TrendingUp className="w-6 h-6 text-[var(--color-accent)]" />
                                Annual Overview
                            </h3>
                            <p className="text-gray-400 text-sm mt-1">Tracking performance across key metrics</p>
                        </div>
                        <div className="bg-gray-100 p-1.5 rounded-xl flex gap-1">
                            {['2023', '2024', '2025'].map((y) => (
                                <button
                                    key={y}
                                    onClick={() => setYear(y)}
                                    className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${year === y
                                            ? 'bg-white text-[var(--color-primary)] shadow-sm'
                                            : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    {y}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* 4. Charts & Monthly Breakdown */}
                    <div className="grid lg:grid-cols-3 gap-10">
                        {/* A) Bar Chart (Simple CSS implementation) */}
                        <div className="lg:col-span-2 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                            <div className="flex items-end gap-2 h-48 md:h-64 pb-2 border-b border-gray-200">
                                {currentData.months.map((m, i) => (
                                    <div key={i} className="flex-1 flex flex-col justify-end items-center group relative">
                                        {/* Tooltip */}
                                        <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs py-1 px-2 rounded mb-2 z-10 whitespace-nowrap">
                                            {m.meals.toLocaleString()} meals
                                        </div>
                                        {/* Bar */}
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={{ height: `${(m.meals / 7000) * 100}%` }}
                                            transition={{ duration: 1, type: "spring" }}
                                            className="w-full max-w-[40px] bg-[var(--color-primary)] rounded-t-lg hover:bg-[var(--color-accent)] transition-colors opacity-80 hover:opacity-100"
                                        ></motion.div>
                                        {/* Label */}
                                        <div className="text-xs text-gray-400 font-bold mt-3">{m.name}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="text-center text-xs text-gray-400 font-bold mt-4 uppercase tracking-widest">Meals Distribution ({year})</div>
                        </div>

                        {/* B) Stats Panel */}
                        <div className="space-y-4">
                            <div className="p-5 rounded-2xl bg-[var(--color-primary)] text-white relative overflow-hidden transform hover:scale-[1.02] transition-transform">
                                <div className="absolute top-0 right-0 p-4 opacity-10"><TrendingUp size={60} /></div>
                                <div className="text-sm font-medium text-white/60 mb-1">Total Impact ({year})</div>
                                <div className="text-4xl font-black mb-1">{currentData.totalMeals.toLocaleString()}</div>
                                <div className="text-sm">Meals Distributed</div>
                            </div>
                            <div className="p-5 rounded-2xl bg-[var(--color-accent)] text-[var(--color-primary)] relative overflow-hidden transform hover:scale-[1.02] transition-transform">
                                <div className="absolute top-0 right-0 p-4 opacity-10"><Users size={60} /></div>
                                <div className="text-sm font-bold opacity-60 mb-1">Direct Beneficiaries</div>
                                <div className="text-4xl font-black mb-1">{currentData.beneficiaries.toLocaleString()}</div>
                                <div className="text-sm font-bold">Individuals Helped</div>
                            </div>
                        </div>
                    </div>

                    {/* 5. Monthly Cards Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                        <AnimatePresence mode='wait'>
                            {currentData.months.map((month, i) => (
                                <MonthlyCard key={`${year}-${month.name}`} data={month} />
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* 6. Insight Area */}
                    <div className="mt-10 p-6 rounded-xl bg-blue-50 border border-blue-100 flex gap-4 items-start">
                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600 shrink-0">
                            <TrendingUp size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-blue-900 text-sm mb-1">Impact Analysis</h4>
                            <p className="text-sm text-blue-700/80 leading-relaxed">
                                {year === '2023' && "Launch phase focused on establishing trust and initial distribution networks. Operations scaled significantly during winter months."}
                                {year === '2024' && "Steady growth period with diversification into housing and medical support. Ramadan saw peak distribution activity."}
                                {year === '2025' && "Record-breaking start to the year. Focus shifted towards sustainable long-term projects while maintaining emergency food relief."}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </Section>
    );
}
