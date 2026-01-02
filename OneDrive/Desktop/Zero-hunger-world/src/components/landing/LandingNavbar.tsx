'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { Menu, X, LayoutDashboard, User as UserIcon, LogOut, Bell, Instagram } from 'lucide-react';

export default function LandingNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { user, isAuthenticated, logout } = useAuth();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Realisations', href: '#impact-dashboard' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Academy', href: '#academy' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50 py-3 shadow-md' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <img
                        src="/logo.png"
                        alt="Zero Hunger Logo"
                        className="w-12 h-12 rounded-full object-cover shadow-sm bg-white"
                    />
                    <span className={`font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-[var(--color-primary)]' : 'text-white'}`}>
                        Zero Hunger
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-all hover:-translate-y-0.5 ${scrolled ? 'text-gray-600 hover:text-[var(--color-primary)]' : 'text-white/80 hover:text-white'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="https://www.instagram.com/zerohungerworld/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-all hover:scale-110 ${scrolled ? 'text-gray-600 hover:text-[#E4405F]' : 'text-white/80 hover:text-white'}`}
                        aria-label="Instagram"
                    >
                        <Instagram className="w-5 h-5" />
                    </a>
                </div>

                {/* Desktop Auth Section */}
                <div className="hidden md:flex items-center gap-5">
                    {isAuthenticated ? (
                        <div className="flex items-center gap-3">
                            {/* Dashboard Link */}
                            <Link
                                href="/dashboard/overview"
                                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all active:scale-95 border-2 ${scrolled ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]' : 'bg-[#F2C830] text-[#134B5F] border-[#F2C830]'}`}
                            >
                                <LayoutDashboard className="w-4 h-4" />
                                Impact Hub
                            </Link>

                            {/* Notifications Mock */}
                            <button
                                className={`p-2.5 rounded-full transition-all relative border-2 ${scrolled ? 'text-gray-600 border-gray-100 hover:bg-gray-50' : 'text-white/80 border-white/20 hover:bg-white/10'}`}
                            >
                                <Bell className="w-4 h-4" />
                                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                            </button>

                            {/* Profile Logout */}
                            <button
                                onClick={logout}
                                title="Logout"
                                className={`p-2.5 rounded-full transition-all border-2 ${scrolled ? 'text-red-500 border-red-500/20 hover:bg-red-50' : 'text-white/80 border-white/20 hover:bg-white/10'}`}
                            >
                                <LogOut className="w-4 h-4" />
                            </button>
                        </div>
                    ) : (
                        <Link
                            href="/login"
                            className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all active:scale-95 border-2 ${scrolled ? 'text-[var(--color-primary)] border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white' : 'text-[#F2C830] border-[#F2C830] hover:bg-[#F2C830] hover:text-[#134B5F]'}`}
                        >
                            Sign In
                        </Link>
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={`md:hidden p-2 ${scrolled ? 'text-[var(--color-primary)]' : 'text-white'}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 md:hidden shadow-xl animate-in slide-in-from-top-10">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-gray-800 py-2 border-b border-gray-50"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="https://www.instagram.com/zerohungerworld/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-lg font-medium text-gray-800 py-3 border-b border-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <Instagram className="w-5 h-5 text-[#E4405F]" /> Instagram
                        </a>
                        <div className="pt-2 flex flex-col gap-3">
                            {isAuthenticated ? (
                                <>
                                    <Link
                                        href={getDashboardLink()}
                                        className="w-full bg-[var(--color-primary)] text-white text-center py-4 rounded-xl font-bold flex items-center justify-center gap-2"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <LayoutDashboard className="w-5 h-5" /> My Dashboard
                                    </Link>
                                    <button
                                        onClick={() => { logout(); setMobileMenuOpen(false); }}
                                        className="w-full border-2 border-red-500 text-red-500 py-4 rounded-xl font-bold flex items-center justify-center gap-2"
                                    >
                                        <LogOut className="w-5 h-5" /> Logout
                                    </button>
                                </>
                            ) : (
                                <Link
                                    href="/login"
                                    className="w-full bg-[var(--color-primary)] text-white text-center py-4 rounded-xl font-bold"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Sign In
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
