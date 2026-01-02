import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { COURSES } from '@/lib/mockData';
import AICard from '@/components/AICard';

export default function AcademyPage() {
    // Group courses by category for display
    const categories = Array.from(new Set(COURSES.map(c => c.category)));

    return (
        <div className="min-h-screen bg-muted font-sans">
            <Navbar />

            {/* Hero */}
            <header className="py-24 bg-primary text-white text-center px-6 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 left-0 w-full h-full bg-white/5 pointer-events-none"></div>
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>

                <div className="container mx-auto relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                        Open Knowledge Academy
                    </h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Access world-class training on sustainable agriculture, crisis management, and community leadership.
                        Powered by AI-driven curriculum paths.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/login" className="btn-accent px-8 py-3 text-lg shadow-lg shadow-accent/20">
                            Start Learning
                        </Link>
                        <button className="px-8 py-3 bg-white/10 text-white rounded-lg font-bold hover:bg-white/20 transition-all backdrop-blur-sm">
                            Browse Catalog
                        </button>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-6 py-16">

                {/* AI Picks / Featured */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="bg-primary/10 p-2 rounded-lg text-primary">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                        </div>
                        <h2 className="text-2xl font-bold text-primary">Trending Modules</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {COURSES.slice(0, 3).map((course, idx) => (
                            <AICard
                                key={course.id}
                                type="COURSE"
                                title={course.title}
                                subtitle={course.description}
                                score={idx === 0 ? 0.98 : undefined}
                                reason={idx === 0 ? "Top rated in your region" : "Essential skill"}
                                badge={course.category}
                            />
                        ))}
                    </div>
                </section>

                {/* All Courses by Category */}
                <section>
                    <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
                        <h2 className="text-2xl font-bold text-primary">Full Catalog</h2>
                    </div>

                    <div className="space-y-12">
                        {categories.map(category => (
                            <div key={category}>
                                <h3 className="text-lg font-bold text-text/70 mb-4 uppercase tracking-wider">{category}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {COURSES.filter(c => c.category === category).map(course => (
                                        <div key={course.id} className="bg-white p-5 rounded-xl border border-gray-100 hover:border-accent transition-all hover:shadow-lg group cursor-pointer flex flex-col h-full">
                                            <div className="flex justify-between items-start mb-4">
                                                <span className="px-2 py-1 rounded bg-muted text-primary text-xs font-bold uppercase">{course.duration}</span>
                                            </div>
                                            <h4 className="text-lg font-bold text-text mb-2 group-hover:text-primary transition-colors">{course.title}</h4>
                                            <p className="text-sm text-text/60 mb-6 flex-1">{course.description}</p>
                                            <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                                                <div className="flex gap-2 text-xs font-semibold text-gray-400">
                                                    {course.tags.slice(0, 2).map(t => <span key={t}>#{t}</span>)}
                                                </div>
                                                <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </main>

            {/* CTA */}
            <footer className="bg-primary text-white py-16 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-4">Ready to lead?</h2>
                    <p className="text-white/60 mb-8 max-w-lg mx-auto">Join thousands of volunteers making a measurable difference.</p>
                    <Link href="/login" className="btn-accent px-8 py-3 text-lg">
                        Create Account
                    </Link>
                </div>
            </footer>
        </div>
    );
}
