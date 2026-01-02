"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User } from '@/types';

interface SidebarProps {
    user: User;
}

const Sidebar = ({ user }: SidebarProps) => {
    const pathname = usePathname();

    const links = [
        { href: '/dashboard/member', label: 'Feed', icon: '🏠', roles: ['MEMBER', 'LEADER', 'PRESIDENT'] },
        { href: '/dashboard/academy', label: 'Academy', icon: '🎓', roles: ['MEMBER', 'LEADER', 'PRESIDENT'] },
        { href: '/dashboard/events', label: 'Events', icon: '📅', roles: ['MEMBER', 'LEADER', 'PRESIDENT'] },
        { href: '/dashboard/leader', label: 'Zone Ops', icon: '⚡', roles: ['LEADER', 'PRESIDENT'] },
        { href: '/dashboard/president', label: 'Global Intel', icon: '🌍', roles: ['PRESIDENT'] },
    ];

    const visibleLinks = links.filter(l => l.roles.includes(user.role));

    return (
        <aside className="w-20 lg:w-64 bg-primary text-white min-h-screen flex flex-col shadow-xl z-20">
            <div className="p-6 flex items-center gap-3 border-b border-white/10">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-primary font-bold">Z</div>
                <span className="font-bold text-lg hidden lg:block tracking-wide">ZeroHunger</span>
            </div>

            <nav className="flex-1 px-4 space-y-2 mt-6">
                {visibleLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex items-center gap-4 px-3 py-3 rounded-lg transition-all duration-200 group
                ${isActive
                                    ? 'bg-accent/10 text-accent font-semibold'
                                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            <span className={`text-xl ${isActive ? 'text-accent' : 'text-white/70'}`}>{link.icon}</span>
                            <span className="hidden lg:block">{link.label}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-white/10 bg-primary">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary font-bold">
                        {user.name.charAt(0)}
                    </div>
                    <div className="hidden lg:block overflow-hidden">
                        <p className="text-sm font-medium truncate text-white">{user.name}</p>
                        <p className="text-xs text-accent/80 font-mono truncate uppercase">{user.role}</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
