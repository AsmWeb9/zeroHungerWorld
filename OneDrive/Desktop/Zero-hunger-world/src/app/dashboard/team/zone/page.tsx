'use client';

import React from 'react';
import {
    MapPin,
    History,
    Home,
    AlertCircle,
    Eye,
    FileEdit,
    Plus,
    BarChart3,
    Clock
} from 'lucide-react';

export default function ZoneManagementPage() {
    const homelessData = [
        { initials: 'A.Z.', location: 'Rue Maarif', needs: ['Food', 'Blanket'], status: 'Critical', lastContact: '2 days ago' },
        { initials: 'M.B.', location: 'Near Hub', needs: ['Social integration'], status: 'Stable', lastContact: '5 days ago' },
        { initials: 'S.R.', location: 'Mosque Area', needs: ['Medical'], status: 'High', lastContact: '1 day ago' },
    ];

    const history = [
        { action: 'Clean clothes distribution', date: 'Oct 22', volunteers: 6, impact: '12 people' },
        { action: 'Morning assessment', date: 'Oct 20', volunteers: 2, impact: '5 new cases' },
        { action: 'Emergency medical visit', date: 'Oct 18', volunteers: 3, impact: '1 hospitalization' },
    ];

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-right-5 duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm overflow-hidden relative">
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                        <MapPin className="text-[#F2C830] w-6 h-6" />
                        <span className="text-xs font-black uppercase text-gray-400 tracking-widest">Active Zone</span>
                    </div>
                    <h1 className="text-4xl font-black text-[#134B5F]">Maarif Operations Hub</h1>
                    <p className="text-gray-500 text-lg mt-2">Managing 15 active cases and coordinating 24 volunteers.</p>
                </div>
                <div className="flex gap-4 relative z-10">
                    <button className="bg-white border border-gray-100 px-6 py-4 rounded-2xl font-black text-[#134B5F] hover:shadow-lg transition-all flex items-center gap-2">
                        <FileEdit className="w-5 h-5" /> View Full Map
                    </button>
                    <button className="bg-[#134B5F] text-white px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:shadow-xl transition-all active:scale-95">
                        <Plus className="w-5 h-5" /> New Data Entry
                    </button>
                </div>
                <div className="absolute top-0 right-0 w-64 h-full bg-[#134B5F]/5 skew-x-12 translate-x-20"></div>
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
                {/* Case Tracking (Restricted Data) */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-[3rem] border border-gray-100 shadow-sm p-10">
                        <div className="flex justify-between items-center mb-10">
                            <h2 className="text-2xl font-black text-[#134B5F]">Homeless Data Tracking</h2>
                            <span className="px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-red-100">Restricted Access</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {homelessData.map((person, i) => (
                                <div key={i} className="p-6 rounded-[2rem] border border-gray-50 hover:bg-gray-50 hover:border-[#134B5F]/10 transition-all group flex gap-6 items-start">
                                    <div className="w-14 h-14 rounded-2xl bg-[#134B5F]/5 flex items-center justify-center font-black text-[#134B5F] text-lg group-hover:bg-[#134B5F] group-hover:text-white transition-all shrink-0">
                                        {person.initials}
                                    </div>
                                    <div className="flex-1 space-y-3">
                                        <div>
                                            <p className="font-bold text-[#134B5F]">{person.location}</p>
                                            <p className="text-[10px] font-black text-gray-400 uppercase">Last Contact: {person.lastContact}</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {person.needs.map((need, ni) => (
                                                <span key={ni} className="px-2 py-0.5 bg-white border border-gray-100 rounded-lg text-[10px] font-bold text-gray-500">{need}</span>
                                            ))}
                                        </div>
                                        <div className="pt-2 flex justify-between items-center">
                                            <span className={`text-[10px] font-black uppercase ${person.status === 'Critical' ? 'text-red-600' : 'text-green-600'}`}>{person.status}</span>
                                            <button className="text-[10px] font-black uppercase text-[#134B5F] hover:underline flex items-center gap-1">Details <Eye className="w-3" /></button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Field Action History */}
                    <div className="bg-white rounded-[3rem] border border-gray-100 shadow-sm p-10">
                        <h2 className="text-2xl font-black text-[#134B5F] mb-10 flex items-center gap-3">
                            <History className="w-6 h-6 text-[#F2C830]" /> Recent Field Actions
                        </h2>
                        <div className="space-y-0 relative">
                            {/* Vertical line for history */}
                            <div className="absolute left-7 top-0 bottom-0 w-px bg-gray-100"></div>

                            {history.map((item, i) => (
                                <div key={i} className="flex gap-10 pb-8 last:pb-0 relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-white border-4 border-gray-50 flex items-center justify-center text-[#134B5F] shrink-0 font-black">
                                        {item.date.split(' ')[1]}
                                    </div>
                                    <div className="flex-1 pt-2">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-bold text-[#134B5F]">{item.action}</h3>
                                                <p className="text-sm text-gray-500 mt-1">{item.volunteers} Volunteers involved • {item.impact} impacted</p>
                                            </div>
                                            <span className="text-[10px] font-black text-gray-400 uppercase">{item.date}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column / Stats / Planning */}
                <div className="space-y-10">
                    <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-black text-[#134B5F] mb-8">Zone Stats</h2>
                        <div className="space-y-8">
                            {[
                                { label: 'Social Reintegration', value: 3, total: 10, color: 'bg-green-500' },
                                { label: 'Needs Resolution', value: 65, total: 100, isPercent: true, color: 'bg-[#134B5F]' },
                                { label: 'Active Coverage', value: 85, total: 100, isPercent: true, color: 'bg-[#F2C830]' },
                            ].map((stat, i) => (
                                <div key={i} className="space-y-3">
                                    <div className="flex justify-between text-xs font-black uppercase tracking-tight">
                                        <span className="text-gray-400">{stat.label}</span>
                                        <span className="text-[#134B5F]">{stat.value}{stat.isPercent ? '%' : ` / ${stat.total}`}</span>
                                    </div>
                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div className={`h-full ${stat.color} transition-all duration-1000`} style={{ width: `${stat.isPercent ? stat.value : (stat.value / stat.total) * 100}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#134B5F] p-10 rounded-[3rem] text-white shadow-xl shadow-[#134B5F]/20">
                        <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
                            <BarChart3 className="w-5 h-5 text-[#F2C830]" /> Zone Insights
                        </h2>
                        <div className="space-y-6">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <p className="text-xs font-bold text-white/50 mb-2 lowercase italic">"Higher frequency detected near central mosque. Recommend shift increase between 19:00 - 21:00."</p>
                                <div className="flex items-center gap-2 text-[#F2C830] text-xs font-black">
                                    <Clock className="w-3 h-3" /> AI Suggestion
                                </div>
                            </div>
                            <button className="w-full py-4 bg-[#F2C830] text-[#134B5F] rounded-2xl font-black text-sm hover:shadow-lg transition-all active:scale-95">
                                Plan Shift Change
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
