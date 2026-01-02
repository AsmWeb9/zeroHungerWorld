"use client";
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { getEventsByZone } from '@/services/events';
import { Event } from '@/types';

export default function LeaderDashboard() {
    const { user } = useAuth();
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        if (user && user.zoneId) {
            getEventsByZone(user.zoneId).then(setEvents);
        }
    }, [user]);

    if (!user || user.role === 'VOLUNTEER') return <div className="text-red-500">Access Denied</div>;

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Team Leader Zone: {user.zoneId || 'Unknown'}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded shadow">
                    <div className="text-gray-500 mb-1">Volunteers</div>
                    <div className="text-3xl font-bold">12</div>
                </div>
                <div className="bg-white p-6 rounded shadow">
                    <div className="text-gray-500 mb-1">Events Managed</div>
                    <div className="text-3xl font-bold">{events.length}</div>
                </div>
                <div className="bg-white p-6 rounded shadow">
                    <div className="text-gray-500 mb-1">Impact Score</div>
                    <div className="text-3xl font-bold text-green-600">8.5/10</div>
                </div>
            </div>

            <section>
                <h3 className="text-xl font-semibold mb-4">Upcoming Zone Events</h3>
                {events.length === 0 ? <p>No events scheduled.</p> : (
                    <div className="grid gap-4">
                        {events.map(ev => (
                            <div key={ev.id} className="bg-white p-4 rounded shadow flex justify-between items-center">
                                <div>
                                    <h4 className="font-bold">{ev.title}</h4>
                                    <p className="text-sm text-gray-500">{new Date(ev.date).toLocaleDateString()} - {ev.location}</p>
                                </div>
                                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{ev.type}</span>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}
