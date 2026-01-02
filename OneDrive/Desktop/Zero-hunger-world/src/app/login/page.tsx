'use client';

import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { ShieldCheck, Mail, Lock, Loader2, Info } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsSubmitting(true);
        await login(email);
        // AuthContext handles redirection
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="max-w-md w-full">
                {/* Branding */}
                <div className="text-center mb-10">
                    <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
                        <div className="w-12 h-12 rounded-2xl bg-[#F2C830] flex items-center justify-center font-bold text-[#134B5F] group-hover:rotate-12 transition-transform">
                            ZH
                        </div>
                        <span className="font-bold text-3xl text-[#134B5F] tracking-tight">Zero Hunger</span>
                    </Link>
                    <h1 className="text-2xl font-bold text-[#134B5F]">Impact Hub Login</h1>
                    <p className="text-gray-500 mt-2">Enter your credentials to access your workspace</p>
                </div>

                {/* Login Form */}
                <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#134B5F] transition-colors" />
                                <input
                                    type="email"
                                    required
                                    placeholder="yourname@domain.ma"
                                    className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-50 focus:border-[#134B5F] focus:bg-white transition-all outline-none bg-gray-50"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Password</label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#134B5F] transition-colors" />
                                <input
                                    type="password"
                                    required
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-50 focus:border-[#134B5F] focus:bg-white transition-all outline-none bg-gray-50"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 bg-[#134B5F] text-white rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-[#134B5F]/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Authenticating...
                                </>
                            ) : (
                                'Sign In'
                            )}
                        </button>
                    </form>

                    {/* Quick Access Info */}
                    <div className="mt-8 p-4 bg-blue-50 rounded-2xl border border-blue-100 flex gap-3 text-sm text-blue-800">
                        <Info className="w-5 h-5 shrink-0 mt-0.5" />
                        <div className="space-y-1">
                            <p className="font-bold">Mock Credentials:</p>
                            <ul className="list-disc list-inside opacity-80 decoration-blue-200">
                                <li><strong>Bureau</strong>: admin@zerohunger.ma</li>
                                <li><strong>Lead</strong>: lead@domain.ma</li>
                                <li><strong>Volunteer</strong>: any@email.com</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <Link href="/" className="text-gray-400 hover:text-[#134B5F] font-medium transition-colors">
                        Back to Landing Page
                    </Link>
                </div>
            </div>
        </div>
    );
}
