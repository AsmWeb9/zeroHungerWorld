export type UserRole = 'BUREAU' | 'TEAM_LEAD' | 'VOLUNTEER';

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    avatar?: string;
    zoneId?: string;
}

export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
}
