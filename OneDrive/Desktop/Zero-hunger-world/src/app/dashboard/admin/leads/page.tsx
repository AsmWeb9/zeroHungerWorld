'use client';

import React from 'react';
import {
    Users,
    BarChart3,
    ChevronRight,
    Star,
    TrendingUp,
    MapPin,
    Target,
    Activity
} from 'lucide-react';

export default function LeadPerformancePage() {
    const leads = [
        { name: 'Hanaa Hilal', zone: 'Maarif Hub', activity: 48, growth: '+15%', impact: 'High', score: 98 },
        { name: 'Laila Benani', zone: 'Bhira', activity: 32, growth: '+8%', impact: 'Medium', score: 85 },
        { name: 'Mehdi El Mouadab', zone: 'Bourgone', activity: 56, growth: '+22%', impact: 'Elite', score: 99 },
        { name: 'Hamada Al Amjad', zone: 'Harouchi', activity: 24, growth: '-2%', impact: 'Stable', score: 72 },
    ];

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-right-5 duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div>
                    <h1 className="text-4xl font-black text-[#134B5F] mb-3">Lead Performance</h1>
                    <p className="text-gray-500 text-lg">Comparing team lead effectiveness and zone impact across Casablanca.</p>
                </div>
                <div className="flex gap-4">
                    <div className="bg-white px-6 py-4 rounded-3xl border border-gray-100 flex items-center gap-3 shadow-sm">
                        <Star className="w-6 h-6 text-[#F2C830] fill-current" />
                        <div>
                            <p className="text-[10px] font-black uppercase text-gray-400">Top Lead</p>
                            <p className="font-black text-[#134B5F]">Mehdi E.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-[3rem] border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-10 border-b border-gray-50 bg-gray-50/30 flex justify-between items-center">
                    <h2 className="text-2xl font-black text-[#134B5F]">Lead Comparison Matrix</h2>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Q4 2024 Operations</span>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[10px] font-black uppercase text-gray-400 tracking-widest bg-white">
                                <th className="px-10 py-8">Team Lead</th>
                                <th className="px-10 py-8">Zone</th>
                                <th className="px-10 py-8 text-center">Activities</th>
                                <th className="px-10 py-8 text-center">Team Growth</th>
                                <th className="px-10 py-8">Impact Level</th>
                                <th className="px-10 py-8 text-right">Performance Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leads.sort((a, b) => b.score - a.score).map((lead, i) => (
                                <tr key={i} className="border-t border-gray-50 hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-10 py-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-[#134B5F]/5 flex items-center justify-center font-black text-[#134B5F] group-hover:bg-[#134B5F] group-hover:text-white transition-all text-lg">
                                                {lead.name[0]}
                                            </div>
                                            <p className="font-black text-[#134B5F]">{lead.name}</p>
                                        </div>
                                    </td>
                                    <td className="px-10 py-8 font-bold text-gray-500 flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-[#F2C830]" /> {lead.zone}
                                    </td>
                                    <td className="px-10 py-8 text-center">
                                        <div className="inline-flex flex-col items-center">
                                            <span className="font-black text-[#134B5F] text-xl">{lead.activity}</span>
                                            <span className="text-[10px] font-black uppercase text-gray-400">Total</span>
                                        </div>
                                    </td>
                                    <td className="px-10 py-8 text-center">
                                        <span className={`font-black text-sm ${lead.growth.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                                            {lead.growth}
                                        </span>
                                    </td>
                                    <td className="px-10 py-8">
                                        <div className="flex items-center gap-2">
                                            <Activity className={`w-4 h-4 ${lead.impact === 'Elite' ? 'text-purple-500' : 'text-blue-500'}`} />
                                            <span className="text-sm font-black text-[#134B5F]">{lead.impact}</span>
                                        </div>
                                    </td>
                                    <td className="px-10 py-8">
                                        <div className="flex items-center justify-end gap-3">
                                            <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-[#134B5F]" style={{ width: `${lead.score}%` }}></div>
                                            </div>
                                            <span className="font-black text-[#134B5F]">{lead.score}</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
                {/* Detailed Analysis Widget */}
                <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm group cursor-pointer hover:shadow-2xl hover:shadow-[#134B5F]/5 transition-all">
                    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                        <TrendingUp className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-black text-[#134B5F] mb-4">Strategic Insights</h3>
                    <p className="text-gray-500 leading-relaxed mb-8">
                        Team Lead performance has increased by <span className="font-bold text-[#134B5F]">20%</span> since the introduction of the Academy. Suggest assigning Mehdi El Mouadab to mentor the Harouchi zone team.
                    </p>
                    <button className="flex items-center gap-2 text-[#134B5F] font-black text-sm">
                        View Full Analysis <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* KPI Overview */}
                <div className="bg-[#134B5F] p-10 rounded-[3rem] text-white shadow-xl shadow-[#134B5F]/20 flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-black mb-10 flex items-center gap-3">
                            <Target className="w-5 h-5 text-[#F2C830]" /> Lead KPI Summary
                        </h3>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <p className="text-[10px] font-black uppercase text-white/50 mb-2">Target Actions</p>
                                <p className="text-3xl font-black">150</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase text-white/50 mb-2">Avg Growth</p>
                                <p className="text-3xl font-black text-[#F2C830]">+12%</p>
                            </div>
                        </div>
                    </div>
                    <button className="w-full mt-10 py-5 bg-[#F2C830] text-[#134B5F] rounded-2xl font-black text-sm hover:shadow-xl transition-all">
                        Review Quarterly Strategy
                    </button>
                </div>
            </div>
        </div>
    );
}
