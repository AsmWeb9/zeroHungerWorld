'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Section from './Section';
import { motion, AnimatePresence } from 'framer-motion';
import { impactData, YearData, MonthData } from '@/data/impactData';
import { TrendingUp, Users, Utensils, Home, ShowerHead, Hammer, HeartPulse, PieChart, BarChart3, LayoutDashboard, Target, Calendar, Sparkles } from 'lucide-react';

// --- Animated Counter ---
const AnimatedCounter = ({ value, label, imageSrc, color }: { value: number, label: string, imageSrc: string, color: string }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className={`p-2 rounded-xl ${color} bg-opacity-10 w-16 h-16 flex items-center justify-center shrink-0`}>
                <img src={imageSrc} alt={label} className="w-12 h-12 object-contain" />
            </div>
            <div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-black text-gray-800"
                >
                    {value.toLocaleString()}
                </motion.div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">{label}</div>
            </div>
        </div>
    );
};

// --- Monthly Card ---
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
                {data.theme && (
                    <span className="text-[10px] uppercase font-bold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded-full tracking-wide">
                        {data.theme}
                    </span>
                )}
            </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
                <Utensils className="w-4 h-4 text-orange-500" />
                <span className="font-bold">{data.activities.find(a => a.type === 'meal')?.value.toLocaleString() || 0}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
                <ShowerHead className="w-4 h-4 text-cyan-500" />
                <span className="font-bold">{data.activities.find(a => a.type === 'bath')?.value || 0}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
                <Home className="w-4 h-4 text-blue-500" />
                <span className="font-bold">{data.activities.find(a => a.type === 'housing')?.value || 0}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
                <HeartPulse className="w-4 h-4 text-red-500" />
                <span className="font-bold">{data.activities.find(a => a.type === 'medical')?.value || 0}</span>
            </div>
        </div>
    </motion.div>
);

export default function ImpactAnalytics() {
    const [selectedYear, setSelectedYear] = useState<number>(2024);
    const [currentData, setCurrentData] = useState<YearData>(impactData.find(y => y.year === 2024)!);

    useEffect(() => {
        const found = impactData.find(y => y.year === selectedYear);
        if (found) setCurrentData(found);
    }, [selectedYear]);

    // --- Derived Statistics (All Time) ---
    const stats = useMemo(() => {
        let totalMeals = 0;
        let totalHousing = 0;
        let totalBath = 0;
        let totalMedical = 0;

        impactData.forEach(y => {
            y.months.forEach(m => {
                m.activities.forEach(a => {
                    if (a.type === 'meal') totalMeals += a.value;
                    if (a.type === 'housing') totalHousing += a.value;
                    if (a.type === 'bath') totalBath += a.value;
                    if (a.type === 'medical') totalMedical += a.value;
                });
            });
        });

        return { totalMeals, totalHousing, totalBath, totalMedical };
    }, []);

    // --- Chart Data Preparation ---
    const chartData = useMemo(() => {
        return currentData.months.map(m => {
            const meals = m.activities.find(a => a.type === 'meal')?.value || 0;
            return { name: m.name.substring(0, 3), value: meals, full: m.name };
        });
    }, [currentData]);

    const maxChartValue = Math.max(...chartData.map(d => d.value), 5000);

    return (
        <Section id="impact-dashboard" className="bg-gray-50/50 py-24">
            <div className="section-container">

                {/* 1. Impact Summary Header */}
                <div className="text-center mb-16 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center"
                    >
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="p-3 bg-[var(--color-primary)]/10 rounded-2xl text-[var(--color-primary)]">
                                <LayoutDashboard className="w-10 h-10" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-[var(--color-primary)] leading-tight">
                                Impact Dashboard
                            </h2>
                        </div>
                        <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
                            A live view of our field results and community commitment.
                        </p>
                    </motion.div>
                </div>

                {/* 2. Global Counters (Aggregated All Time) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    <AnimatedCounter imageSrc="/impact-icons/meals.png" value={stats.totalMeals} label="Meals Served" color="bg-orange-500" />
                    <AnimatedCounter imageSrc="/impact-icons/housing.png" value={stats.totalHousing} label="Housing Support" color="bg-blue-500" />
                    <AnimatedCounter imageSrc="/impact-icons/hygiene.png" value={stats.totalBath} label="Hygiene Acts" color="bg-cyan-500" />
                    <AnimatedCounter imageSrc="/impact-icons/medical.png" value={stats.totalMedical} label="Medical Aid" color="bg-red-500" />
                </div>

                {/* 3. Analytics Area */}
                <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-8 md:p-12">

                    {/* Controls */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-[var(--color-primary)]/10 rounded-lg text-[var(--color-primary)]">
                                <BarChart3 className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800">Monthly Distribution</h3>
                                <p className="text-sm text-gray-400">Meal distribution analysis</p>
                            </div>
                        </div>

                        {/* Year Scale */}
                        <div className="flex items-center gap-3 bg-gray-100 p-1.5 rounded-xl">
                            <div className="pl-3 pr-1 text-gray-400">
                                <Calendar className="w-4 h-4" />
                            </div>
                            {impactData.map(y => (
                                <button
                                    key={y.year}
                                    onClick={() => setSelectedYear(y.year)}
                                    className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${selectedYear === y.year
                                        ? 'bg-white text-[var(--color-primary)] shadow-sm'
                                        : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    {y.year}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Chart Visualization Area */}
                    <div className="grid lg:grid-cols-3 gap-10">
                        {/* A) Bar Chart */}
                        <div className="lg:col-span-2 bg-gray-100 rounded-3xl p-6 md:p-8 border border-gray-100 relative overflow-hidden">
                            {/* Grid Lines */}
                            <div className="absolute inset-x-6 top-6 bottom-16 flex flex-col justify-between pointer-events-none opacity-[0.05]">
                                {[0, 1, 2, 3, 4].map(line => (
                                    <div key={line} className="w-full h-px bg-black"></div>
                                ))}
                            </div>

                            <div className="h-[300px] w-full flex items-end justify-between gap-2 relative z-10 cursor-crosshair">
                                {chartData.map((data, i) => (
                                    <div key={i} className="flex-1 flex flex-col justify-end items-center group relative h-full">

                                        {/* Hover Tooltip */}
                                        <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs py-2 px-3 rounded-lg pointer-events-none mb-2 z-20 whitespace-nowrap shadow-lg flex items-center gap-2">
                                            <div className="p-1 bg-white/10 rounded">
                                                <Utensils className="w-3 h-3 text-orange-300" />
                                            </div>
                                            <div>
                                                <div className="font-bold">{data.full} {selectedYear}</div>
                                                <div className="text-orange-300">{data.value.toLocaleString()} meals</div>
                                            </div>
                                        </div>

                                        {/* Bar */}
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={{ height: `${(data.value / maxChartValue) * 100}%` }}
                                            transition={{ duration: 0.8, type: "spring", bounce: 0, delay: i * 0.05 }}
                                            className="w-full max-w-[50px] bg-gradient-to-t from-[var(--color-primary)] to-[#1a5f75] rounded-t-lg opacity-80 group-hover:opacity-100 transition-all group-hover:to-[var(--color-accent)] relative"
                                        >
                                            <div className="w-full h-1 bg-white/20 absolute top-0 rounded-t-lg"></div>
                                        </motion.div>

                                        {/* X-Axis Label */}
                                        <span className={`text-[10px] md:text-xs font-bold mt-4 uppercase tracking-wider ${data.value > 0 ? 'text-gray-500' : 'text-gray-300'}`}>
                                            {data.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* B) Stats Panel (SIDE SUMMARY) */}
                        <div className="space-y-4">
                            <div className="p-5 rounded-2xl bg-[var(--color-primary)] text-white relative overflow-hidden transform hover:scale-[1.02] transition-transform">
                                <div className="absolute top-0 right-0 p-4 opacity-10"><TrendingUp size={60} /></div>
                                <div className="flex items-center gap-2 text-white/60 mb-1">
                                    <Utensils size={14} className="text-orange-300" />
                                    <span className="text-xs font-bold uppercase tracking-wider">Total Impact ({selectedYear})</span>
                                </div>
                                <div className="text-4xl font-black mb-1">{currentData.months.reduce((acc, m) => acc + (m.activities.find(a => a.type === 'meal')?.value || 0), 0).toLocaleString()}</div>
                                <div className="text-sm font-medium opacity-80">Meals Distributed</div>
                            </div>

                            <div className="p-5 rounded-2xl bg-[var(--color-accent)] text-[var(--color-primary)] relative overflow-hidden transform hover:scale-[1.02] transition-transform">
                                <div className="absolute top-0 right-0 p-4 opacity-10"><Users size={60} /></div>
                                <div className="flex items-center gap-2 text-[var(--color-primary)]/60 mb-1">
                                    <Users size={14} className="text-[var(--color-primary)]" />
                                    <span className="text-xs font-bold uppercase tracking-wider">Estimated Reach</span>
                                </div>
                                <div className="text-4xl font-black mb-1">
                                    {Math.floor(currentData.months.reduce((acc, m) => acc + (m.activities.find(a => a.type === 'meal')?.value || 0), 0) / 15).toLocaleString()}+
                                </div>
                                <div className="text-sm font-bold opacity-80">Individuals Helped</div>
                            </div>

                            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 relative overflow-hidden transform hover:scale-[1.02] transition-transform">
                                <div className="absolute top-0 right-0 p-4 opacity-10"><Sparkles size={60} /></div>
                                <div className="flex items-center gap-2 text-gray-400 mb-1">
                                    <HeartPulse size={14} className="text-red-400" />
                                    <span className="text-xs font-bold uppercase tracking-wider">Care Score</span>
                                </div>
                                <div className="text-4xl font-black mb-1 text-gray-800">98%</div>
                                <div className="text-sm font-bold text-gray-500">Positive Feedback</div>
                            </div>
                        </div>
                    </div>

                    {/* Legend */}
                    <div className="mt-12 flex flex-wrap justify-center gap-6 border-t border-gray-100 pt-8">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <div className="p-1.5 bg-[var(--color-primary)]/10 rounded-lg">
                                <Utensils className="w-4 h-4 text-[var(--color-primary)]" />
                            </div>
                            <span className="font-bold">Meals Distributed</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <div className="p-1.5 bg-gray-100 rounded-lg">
                                <Target className="w-4 h-4 text-gray-400" />
                            </div>
                            <span className="font-bold">Capacity Goal</span>
                        </div>
                    </div>

                    {/* 5. Monthly Breakdown Grid */}
                    <div className="mt-16 pt-12 border-t border-gray-100">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="p-2 bg-[var(--color-accent)]/10 rounded-lg text-[var(--color-accent)]">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800">Monthly Details ({selectedYear})</h3>
                                <p className="text-sm text-gray-400">Activity logs for the current year</p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <AnimatePresence mode='wait'>
                                {currentData.months.filter(m => m.activities.length > 0).map((month) => (
                                    <MonthlyCard key={`${selectedYear}-${month.name}`} data={month} />
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* 6. Insight Area */}
                    <div className="mt-12 p-6 rounded-[2rem] bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex gap-6 items-start">
                        <div className="p-3 bg-white rounded-2xl shadow-sm text-blue-600 shrink-0">
                            <TrendingUp size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-blue-900 text-lg mb-2 flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-blue-400" />
                                Impact Analysis
                            </h4>
                            <p className="text-blue-700/80 leading-relaxed md:text-md">
                                {selectedYear === 2023 && "Launch phase focused on establishing trust and initial distribution networks. Operations scaled significantly during winter months as community response grew."}
                                {selectedYear === 2024 && "Steady growth period with diversification into housing and hygiene support. The Ramadan season saw peak distribution activity and volunteer engagement."}
                                {selectedYear === 2025 && "Record-breaking distribution levels. The strategy is successfully shifting towards sustainable long-term support while staying efficient with emergency relief."}
                            </p>
                        </div>
                    </div>

                    {/* 4. Our Activities (NEW SECTION) */}
                    <div className="pt-2 mt-24">
                        <div className="flex flex-col items-center text-center mb-16">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-[var(--color-accent)] text-[var(--color-primary)] px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6 shadow-sm"
                            >
                                Field Work
                            </motion.div>
                            <h2 className="text-4xl md:text-5xl font-black text-[var(--color-primary)] mb-6">Our Activities</h2>
                            <div className="w-24 h-1.5 bg-[var(--color-accent)] rounded-full mb-8"></div>
                            <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
                                Discover how our teams operate daily to turn these statistics into real human stories.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 px-4">
                            {[
                                {
                                    title: "تضامن جمعية غيث مع ضحايا فيضانات آسفي",
                                    desc: "استقبلنا يوم السبت 27 دجنبر 2025 جمعية غيث القادمة من مدينة الدار البيضاء، والتي حلّت بمدينة آسفي لتقديم الدعم والمواساة لضحايا الفيضانات. وقد وفّرت الجمعية 50 موقد غاز لفائدة الأسر المتضررة، في مبادرة إنسانية تعكس روح التضامن والتكافل بين جمعيات المجتمع المدني بمختلف المدن المغربية. وبهذه المناسبة، نتقدم بجزيل الشكر والتقدير لجمعية غيث ولكافة المحسنين الذين ساهموا في هذه المبادرة النبيلة، كما لا يفوتنا أن نشكر الشركة المواطِنة DHL التي تكفّلت بنقل المساعدات مجانًا، تعبيرًا عن تضامنها مع ضحايا هذه الفاجعة.",
                                    image: "/activities/gaith-event.jpg",
                                    tags: ["تضامن", "آسفي", "جمعية غيث"],
                                    featured: true
                                },
                                {
                                    title: "Partenariat avec Decathlon Californie",
                                    desc: "Toujours reconnaissants de votre engagement continu 🙌🏻. Nous remercions chaleureusement notre partenaire fidèle Decathlon Californie pour leur soutien dans notre initiative ZERO HUNGER en nous offrant des vêtements régulièrement. Sans oublier leur contribution précieuse dans notre dernière caravane humanitaire au Douar Imoulass où les enfants ont bénéficié de chaussures confortables 🥳.",
                                    image: "/activities/decathlon-partnership.jpg",
                                    tags: ["Partenariat", "Impact", "Decathlon"],
                                    featured: true
                                },
                                {
                                    title: "Pottery Workshop with Craftify.ma",
                                    desc: "Last Sunday, our Volunteers had the pleasure to have a unique and enjoyable experience doing a pottery workshop with Mr. Ilyass and his wonderful team at Craftify.ma. We would like to express our gratitude for their kindness, patience, and positive energy throughout the session 🙌🏻",
                                    image: "/activities/pottery-workshop.jpg",
                                    tags: ["Community", "Creative", "Volunteers"],
                                    featured: true
                                },
                                {
                                    title: "عيد مبارك سعيد - توزيع السلات الغذائية",
                                    desc: "بمناسبة العيد، نظمت فرقنا المتطوعة حملة واسعة لتوزيع السلات الغذائية على الأسر والأشخاص في وضعية صعبة. شارك في هذه المبادرة عشرات الشباب بحماس كبير، حيث جابوا مختلف المناطق لضمان مرور العيد في جو من الفرح والتكافل الاجتماعي. المغاربة عنوان التضامن والتآزر.",
                                    image: "/activities/eid-food-hub.jpg",
                                    tags: ["تضامن", "عيد مبارك", "عمل ميداني"],
                                    featured: true
                                }
                            ].map((act, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 col-span-1"
                                >
                                    <div className="flex flex-col h-full">
                                        <div className="h-64 relative overflow-hidden">
                                            <img
                                                src={act.image}
                                                alt={act.title}
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute top-6 left-6 flex gap-2">
                                                {act.tags?.map(tag => (
                                                    <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-black uppercase text-[var(--color-primary)]">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="p-8 flex flex-col justify-between flex-grow">
                                            <div dir={i === 0 || i === 3 ? "rtl" : "ltr"}>
                                                <h3 className={`text-xl font-black text-[var(--color-primary)] mb-4 group-hover:text-[var(--color-accent)] transition-colors leading-tight ${i === 0 || i === 3 ? 'text-right' : ''}`}>
                                                    {act.title}
                                                </h3>
                                                <p className={`text-gray-500 text-sm leading-relaxed mb-6 ${i === 0 || i === 3 ? 'text-right' : ''} line-clamp-4`}>
                                                    {act.desc}
                                                </p>
                                            </div>
                                            <div className="flex items-center text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest gap-2 opacity-100 mt-auto">
                                                <span className="bg-[var(--color-accent)] text-[var(--color-primary)] px-5 py-2 rounded-xl font-black hover:shadow-lg transition-all cursor-pointer">Read Story</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </Section>
    );
}
