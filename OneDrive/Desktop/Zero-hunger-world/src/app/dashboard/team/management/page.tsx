'use client';

import React from 'react';
import {
    Users,
    CheckCircle2,
    MessageSquare,
    MoreVertical,
    Filter,
    Search,
    Clock,
    Activity,
    AlertCircle,
    UserPlus
} from 'lucide-react';

export default function TeamManagementPage() {
    const volunteers = [
        { name: 'Oussama Radi', email: 'oussama@gmail.com', presence: 92, activities: 12, quality: 'High', status: 'Active' },
        { name: 'Laila Amrani', email: 'laila@gmail.com', presence: 85, activities: 8, quality: 'Medium', status: 'Active' },
        { name: 'Sami Benzekri', email: 'sami@gmail.com', presence: 45, activities: 3, quality: 'Low', status: 'Warning' },
        { name: 'Mona Filali', email: 'mona@gmail.com', presence: 100, activities: 15, quality: 'Elite', status: 'Active' },
    ];

    const todos = [
        { task: 'Verify presence for night patrol', assignee: 'All', priority: 'High' },
        { task: 'Contact Sami regarding absence', assignee: 'Me', priority: 'Medium' },
        { task: 'Assign food distribution leads', assignee: 'Me', priority: 'Low' },
    ];

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-right-5 duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div>
                    <h1 className="text-4xl font-black text-[#134B5F] mb-3">Team Management</h1>
                    <p className="text-gray-500 text-lg">Coordinate your volunteers and track their field engagement.</p>
                </div>
                <div className="flex gap-4">
                    <button className="bg-white border border-gray-100 p-4 rounded-2xl text-gray-500 hover:text-[#134B5F] hover:shadow-md transition-all">
                        <Filter className="w-5 h-5" />
                    </button>
                    <button className="bg-[#134B5F] text-white px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:shadow-xl transition-all active:scale-95">
                        <UserPlus className="w-5 h-5" /> Add Volunteer
                    </button>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
                {/* Volunteer List Area */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-[3rem] border border-gray-100 shadow-sm overflow-hidden">
                        <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
                            <h2 className="text-xl font-black text-[#134B5F]">Active Team Members <span className="text-gray-400 ml-2 font-bold text-sm">4</span></h2>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input type="text" placeholder="Search members..." className="pl-9 pr-4 py-2 rounded-xl bg-white border border-gray-200 text-sm outline-none w-64" />
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="text-[10px] font-black uppercase text-gray-400 tracking-widest bg-white">
                                        <th className="px-8 py-6">Member</th>
                                        <th className="px-8 py-6">Presence</th>
                                        <th className="px-8 py-6">Activities</th>
                                        <th className="px-8 py-6">Status</th>
                                        <th className="px-8 py-6 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {volunteers.map((v, i) => (
                                        <tr key={i} className="border-t border-gray-50 hover:bg-gray-50/50 transition-colors group">
                                            <td className="px-8 py-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-xl bg-[#134B5F]/5 flex items-center justify-center font-bold text-[#134B5F] group-hover:bg-[#134B5F] group-hover:text-white transition-all">
                                                        {v.name[0]}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-[#134B5F]">{v.name}</p>
                                                        <p className="text-xs text-gray-400">{v.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full w-24 overflow-hidden">
                                                        <div className={`h-full bg-[#134B5F]`} style={{ width: `${v.presence}%` }}></div>
                                                    </div>
                                                    <span className="text-xs font-black text-[#134B5F]">{v.presence}%</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6 font-bold text-[#134B5F]">{v.activities}</td>
                                            <td className="px-8 py-6">
                                                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${v.status === 'Warning' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                                                    {v.status}
                                                </span>
                                            </td>
                                            <td className="px-8 py-6 text-right">
                                                <button className="p-2 text-gray-400 hover:text-[#134B5F] hover:bg-white rounded-xl transition-all">
                                                    <MessageSquare className="w-5 h-5" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Team Tasks / Indicators area */}
                <div className="space-y-10">
                    {/* Team Health Card */}
                    <div className="bg-[#134B5F] p-10 rounded-[3rem] text-white shadow-2xl shadow-[#134B5F]/20 relative overflow-hidden">
                        <h3 className="text-xl font-black mb-8 flex items-center gap-2">
                            <Activity className="w-5 h-5 text-[#F2C830]" /> Team Health
                        </h3>
                        <div className="space-y-8">
                            <div>
                                <div className="flex justify-between mb-2 text-xs font-bold uppercase tracking-widest text-white/50">
                                    <span>Average Presence</span>
                                    <span>84%</span>
                                </div>
                                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-[#F2C830] w-[84%]"></div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                    <p className="text-[10px] font-black uppercase text-white/50 mb-1">Actions</p>
                                    <p className="text-2xl font-black">28</p>
                                </div>
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                    <p className="text-[10px] font-black uppercase text-white/50 mb-1">Training</p>
                                    <p className="text-2xl font-black">92%</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    </div>

                    {/* Team To-Dos */}
                    <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
                        <h3 className="text-xl font-black text-[#134B5F] mb-8">Team Tasks</h3>
                        <div className="space-y-4">
                            {todos.map((todo, i) => (
                                <div key={i} className="p-5 rounded-2xl border border-gray-50 hover:border-[#134B5F]/10 hover:shadow-lg transition-all cursor-pointer group">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase ${todo.priority === 'High' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
                                            {todo.priority} Priority
                                        </span>
                                        <Clock className="w-3 h-3 text-gray-300" />
                                    </div>
                                    <p className="font-bold text-[#134B5F] text-sm group-hover:text-[#F2C830] transition-colors">{todo.task}</p>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase mt-2">Assignee: {todo.assignee}</p>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-8 py-4 rounded-[1.5rem] border-2 border-dashed border-gray-100 text-[#134B5F] font-black text-sm hover:border-[#134B5F]/20 hover:bg-gray-50/50 transition-all flex items-center justify-center gap-2">
                            New Task <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const ChevronRight = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6" /></svg>
);
