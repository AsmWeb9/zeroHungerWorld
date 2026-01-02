'use client';

import React from 'react';
import {
    MapPin,
    ClipboardList,
    Users,
    AlertCircle,
    FileEdit,
    ArrowUpRight
} from 'lucide-react';

export default function TeamDashboard() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
                <div>
                    <h2 className="text-3xl font-bold text-[#134B5F]">Zone: Maarif</h2>
                    <p className="text-gray-500 flex items-center gap-2 mt-1">
                        <MapPin className="w-4 h-4" /> Casablanca Operations Center
                    </p>
                </div>
                <button className="flex items-center gap-2 bg-[#F2C830] text-[#134B5F] px-6 py-3 rounded-2xl font-bold hover:shadow-lg transition-all active:scale-95">
                    <FileEdit className="w-5 h-5" />
                    Enter Daily Field Data
                </button>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Zone Stats */}
                <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-[#134B5F] mb-6">Zone Performance</h3>
                    <div className="space-y-6">
                        {[
                            { label: 'Meals Distributed', value: '450', target: '500', icon: ClipboardList },
                            { label: 'Active Volunteers', value: '28', target: '35', icon: Users },
                            { label: 'Case Files Resolved', value: '12', target: '15', icon: AlertCircle },
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex items-center gap-3">
                                        <stat.icon className="w-5 h-5 text-[#F2C830]" />
                                        <span className="font-medium text-gray-700">{stat.label}</span>
                                    </div>
                                    <span className="font-bold text-[#134B5F]">{stat.value}/{stat.target}</span>
                                </div>
                                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-[#134B5F]"
                                        style={{ width: `${(parseInt(stat.value) / parseInt(stat.target)) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Field Activity Logs */}
                <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold text-[#134B5F]">Recent Zone Activity</h3>
                        <button className="text-[#134B5F] font-bold text-sm flex items-center gap-1 hover:underline">
                            View Archive <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="space-y-4">
                        {[
                            { time: '14:20', task: 'Lunch distribution completed', lead: 'Hanaa Hilal' },
                            { time: '11:45', task: 'Social case study - ID #4521', lead: 'Oussama R.' },
                            { time: '09:00', task: 'Morning zone briefing', lead: 'Hanaa Hilal' },
                        ].map((log, i) => (
                            <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                                <div className="w-16 text-sm font-bold text-gray-400">{log.time}</div>
                                <div className="flex-1">
                                    <p className="font-bold text-[#134B5F]">{log.task}</p>
                                    <p className="text-xs text-gray-500">Managed by: {log.lead}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
