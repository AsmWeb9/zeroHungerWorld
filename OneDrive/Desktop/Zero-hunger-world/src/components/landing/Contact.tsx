'use client';

import React from 'react';
import Section from './Section';
import { Mail, MapPin } from 'lucide-react';

export default function Contact() {
    return (
        <Section id="contact" className="bg-gray-50">
            <div className="text-center mb-16">
                <h2 className="text-[var(--color-primary)] font-bold uppercase tracking-widest text-sm mb-3">Get Involved</h2>
                <h3 className="text-4xl font-bold text-[#0d4659]">Join the Movement</h3>
            </div>

            <div className="max-w-6xl mx-auto bg-white rounded-[2rem] shadow-xl overflow-hidden grid lg:grid-cols-5 border border-gray-100">
                {/* Info (2 cols) */}
                <div className="lg:col-span-2 bg-[var(--color-primary)] p-12 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent)]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <div>
                        <h4 className="text-2xl font-bold mb-8">Contact Info</h4>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 p-2 bg-white/10 rounded-lg"><Mail className="w-5 h-5 text-[var(--color-accent)]" /></div>
                                <div>
                                    <p className="opacity-60 text-sm mb-1">Email us</p>
                                    <p className="font-semibold">hello@zerohunger.org</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 p-2 bg-white/10 rounded-lg"><MapPin className="w-5 h-5 text-[var(--color-accent)]" /></div>
                                <div>
                                    <p className="opacity-60 text-sm mb-1">Visit us</p>
                                    <p className="font-semibold">Global Virtual HQ</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <div className="text-sm opacity-60 mb-4">Follow our journey</div>
                        <div className="flex gap-3">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all flex items-center justify-center cursor-pointer">
                                    Let
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Form (3 cols) */}
                <div className="lg:col-span-3 p-12">
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">First Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 outline-none transition-all" placeholder="Jane" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">Last Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 outline-none transition-all" placeholder="Doe" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">Email Address</label>
                            <input type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 outline-none transition-all" placeholder="jane@example.com" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">Message</label>
                            <textarea className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 outline-none transition-all h-32 resize-none" placeholder="Tell us how you want to help..."></textarea>
                        </div>

                        <button type="submit" className="w-full py-4 rounded-xl bg-[var(--color-primary)] text-white font-bold hover:bg-[#155a70] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </Section>
    );
}
