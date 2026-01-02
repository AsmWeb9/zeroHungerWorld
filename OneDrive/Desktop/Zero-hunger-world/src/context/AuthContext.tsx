'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole } from '@/types/auth';
import { useRouter } from 'next/navigation';

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (email: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const storedUser = localStorage.getItem('zh_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setIsLoading(false);
    }, []);

    const getRoleFromEmail = (email: string): UserRole => {
        const e = email.toLowerCase();
        if (e.includes('bureau') || e === 'admin@zerohunger.ma' || e === 'president@zerohunger.ma') {
            return 'BUREAU';
        }
        if (e.includes('lead') || e.includes('chef')) {
            return 'TEAM_LEAD';
        }
        return 'VOLUNTEER';
    };

    const login = async (email: string) => {
        setIsLoading(true);
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));

        const role = getRoleFromEmail(email);
        const name = email.split('@')[0].split('.').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');

        const mockUser: User = {
            id: Math.random().toString(36).substr(2, 9),
            name: name || 'User',
            email: email,
            role: role
        };

        localStorage.setItem('zh_user', JSON.stringify(mockUser));
        // Set cookies for middleware
        document.cookie = `zh_session=true; path=/; max-age=86400`;
        document.cookie = `zh_role=${role}; path=/; max-age=86400`;

        setUser(mockUser);
        setIsLoading(false);

        // Push to shared entry point or specific dashboard
        router.push('/dashboard/overview');
    };

    const logout = () => {
        localStorage.removeItem('zh_user');
        document.cookie = "zh_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "zh_role=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        setUser(null);
        router.push('/');
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
