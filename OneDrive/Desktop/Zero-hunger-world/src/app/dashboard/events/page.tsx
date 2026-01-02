'use client';

import React from 'react';
import {
    Calendar,
    MapPin,
    Clock,
    Users,
    ChevronRight,
    Search,
    Plus
} from 'lucide-react';

export default function EventsPage() {
    const events = [
        { title: 'Night Patrol: Casablanca Port', date: 'Oct 24, 2024', time: '21:00 - 01:00', location: 'Port Area', attendees: 12, type: 'Field Action', urgent: true },
        { title: 'Social Entrepreneurship Workshop', date: 'Oct 25, 2024', time: '10:00 - 13:00', location: 'Maarif Hub', attendees: 25, type: 'Academy', urgent: false },
        { title: 'Food Distribution: Old Medina', date: 'Oct 26, 2024', time: '12:00 - 15:00', location: 'Place des Nations', attendees: 18, type: 'Field Action', urgent: false },
        { title: 'Team Lead Coordination Meet', date: 'Oct 28, 2024', time: '18:00 - 19:30', location: 'Online/Zoom', attendees: 8, type: 'Strategy', urgent: false },
    ];

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
            {/* Header */}
            <div className="flex justify-between items-center bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="relative z-10">
                    <h1 className="text-4xl font-black text-[#134B5F] mb-3">Community Events</h1>
                    <p className="text-gray-500 text-lg">Join an action or attend a workshop to increase your impact.</p>
                </div>
                <button className="bg-[#134B5F] text-white p-5 rounded-[1.5rem] hover:shadow-xl transition-all active:scale-95 relative z-10">
                    <Plus className="w-8 h-8" />
                </button>
                <div className="absolute top-0 right-0 w-32 h-full bg-[#F2C830]/5 skew-x-12 translate-x-16"></div>
            </div>

            {/* List */}
            <div className="space-y-6">
                {events.map((event, i) => (
                    <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 flex flex-col md:flex-row items-center gap-8 group hover:border-[#134B5F]/20 hover:shadow-2xl hover:shadow-[#134B5F]/5 transition-all cursor-pointer relative overflow-hidden">
                        {event.urgent && <div className="absolute top-0 left-0 w-2 h-full bg-red-500"></div>}

                        <div className="w-24 h-24 rounded-3xl bg-gray-50 flex flex-col items-center justify-center text-[#134B5F] group-hover:bg-[#134B5F] group-hover:text-white transition-all shrink-0">
                            <span className="text-xs font-black uppercase text-gray-400 group-hover:text-white/50">{event.date.split(' ')[0]}</span>
                            <span className="text-3xl font-black">{event.date.split(' ')[1].replace(',', '')}</span>
                        </div>

                        <div className="flex-1 space-y-3">
                            <div className="flex items-center gap-3">
                                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${event.urgent ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
                                    {event.type}
                                </span>
                                {event.urgent && <span className="text-[10px] font-black text-red-600 uppercase animate-pulse">Urgent Priority</span>}
                            </div>
                            <h3 className="text-2xl font-bold text-[#134B5F]">{event.title}</h3>
                            <div className="flex flex-wrap gap-6 text-sm text-gray-500 font-medium">
                                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#F2C830]" /> {event.time}</span>
                                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#F2C830]" /> {event.location}</span>
                                <span className="flex items-center gap-2"><Users className="w-4 h-4 text-[#F2C830]" /> {event.attendees} Attending</span>
                            </div>
                        </div>

                        <button className="bg-gray-50 text-[#134B5F] px-8 py-4 rounded-2xl font-black group-hover:bg-[#F2C830] transition-colors flex items-center gap-2 whitespace-nowrap">
                            Join Event <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
