export type Role = 'PUBLIC' | 'MEMBER' | 'LEADER' | 'PRESIDENT';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
  zoneId?: string; // For Team Leaders to identify their zone
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  tags: string[];
  duration: string; // e.g., "2 hours"
}

export interface Event {
  id: string;
  title: string;
  date: string; // ISO date string
  location: string;
  description: string;
  type: 'WORKSHOP' | 'VIRTUAL' | 'FIELD_MISSION';
  zoneId?: string;
}

export interface Interaction {
  id: string;
  userId: string;
  entityId: string; // Course ID or Event ID
  entityType: 'COURSE' | 'EVENT';
  type: 'VIEW' | 'COMPLETE' | 'SIGNUP' | 'LIKE';
  timestamp: string;
  score?: number; // Quiz score if applicable
}

export interface AnonymizedStat {
  label: string;
  value: number;
  change?: number; // % change
}

export interface Recommendation {
  id: string;
  item: Course | Event | RoleRecommendation;
  reason: string;
  score: number; // Relevance score
  type: 'COURSE' | 'EVENT' | 'ROLE';
}

export interface RoleRecommendation {
  role: Role;
  description: string;
}
