"use client";
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { getRoleRecommendations } from '@/services/recommendations';
import { Recommendation, RoleRecommendation } from '@/types';

export default function PresidentDashboard() {
    const { user } = useAuth();
    const [roleRecs, setRoleRecs] = useState<Recommendation[]>([]);

    useEffect(() => {
        if (user) {
            // In a real app, we'd fetch candidates for role upgrades. 
            // Here we just check for the current user for demo purposes, 
            // or we could mock fetching a list of members eligible for upgrades.
            getRoleRecommendations(user.id).then(setRoleRecs);
        }
    }, [user]);

    if (!user || user.role !== 'BUREAU') return <div className="text-red-500">Access Denied</div>;

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Global Overview</h2>

            {/* Analytics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded shadow border-t-4 border-indigo-500">
                    <div className="text-gray-500 mb-1">Total Members</div>
                    <div className="text-3xl font-bold">1,240</div>
                </div>
                <div className="bg-white p-6 rounded shadow border-t-4 border-indigo-500">
                    <div className="text-gray-500 mb-1">Active Zones</div>
                    <div className="text-3xl font-bold">34</div>
                </div>
                <div className="bg-white p-6 rounded shadow border-t-4 border-indigo-500">
                    <div className="text-gray-500 mb-1">Total Events</div>
                    <div className="text-3xl font-bold">156</div>
                </div>
                <div className="bg-white p-6 rounded shadow border-t-4 border-indigo-500">
                    <div className="text-gray-500 mb-1">Impact (Global)</div>
                    <div className="text-3xl font-bold text-green-600">9.2</div>
                    <span className="text-xs text-green-600">▲ 2.4% vs last month</span>
                </div>
            </div>

            {/* AI Role Insights */}
            <section className="bg-white p-6 rounded shadow mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="mr-2">🧠</span> AI Strategic Insights
                </h3>
                <p className="text-gray-600 mb-4">
                    The system analyzes member activity to propose role upgrades and optimized zone allocations.
                </p>

                <div className="space-y-4">
                    <div className="border border-green-200 bg-green-50 p-4 rounded">
                        <h4 className="font-bold text-green-800">Role Upgrade Recommendation</h4>
                        <p className="text-sm">Member <strong>Alice Member</strong> has completed "Community Leadership" and organized 2 informal events.</p>
                        <div className="mt-2 text-sm italic text-gray-600">
                            Why: High engagement score (0.9) and relevant skill acquisition.
                        </div>
                        <button className="mt-3 bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">Approves Promotion</button>
                    </div>
                </div>
            </section>

            {/* Charts Stub */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded shadow h-64 flex items-center justify-center bg-gray-50 border border-dashed">
                    [Member Growth Chart Placeholder]
                </div>
                <div className="bg-white p-6 rounded shadow h-64 flex items-center justify-center bg-gray-50 border border-dashed">
                    [Event Distribution Map Placeholder]
                </div>
            </section>
        </div>
    );
}
