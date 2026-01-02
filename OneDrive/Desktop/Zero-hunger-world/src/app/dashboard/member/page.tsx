"use client";
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { getRecommendedCourses } from '@/services/recommendations';
import { getAllCourses } from '@/services/academy';
import { Course, Recommendation } from '@/types';
import AICard from '@/components/AICard';

export default function MemberDashboard() {
    const { user } = useAuth();
    const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        if (user) {
            getRecommendedCourses(user.id).then(setRecommendations);
            getAllCourses().then(setCourses);
        }
    }, [user]);

    if (!user) return null;

    return (
        <div className="space-y-10">
            <header className="flex justify-between items-end border-b border-gray-200 pb-6">
                <div>
                    <h1 className="text-3xl font-bold text-primary">Intelligence Feed</h1>
                    <p className="text-text/60 mt-2">Personalized action items for {user.name}.</p>
                </div>
                <div className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold text-text flex items-center gap-2 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                    Live Connection
                </div>
            </header>

            {/* Feed Section */}
            <section>
                <h2 className="text-xl font-bold text-text mb-6 flex items-center gap-2">
                    <span className="text-accent">★</span> Recommended for You
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recommendations.length > 0 ? recommendations.map((rec) => {
                        const item = rec.item as any;
                        return (
                            <AICard
                                key={rec.id}
                                type={rec.type}
                                title={item.title || item.role}
                                subtitle={item.description}
                                reason={rec.reason}
                                score={rec.score}
                            />
                        );
                    }) : (
                        <div className="col-span-full p-12 text-center bg-white rounded-xl border border-dashed border-gray-300">
                            <p className="text-text/50">Awaiting behavioral data...</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Academy Feed */}
            <section>
                <h2 className="text-xl font-bold text-text mb-6">Academy & Trending</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {courses.slice(0, 4).map(course => (
                        <div key={course.id} className="bg-white p-5 rounded-xl border border-gray-100 hover:border-accent transition-all hover:shadow-md cursor-pointer flex gap-4">
                            <div className="w-20 h-20 bg-muted rounded-lg flex-shrink-0 flex items-center justify-center text-primary/20">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361v1.17a11.115 11.115 0 01-.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4.6z"></path></svg>
                            </div>
                            <div>
                                <span className="text-xs font-bold text-primary bg-primary/5 px-2 py-1 rounded inline-block mb-2">{course.category}</span>
                                <h4 className="font-bold text-text group-hover:text-primary transition-colors">{course.title}</h4>
                                <p className="text-xs text-text/60 mt-1 line-clamp-2">{course.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
