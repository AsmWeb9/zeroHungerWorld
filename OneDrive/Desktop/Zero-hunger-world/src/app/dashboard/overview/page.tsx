'use client';

import React from 'react';
import { useAuth } from '@/context/AuthContext';
import {
    Heart,
    Calendar,
    Zap,
    ArrowUpRight,
    Users,
    Globe,
    BookOpen
} from 'lucide-react';

export default function OverviewPage() {
    const { user } = useAuth();

    const stats = [
        { label: 'Meals Delivered', value: '12.4k', icon: Heart, color: 'text-red-500', bg: 'bg-red-50' },
        { label: 'Active Zones', value: '8', icon: Globe, color: 'text-blue-500', bg: 'bg-blue-50' },
        { label: 'Volunteers', value: '450', icon: Users, color: 'text-green-500', bg: 'bg-green-50' },
        { label: 'Courses Taken', value: '85', icon: BookOpen, color: 'text-purple-500', bg: 'bg-purple-50' },
    ];

    return (
        <div className="space-y-10 animate-in fade-in duration-700">
            {/* Hero Greeting */}
            <div className="bg-[#134B5F] rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl shadow-[#134B5F]/20">
                <div className="relative z-10 max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-black mb-4">
                        Welcome back, <span className="text-[#F2C830]">{user?.name}</span>
                    </h1>
                    <p className="text-white/70 text-lg mb-8 leading-relaxed">
                        The Zero Hunger Initiative is making waves today. Your participation in the {user?.role === 'VOLUNTEER' ? 'Maarif zone action' : 'strategic planning'} last week helped us reach 50% more people in need.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-[#F2C830] text-[#134B5F] px-8 py-4 rounded-[1.5rem] font-black flex items-center gap-2 hover:shadow-xl transition-all active:scale-95">
                            Quick Action <Zap className="w-5 h-5 fill-current" />
                        </button>
                    </div>
                </div>
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F2C830]/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            </div>

            {/* Impact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-6`}>
                            <stat.icon className="w-7 h-7" />
                        </div>
                        <p className="text-gray-500 text-sm font-bold uppercase tracking-wider">{stat.label}</p>
                        <p className="text-3xl font-black text-[#134B5F] mt-1">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
                {/* Shared Events */}
                <div className="lg:col-span-2 bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-2xl font-black text-[#134B5F]">Upcoming Community Events</h2>
                        <button className="text-sm font-bold text-[#134B5F] flex items-center gap-1 hover:underline">
                            View Calendar <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="space-y-6">
                        {[
                            { title: 'Weekly Social Integration Workshop', date: 'Oct 24, 2024', time: '14:00', type: 'Academy', location: 'Maarif Hub' },
                            { title: 'Night Patrol - Casablanca Central', date: 'Oct 26, 2024', time: '20:00', type: 'Field', location: 'Various' },
                            { title: 'Zero Hunger Monthly Briefing', date: 'Nov 01, 2024', time: '10:00', type: 'Strategy', location: 'Global' },
                        ].map((event, i) => (
                            <div key={i} className="flex items-center gap-6 p-6 rounded-[2rem] hover:bg-gray-50 transition-colors group cursor-pointer border border-transparent hover:border-gray-100">
                                <div className="w-16 h-16 rounded-2xl bg-[#134B5F]/5 flex flex-col items-center justify-center text-[#134B5F] group-hover:bg-[#134B5F] group-hover:text-white transition-all">
                                    <span className="text-xs font-black uppercase">{event.date.split(' ')[0]}</span>
                                    <span className="text-xl font-black">{event.date.split(' ')[1].slice(0, 2)}</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-[10px] font-black uppercase text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{event.type}</span>
                                        <span className="text-[10px] font-bold text-gray-400">• {event.time}</span>
                                    </div>
                                    <h3 className="font-bold text-[#134B5F] text-lg">{event.title}</h3>
                                    <p className="text-sm text-gray-500">{event.location}</p>
                                </div>
                                <Calendar className="w-6 h-6 text-gray-200 group-hover:text-[#F2C830] transition-colors" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Latest Notifications / Feed */}
                <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
                    <h2 className="text-2xl font-black text-[#134B5F] mb-10">Notifications</h2>
                    <div className="space-y-8">
                        {[
                            { user: 'Hanaa Hilal', action: 'added a new module in', target: 'Academy', time: '2h ago' },
                            { user: 'System', action: 'updated your zone', target: 'Maarif Center', time: '5h ago' },
                            { user: 'Marouane Zahid', action: 'posted a new', target: 'Strategy Doc', time: '1d ago' },
                        ].map((notif, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center font-bold text-[#134B5F] shrink-0 text-xs">
                                    {notif.user[0]}
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 leading-snug">
                                        <span className="font-bold text-[#134B5F]">{notif.user}</span> {notif.action} <span className="font-bold text-[#134B5F] underline cursor-pointer">{notif.target}</span>
                                    </p>
                                    <p className="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-tight">{notif.time}</p>
                                </div>
                            </div>
                        ))}
                        <button className="w-full py-4 rounded-2xl border-2 border-dashed border-gray-100 text-sm font-bold text-gray-400 hover:border-[#134B5F]/20 hover:text-[#134B5F] transition-all">
                            View All History
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
