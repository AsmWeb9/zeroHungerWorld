'use client';

import React from 'react';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    User as UserIcon,
    GraduationCap,
    Calendar,
    MapPin,
    Database,
    BarChart3,
    LogOut,
    Users,
    Bell,
    Settings,
    ChevronRight,
    Search,
    TrendingUp,
    ShieldAlert,
    Activity
} from 'lucide-react';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user, logout } = useAuth();
    const pathname = usePathname();

    // Menu Structure
    const menuGroups = [
        {
            title: 'Personal Impact',
            items: [
                { icon: LayoutDashboard, label: 'Overview', href: '/dashboard/overview' },
                { icon: GraduationCap, label: 'Academy', href: '/dashboard/academy' },
                { icon: Calendar, label: 'Events', href: '/dashboard/events' },
                { icon: Bell, label: 'Notifications', href: '/dashboard/notifications' },
            ]
        }
    ];

    // Role-specific groups
    if (user?.role === 'BUREAU') {
        menuGroups.push({
            title: 'Bureau Management',
            items: [
                { icon: Activity, label: 'Global Engagement', href: '/dashboard/admin/engagement' },
                { icon: TrendingUp, label: 'AI Recommender', href: '/dashboard/admin/recommendations' },
                { icon: BarChart3, label: 'Lead Performance', href: '/dashboard/admin/leads' },
            ]
        });
    }

    if (user?.role === 'TEAM_LEAD') {
        menuGroups.push({
            title: 'Team & Zone',
            items: [
                { icon: Users, label: 'Volunteer List', href: '/dashboard/team/management' },
                { icon: MapPin, label: 'Zone Mapping', href: '/dashboard/team/zone' },
            ]
        });
    }

    if (user?.role === 'VOLUNTEER') {
        menuGroups.push({
            title: 'My Journey',
            items: [
                { icon: UserIcon, label: 'My Profile', href: '/dashboard/volunteer' },
            ]
        });
    }

    return (
        <div className="flex h-screen bg-[#F8FAFB]">
            {/* Sidebar */}
            <aside className="w-72 bg-white border-r border-gray-200 flex flex-col">
                {/* Branding */}
                <div className="p-8">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#134B5F] flex items-center justify-center font-bold text-white">
                            ZH
                        </div>
                        <span className="font-bold text-xl text-[#134B5F] tracking-tight">Impact Hub</span>
                    </Link>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 px-4 pb-8 space-y-8 overflow-y-auto">
                    {menuGroups.map((group, idx) => (
                        <div key={idx} className="space-y-2">
                            <p className="px-4 text-[10px] font-black uppercase text-gray-400 tracking-widest">{group.title}</p>
                            <div className="space-y-1">
                                {group.items.map((item) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-all group ${isActive
                                                    ? 'bg-[#134B5F] text-white shadow-lg shadow-[#134B5F]/20'
                                                    : 'text-gray-500 hover:bg-gray-50 hover:text-[#134B5F]'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <item.icon className={`w-5 h-5 ${isActive ? 'text-[#F2C830]' : 'text-gray-400 group-hover:text-[#134B5F]'}`} />
                                                <span className="font-semibold">{item.label}</span>
                                            </div>
                                            {isActive && <ChevronRight className="w-4 h-4 text-white/50" />}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </nav>

                {/* Profile Widget */}
                <div className="p-4 bg-gray-50 m-4 rounded-[2rem] border border-gray-100">
                    <div className="flex items-center gap-3 mb-4 p-2">
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#134B5F] font-bold border border-gray-100 uppercase">
                            {user?.name?.[0]}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="font-bold text-[#134B5F] truncate">{user?.name}</p>
                            <p className="text-[10px] text-gray-400 font-bold uppercase truncate">{user?.role.replace('_', ' ')}</p>
                        </div>
                    </div>
                    <button
                        onClick={logout}
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-red-500 font-bold text-sm shadow-sm border border-red-50 hover:bg-red-50 transition-colors"
                    >
                        <LogOut className="w-4 h-4" /> Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Header */}
                <header className="h-20 bg-white border-b border-gray-200 px-8 flex items-center justify-between shrink-0">
                    <div className="relative w-96 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#134B5F] transition-colors" />
                        <input
                            type="text"
                            placeholder="Search records, events or volunteers..."
                            className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-gray-50 border border-transparent focus:border-gray-200 focus:bg-white outline-none transition-all text-sm"
                        />
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3">
                            <button className="p-2.5 rounded-xl bg-gray-50 text-gray-400 hover:text-[#134B5F] transition-colors relative">
                                <Bell className="w-5 h-5" />
                                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                            </button>
                            <button className="p-2.5 rounded-xl bg-gray-50 text-gray-400 hover:text-[#134B5F] transition-colors">
                                <Settings className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </header>

                {/* Scrollable Body */}
                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                    {children}
                </div>
            </main>
        </div>
    );
}
