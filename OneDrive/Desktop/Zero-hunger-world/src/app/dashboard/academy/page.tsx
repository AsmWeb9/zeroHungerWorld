'use client';

import React from 'react';
import {
    BookOpen,
    PlayCircle,
    CheckCircle2,
    Clock,
    Trophy,
    Search,
    Filter,
    ChevronRight,
    ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

export default function AcademyPage() {
    const courses = [
        { title: 'The Psychology of Homelessness', lessons: 8, progress: 100, category: 'Fundamentals', color: 'bg-green-50 text-green-600' },
        { title: 'Comment Devenir Chef d’équipe ?', lessons: 5, progress: 0, category: 'Leadership', color: 'bg-purple-50 text-purple-600', slug: 'become-team-lead' },
        { title: 'Social Investment Process', lessons: 5, progress: 0, category: 'Strategy', color: 'bg-yellow-50 text-yellow-600', slug: 'social-investment' },
        { title: 'Entrepreneurial Reintegration', lessons: 12, progress: 65, category: 'Strategy', color: 'bg-blue-50 text-blue-600' },
        { title: 'Field Action Safety Protocols', lessons: 4, progress: 20, category: 'Operations', color: 'bg-red-50 text-red-600' },
        { title: 'Community Leadership', lessons: 10, progress: 0, category: 'Leadership', color: 'bg-purple-50 text-purple-600' },
    ];

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
            {/* Header */}
            <div className="flex justify-between items-end gap-10">
                <div>
                    <h1 className="text-4xl font-black text-[#134B5F] mb-2">Impact Academy</h1>
                    <p className="text-gray-500 text-lg">Master the skills needed to create sustainable change.</p>
                </div>
                <div className="flex gap-4 mb-1">
                    <div className="bg-white px-6 py-4 rounded-3xl border border-gray-100 flex items-center gap-3 shadow-sm">
                        <Trophy className="w-6 h-6 text-[#F2C830]" />
                        <div>
                            <p className="text-[10px] font-black uppercase text-gray-400">Total Points</p>
                            <p className="font-black text-[#134B5F]">2,450 XP</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Course Navigation */}
            <div className="flex flex-wrap items-center gap-4 py-2">
                <button className="px-6 py-3 bg-[#134B5F] text-white rounded-2xl font-bold flex items-center gap-2">
                    <BookOpen className="w-4 h-4" /> All Courses
                </button>
                <button className="px-6 py-3 bg-white text-gray-500 rounded-2xl font-bold border border-gray-100 hover:border-[#134B5F]/20 transition-all">
                    In Progress
                </button>
                <button className="px-6 py-3 bg-white text-gray-500 rounded-2xl font-bold border border-gray-100 hover:border-[#134B5F]/20 transition-all">
                    Certifications
                </button>
                <div className="flex-1"></div>
                <div className="relative">
                    <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <select className="pl-11 pr-8 py-3 bg-white border border-gray-100 rounded-2xl font-bold text-gray-500 outline-none appearance-none cursor-pointer">
                        <option>Sort by: Newest</option>
                        <option>Sort by: Difficulty</option>
                    </select>
                </div>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course, i) => (
                    <Link
                        href={course.slug ? `/dashboard/academy/${course.slug}` : '#'}
                        key={i}
                        className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden group hover:shadow-2xl hover:shadow-[#134B5F]/10 transition-all cursor-pointer block"
                    >
                        <div className="h-48 bg-gray-100 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                            <div className={`absolute top-6 left-6 px-3 py-1 rounded-full text-[10px] font-black uppercase ${course.color} bg-opacity-90 backdrop-blur-sm`}>
                                {course.category}
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-sm">
                                <PlayCircle className="w-16 h-16 text-white" />
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold text-[#134B5F] mb-4 group-hover:text-[#F2C830] transition-colors">{course.title}</h3>

                            <div className="flex items-center gap-6 text-sm text-gray-400 font-medium mb-6">
                                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {course.lessons * 20}m</span>
                                <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4" /> {course.lessons} Lessons</span>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-xs font-black uppercase">
                                    <span className="text-gray-400">Progress</span>
                                    <span className="text-[#134B5F]">{course.progress}%</span>
                                </div>
                                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-[#134B5F] transition-all duration-1000"
                                        style={{ width: `${course.progress}%` }}
                                    ></div>
                                </div>
                            </div>

                            <div className="w-full mt-8 py-4 rounded-2xl bg-gray-50 text-[#134B5F] font-black group-hover:bg-[#F2C830] group-hover:shadow-lg transition-all flex items-center justify-center gap-2">
                                {course.progress === 100 ? (
                                    <>Review Course <CheckCircle2 className="w-5 h-5" /></>
                                ) : course.progress > 0 ? (
                                    <>Continue Learning <PlayCircle className="w-5 h-5" /></>
                                ) : (
                                    <>Start Module <BookOpen className="w-5 h-5" /></>
                                )}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
