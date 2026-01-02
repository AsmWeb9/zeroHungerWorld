'use client';

import React from 'react';
import {
    Activity,
    Users,
    GraduationCap,
    TrendingUp,
    BarChart3,
    Filter,
    ArrowUpRight,
    PieChart
} from 'lucide-react';

export default function GlobalEngagementPage() {
    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-top-5 duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div>
                    <h1 className="text-4xl font-black text-[#134B5F] mb-3">Global Engagement</h1>
                    <p className="text-gray-500 text-lg">Comprehensive overview of volunteer presence and academy performance.</p>
                </div>
                <div className="flex gap-4">
                    <button className="bg-white border border-gray-100 px-6 py-4 rounded-2xl font-black text-gray-500 hover:text-[#134B5F] hover:shadow-md transition-all flex items-center gap-2">
                        <Filter className="w-5 h-5" /> All Zones
                    </button>
                    <button className="bg-[#134B5F] text-[#F2C830] px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:shadow-xl transition-all active:scale-95">
                        Export Report
                    </button>
                </div>
            </div>

            {/* High Level Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'Overall Presence', value: '88%', trend: '+4%', icon: Activity, color: 'text-blue-600', bg: 'bg-blue-50' },
                    { label: 'Academy Score Avg', value: '92/100', trend: '+2%', icon: GraduationCap, color: 'text-purple-600', bg: 'bg-purple-50' },
                    { label: 'Completion Rate', value: '76%', trend: '+12%', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50' },
                    { label: 'Total Impact Hours', value: '4,280', trend: '+150', icon: BarChart3, color: 'text-orange-600', bg: 'bg-orange-50' },
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm relative overflow-hidden group">
                        <div className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                            <stat.icon className="w-7 h-7" />
                        </div>
                        <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
                        <div className="flex items-end gap-3 mt-1">
                            <p className="text-3xl font-black text-[#134B5F]">{stat.value}</p>
                            <span className="text-[10px] font-black text-green-500 mb-1.5 flex items-center gap-0.5">
                                <ArrowUpRight className="w-3" /> {stat.trend}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
                {/* Global Trends Chart Mock */}
                <div className="lg:col-span-2 bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-2xl font-black text-[#134B5F]">Presence vs Academy Scores</h2>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#134B5F]"></div>
                                <span className="text-xs font-bold text-gray-500">Presence</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#F2C830]"></div>
                                <span className="text-xs font-bold text-gray-500">Scores</span>
                            </div>
                        </div>
                    </div>
                    <div className="aspect-[16/8] bg-gray-50 border-2 border-dashed border-gray-100 rounded-[2rem] flex items-center justify-center">
                        <p className="text-gray-400 font-bold italic">Interactive Engagement Comparison Graph</p>
                    </div>
                </div>

                {/* Training Completion Rates */}
                <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-2xl font-black text-[#134B5F]">Training</h2>
                        <PieChart className="w-6 h-6 text-gray-200" />
                    </div>
                    <div className="space-y-8">
                        {[
                            { label: 'Fundamentals', rate: 95, color: 'bg-green-500' },
                            { label: 'Field Operations', rate: 82, color: 'bg-blue-500' },
                            { label: 'Leadership Path', rate: 45, color: 'bg-purple-500' },
                            { label: 'Psychology Module', rate: 68, color: 'bg-[#F2C830]' },
                        ].map((training, i) => (
                            <div key={i} className="space-y-3">
                                <div className="flex justify-between text-xs font-black uppercase tracking-tight">
                                    <span className="text-gray-400">{training.label}</span>
                                    <span className="text-[#134B5F]">{training.rate}%</span>
                                </div>
                                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div className={`h-full ${training.color}`} style={{ width: `${training.rate}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
