'use client';

import React from 'react';
import {
    Zap,
    UserCheck,
    ArrowRight,
    BrainCircuit,
    Sparkles,
    ShieldCheck,
    Users,
    ChevronRight,
    Target
} from 'lucide-react';

export default function AIRecommendationsPage() {
    const candidates = [
        { name: 'Mona Filali', current: 'Volunteer', suggested: 'Team Lead', score: 98, reason: 'Consistent 100% presence and top 1% Academy scores.' },
        { name: 'Oussama Radi', current: 'Volunteer', suggested: 'Zone Coordinator', score: 85, reason: 'High activity count in high-stress zones.' },
        { name: 'Laila Amrani', current: 'Volunteer', suggested: 'Academy Mentor', score: 92, reason: 'Completed all training modules with honors.' },
    ];

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
            {/* Header */}
            <div className="bg-[#134B5F] rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl shadow-[#134B5F]/20">
                <div className="relative z-10 max-w-3xl">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-[#F2C830] flex items-center justify-center">
                            <BrainCircuit className="w-7 h-7 text-[#134B5F]" />
                        </div>
                        <span className="text-sm font-black uppercase tracking-widest text-[#F2C830]">AI Decision Support</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                        Optimizing Our <span className="text-[#F2C830]">Human Impact</span>
                    </h1>
                    <p className="text-white/70 text-lg leading-relaxed mb-8">
                        The engine analyzes presence tracking, academy scores, and field reports to recommend the best assignments and promotions for our growing team.
                    </p>
                </div>
                {/* Abstract Visuals */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-20deg] translate-x-32 flex items-center justify-center">
                    <Sparkles className="w-64 h-64 text-white/10 opacity-50" />
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
                {/* Promotion Candidates */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="flex items-center justify-between mb-2 px-2">
                        <h2 className="text-2xl font-black text-[#134B5F]">Recommended Promotions</h2>
                        <span className="text-gray-400 font-bold text-sm">3 Suggestions Found</span>
                    </div>

                    <div className="space-y-6">
                        {candidates.map((person, i) => (
                            <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 flex flex-col md:flex-row items-center gap-8 group hover:shadow-2xl hover:shadow-[#134B5F]/5 transition-all cursor-pointer relative overflow-hidden">
                                <div className="w-20 h-20 rounded-3xl bg-gray-50 flex items-center justify-center font-black text-[#134B5F] text-2xl group-hover:bg-[#134B5F] group-hover:text-white transition-all shrink-0">
                                    {person.name[0]}
                                </div>
                                <div className="flex-1 space-y-3">
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-xl font-bold text-[#134B5F]">{person.name}</h3>
                                        <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-green-100">Match {person.score}%</span>
                                    </div>
                                    <p className="text-sm text-gray-400 font-bold uppercase tracking-tighter">
                                        {person.current} <ArrowRight className="inline w-3 mx-1" /> {person.suggested}
                                    </p>
                                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex gap-3 text-xs text-gray-500 italic">
                                        <Zap className="w-4 h-4 text-[#F2C830] shrink-0 fill-current" />
                                        "{person.reason}"
                                    </div>
                                </div>
                                <button className="bg-[#134B5F] text-white px-8 py-4 rounded-2xl font-black text-sm hover:shadow-xl transition-all active:scale-95 whitespace-nowrap">
                                    Review Assignment
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Strategy recommendations */}
                <div className="space-y-10">
                    <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-black text-[#134B5F] mb-8">Team Assignments</h2>
                        <div className="space-y-6">
                            {[
                                { zone: 'Maarif Hub', need: 'Shift Leader', rec: 'Sami Alami', urgency: 'High' },
                                { zone: 'Bernoussi', need: 'Volunteer Boost', rec: '8 New Members', urgency: 'Medium' },
                                { zone: 'Global', need: 'Lead Coordination', rec: 'Monthly Meetup', urgency: 'Low' },
                            ].map((job, i) => (
                                <div key={i} className="p-6 rounded-[2.2rem] border border-gray-50 hover:bg-gray-50 transition-colors group">
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-[#134B5F]"></div>
                                            <span className="text-xs font-black text-[#134B5F] uppercase">{job.zone}</span>
                                        </div>
                                        <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded ${job.urgency === 'High' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>{job.urgency}</span>
                                    </div>
                                    <h4 className="font-bold text-[#134B5F] mb-1">{job.need}</h4>
                                    <p className="text-xs text-gray-400 font-bold uppercase">Suggested: {job.rec}</p>
                                    <button className="mt-4 w-full py-2.5 rounded-xl border border-dashed border-gray-200 text-[10px] font-black uppercase text-gray-400 group-hover:bg-[#134B5F] group-hover:text-white group-hover:border-transparent transition-all">
                                        Approve Suggestion
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-2xl font-black text-[#134B5F] mb-4">Data Quality</h2>
                            <p className="text-gray-400 text-sm font-medium mb-6">Our engine is currently operating with <span className="text-[#134B5F] font-bold">94% data accuracy</span> based on field reports.</p>
                            <div className="h-2 bg-gray-50 rounded-full overflow-hidden mb-8">
                                <div className="h-full bg-green-500 w-[94%]"></div>
                            </div>
                            <button className="flex items-center gap-2 text-[#134B5F] font-black text-sm group">
                                Optimize Insights <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
