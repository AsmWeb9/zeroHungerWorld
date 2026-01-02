import { User, Role } from '@/types';
import { USERS } from '@/lib/mockData';

// Simulating a database call
export const authenticateUser = async (email: string): Promise<User | null> => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const user = USERS.find((u) => u.email === email);
    return user || null;
};

export const getUserById = async (id: string): Promise<User | null> => {
    const user = USERS.find((u) => u.id === id);
    return user || null;
};

// Simple permission check
export const canAccessDashboard = (user: User, requiredRole: Role): boolean => {
    if (user.role === 'PRESIDENT') return true; // President accesses everything (usually)
    if (user.role === requiredRole) return true;
    return false;
};
