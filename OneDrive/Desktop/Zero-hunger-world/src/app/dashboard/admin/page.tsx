'use client';

import React from 'react';
import {
    Users,
    Globe,
    TrendingUp,
    ShieldCheck,
    PieChart,
    CalendarCheck2
} from 'lucide-react';

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'Total Volunteers', value: '1,248', icon: Users, color: 'blue' },
                    { label: 'Active Zones', value: '12', icon: Globe, color: 'green' },
                    { label: 'Growth Ray', value: '+14%', icon: TrendingUp, color: 'yellow' },
                    { label: 'Verified Actions', value: '452', icon: ShieldCheck, color: 'purple' },
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                        <div className={`w-12 h-12 rounded-2xl bg-${stat.color}-50 flex items-center justify-center mb-4`}>
                            <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                        </div>
                        <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
                        <p className="text-2xl font-bold text-[#134B5F]">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Analytics Chart Mockup */}
                <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 min-h-[400px]">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h2 className="text-2xl font-bold text-[#134B5F]">Global Impact Analytics</h2>
                            <p className="text-gray-500">Real-time data from all operational zones</p>
                        </div>
                        <PieChart className="w-8 h-8 text-[#F2C830]" />
                    </div>
                    <div className="aspect-[16/9] bg-gray-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-200">
                        <span className="text-gray-400 font-medium">Interactive Impact Graph Visualizer</span>
                    </div>
                </div>

                {/* Role Management Preview */}
                <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold text-[#134B5F] mb-6">Pending Role Updates</h2>
                    <div className="space-y-4">
                        {[
                            { name: 'Sami Alami', from: 'Volunteer', to: 'Team Lead', zone: 'Maarif' },
                            { name: 'Laila Benani', from: 'Volunteer', to: 'Team Lead', zone: 'Bhira' },
                        ].map((request, i) => (
                            <div key={i} className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                <p className="font-bold text-[#134B5F]">{request.name}</p>
                                <p className="text-sm text-gray-500">{request.from} → {request.to}</p>
                                <div className="mt-3 flex gap-2">
                                    <button className="flex-1 py-2 text-xs font-bold bg-[#134B5F] text-white rounded-lg hover:bg-[#134B5F]/90">Review</button>
                                </div>
                            </div>
                        ))}
                        <button className="w-full py-4 text-sm font-bold text-[#134B5F] hover:bg-gray-50 rounded-2xl transition-colors border border-dashed border-gray-200">
                            View All Requests
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
