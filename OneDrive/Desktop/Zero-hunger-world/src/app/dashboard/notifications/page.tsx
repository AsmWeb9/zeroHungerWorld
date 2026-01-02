'use client';

import React from 'react';
import {
    Bell,
    CheckCircle2,
    Info,
    AlertCircle,
    Clock,
    MoreHorizontal,
    Search
} from 'lucide-react';

export default function NotificationsPage() {
    const notifications = [
        { id: 1, title: 'Action Approved', content: 'Your request for the Casablanca Central patrol has been approved.', time: '2h ago', type: 'success', status: 'unread' },
        { id: 2, title: 'New Academy Course', content: 'Psychology of Vulnerability is now available for all volunteers.', time: '5h ago', type: 'info', status: 'unread' },
        { id: 3, title: 'Urgent: Field Data Missing', content: 'The zone data for Maarif Hub (Oct 22) is incomplete.', time: '1d ago', type: 'alert', status: 'read' },
        { id: 4, title: 'Welcome to Impact Hub', content: 'Your account is ready. Complete your profile to get started.', time: '2d ago', type: 'info', status: 'read' },
    ];

    const getTypeStyles = (type: string) => {
        switch (type) {
            case 'success': return 'bg-green-50 text-green-600 border-green-100';
            case 'alert': return 'bg-red-50 text-red-600 border-red-100';
            default: return 'bg-blue-50 text-blue-600 border-blue-100';
        }
    };

    const getIcon = (type: string) => {
        switch (type) {
            case 'success': return <CheckCircle2 className="w-6 h-6" />;
            case 'alert': return <AlertCircle className="w-6 h-6" />;
            default: return <Info className="w-6 h-6" />;
        }
    };

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-700 max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-black text-[#134B5F] mb-3">Notification Center</h1>
                    <p className="text-gray-500">Stay updated with the latest actions, events, and reports.</p>
                </div>
                <button className="text-sm font-bold text-[#134B5F] hover:underline mb-2">
                    Mark all as read
                </button>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4 bg-white p-3 rounded-[1.5rem] border border-gray-100 shadow-sm w-fit">
                <button className="px-6 py-2.5 bg-[#134B5F] text-white rounded-xl font-bold text-sm">All</button>
                <button className="px-6 py-2.5 text-gray-500 hover:text-[#134B5F] font-bold text-sm transition-colors">Unread</button>
                <button className="px-6 py-2.5 text-gray-500 hover:text-[#134B5F] font-bold text-sm transition-colors">System</button>
            </div>

            {/* List */}
            <div className="space-y-4">
                {notifications.map((notif) => (
                    <div
                        key={notif.id}
                        className={`p-6 rounded-[2rem] border transition-all cursor-pointer flex gap-6 items-start ${notif.status === 'unread' ? 'bg-white border-gray-200 shadow-lg shadow-gray-200/50' : 'bg-gray-50 border-transparent opacity-60'
                            }`}
                    >
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border ${getTypeStyles(notif.type)}`}>
                            {getIcon(notif.type)}
                        </div>
                        <div className="flex-1 space-y-1">
                            <div className="flex justify-between items-center">
                                <h3 className="font-black text-[#134B5F] text-lg">{notif.title}</h3>
                                <span className="text-[10px] font-black text-gray-400 uppercase flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> {notif.time}
                                </span>
                            </div>
                            <p className="text-gray-500 font-medium leading-relaxed">{notif.content}</p>
                            <div className="pt-2 flex gap-3">
                                {notif.status === 'unread' && (
                                    <button className="text-[10px] font-black uppercase text-[#134B5F] hover:underline">Mark as read</button>
                                )}
                                <button className="text-[10px] font-black uppercase text-gray-400 hover:text-red-500">Delete</button>
                            </div>
                        </div>
                        <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                            <MoreHorizontal className="w-5 h-5 text-gray-400" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
