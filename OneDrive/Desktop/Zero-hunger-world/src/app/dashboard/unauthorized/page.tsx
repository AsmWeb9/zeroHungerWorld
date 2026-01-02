'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldAlert, ArrowLeft } from 'lucide-react';

export default function UnauthorizedPage() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
            <div className="w-20 h-20 bg-red-50 rounded-3xl flex items-center justify-center mb-6">
                <ShieldAlert className="w-10 h-10 text-red-600" />
            </div>
            <h1 className="text-3xl font-black text-[#134B5F] mb-4">Access Denied</h1>
            <p className="text-gray-500 max-w-md mb-8">
                You don't have the necessary permissions to view this section of the Impact Hub.
                Please return to your assigned dashboard.
            </p>
            <Link
                href="/dashboard/volunteer"
                className="flex items-center gap-2 bg-[#134B5F] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#134B5F]/90 transition-all shadow-lg shadow-[#134B5F]/20"
            >
                <ArrowLeft className="w-5 h-5" /> Back to My Dashboard
            </Link>
        </div>
    );
}
