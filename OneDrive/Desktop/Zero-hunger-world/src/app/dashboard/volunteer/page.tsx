'use client';

import React from 'react';
import {
    User,
    Flame,
    Award,
    Clock,
    Zap,
    ArrowRight,
    CheckCircle2,
    Target,
    Activity,
    LineChart,
    Heart,
    MapPin
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function VolunteerDashboard() {
    const { user } = useAuth();

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-1000">
            {/* Top Profile Header */}
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-10">
                <div className="w-40 h-40 rounded-[2.5rem] bg-gray-50 border-[6px] border-[#F2C830] p-1 shadow-inner shrink-0 overflow-hidden group">
                    <div className="w-full h-full rounded-[2.2rem] bg-gray-100 flex items-center justify-center text-[#134B5F] group-hover:scale-110 transition-transform duration-500">
                        <User className="w-20 h-20 opacity-20" />
                    </div>
                </div>

                <div className="flex-1 text-center md:text-left space-y-4">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                        <h1 className="text-4xl font-black text-[#134B5F]">{user?.name}</h1>
                        <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest border border-blue-100">Level 4 Hero</span>
                    </div>
                    <p className="text-gray-500 text-lg max-w-2xl">
                        You've been an active member of the Zero Hunger Initiative for <span className="font-bold text-[#134B5F]">2 months</span>. Your dedication to the Maarif zone has impacted over <span className="font-bold text-[#134B5F]">50 individuals</span>.
                    </p>

                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 pt-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                                <Flame className="w-5 h-5 text-orange-500" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase text-gray-400">Streak</p>
                                <p className="font-black text-[#134B5F]">12 Days</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                                <Clock className="w-5 h-5 text-purple-500" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase text-gray-400">Total Hours</p>
                                <p className="font-black text-[#134B5F]">156 Hours</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                                <Activity className="w-5 h-5 text-green-500" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase text-gray-400">Actions</p>
                                <p className="font-black text-[#134B5F]">24 Completed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
                {/* Engagement Analysis */}
                <div className="lg:col-span-2 space-y-10">
                    <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
                        <div className="flex justify-between items-center mb-10">
                            <h2 className="text-2xl font-black text-[#134B5F]">Engagement Analysis</h2>
                            <button className="p-3 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                                <LineChart className="w-6 h-6 text-gray-400" />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-6">
                                <h3 className="text-sm font-black uppercase text-gray-400 flex items-center gap-2">
                                    <Target className="w-4 h-4" /> Activity Scores
                                </h3>
                                {[
                                    { label: 'Field Presence', value: 85, color: '#134B5F' },
                                    { label: 'Action Participation', value: 72, color: '#F2C830' },
                                    { label: 'Academy Course Progress', value: 94, color: '#10B981' },
                                    { label: 'Social Contribution', value: 60, color: '#8B5CF6' },
                                ].map((score, i) => (
                                    <div key={i} className="space-y-2">
                                        <div className="flex justify-between text-xs font-bold">
                                            <span className="text-gray-600">{score.label}</span>
                                            <span className="text-[#134B5F]">{score.value}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <div
                                                className="h-full transition-all duration-1000 delay-300"
                                                style={{ width: `${score.value}%`, backgroundColor: score.color }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-[#134B5F] rounded-[2rem] p-8 text-white flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <Zap className="w-5 h-5 text-[#F2C830] fill-current" />
                                        <span className="text-xs font-black uppercase tracking-widest text-white/50">AI Insights</span>
                                    </div>
                                    <p className="font-bold text-lg leading-relaxed">
                                        "You're in the top 5% of volunteers for Academy engagement. Your scores suggest you're ready for Team Lead training."
                                    </p>
                                </div>
                                <button className="mt-8 bg-white text-[#134B5F] py-4 rounded-2xl font-black text-sm hover:shadow-xl transition-all active:scale-95">
                                    Apply for Lead Training
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Training Progress Widget */}
                        <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-black text-[#134B5F] mb-6">Recent Training</h3>
                            <div className="space-y-4">
                                {[
                                    { title: 'Entrepreneurship 101', status: '85%', date: 'Yesterday' },
                                    { title: 'Vulnerabel Psychology', status: 'Completed', date: '2 days ago' },
                                ].map((item, i) => (
                                    <div key={i} className="p-4 rounded-2xl bg-gray-50 flex items-center justify-between">
                                        <div>
                                            <p className="font-bold text-[#134B5F] text-sm">{item.title}</p>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase">{item.date}</p>
                                        </div>
                                        <span className={`text-[10px] font-black px-2 py-1 rounded-full ${item.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-[#F2C830] text-[#134B5F]'}`}>{item.status}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recommendations Widget */}
                        <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-black text-[#134B5F] mb-6">Personalized Recs</h3>
                            <div className="space-y-4">
                                <div className="p-4 rounded-2xl border-2 border-dashed border-[#F2C830]/30 flex items-center gap-4 cursor-pointer hover:bg-[#F2C830]/5 transition-colors">
                                    <div className="w-10 h-10 bg-[#F2C830]/10 rounded-xl flex items-center justify-center">
                                        <Target className="w-5 h-5 text-[#F2C830]" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#134B5F] text-sm">Action: Night Patrol</p>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase">Maarif Hub • Today 20:00</p>
                                    </div>
                                </div>
                                <div className="p-4 rounded-2xl border-2 border-dashed border-blue-200 flex items-center gap-4 cursor-pointer hover:bg-blue-50 transition-colors">
                                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                                        <BookOpen className="w-5 h-5 text-blue-500" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#134B5F] text-sm">Course: Deep Social Impact</p>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase">Academy • Module 4</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Rights Column / Achievements / Badges */}
                <div className="space-y-10">
                    <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-black text-[#134B5F] mb-8">Achievements</h2>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { name: 'Early Bird', icon: Zap, color: 'text-yellow-500', bg: 'bg-yellow-50', level: 'Level 2' },
                                { name: 'Top Support', icon: Heart, color: 'text-red-500', bg: 'bg-red-50', level: 'Level 3' },
                                { name: 'Quiz Master', icon: Award, color: 'text-purple-500', bg: 'bg-purple-50', level: 'Level 1' },
                                { name: 'Zone Legend', icon: MapPin, color: 'text-blue-500', bg: 'bg-blue-50', level: 'Locked' },
                            ].map((badge, i) => (
                                <div key={i} className={`flex flex-col items-center p-6 rounded-[2rem] border border-gray-50 ${badge.level === 'Locked' ? 'opacity-30 grayscale' : 'hover:scale-105 transition-transform'}`}>
                                    <div className={`w-16 h-16 rounded-2xl ${badge.bg} ${badge.color} flex items-center justify-center mb-4`}>
                                        <badge.icon className="w-8 h-8" />
                                    </div>
                                    <p className="font-black text-[#134B5F] text-xs text-center">{badge.name}</p>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase mt-1">{badge.level}</p>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-10 py-4 bg-gray-50 text-gray-500 rounded-2xl font-black text-sm hover:bg-[#134B5F] hover:text-white transition-all">
                            View All Badges
                        </button>
                    </div>

                    {/* Quick Checklist */}
                    <div className="bg-[#F2C830] p-10 rounded-[3rem] shadow-xl shadow-[#F2C830]/20">
                        <h2 className="text-2xl font-black text-[#134B5F] mb-6">Today's Goals</h2>
                        <div className="space-y-4">
                            {[
                                { task: 'Complete Quiz #4', done: true },
                                { task: 'Confirm Night Patrol', done: false },
                                { task: 'Update Impact Record', done: false },
                            ].map((todo, i) => (
                                <div key={i} className={`p-4 rounded-2xl bg-white/50 flex justify-between items-center ${todo.done ? 'opacity-50' : ''}`}>
                                    <span className={`text-sm font-bold text-[#134B5F] ${todo.done ? 'line-through' : ''}`}>{todo.task}</span>
                                    {todo.done ? <CheckCircle2 className="w-5 h-5 text-[#134B5F]" /> : <div className="w-5 h-5 rounded-full border-2 border-[#134B5F]/20"></div>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const BookOpen = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
);
