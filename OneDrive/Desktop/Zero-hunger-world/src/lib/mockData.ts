import { Course, Event, User, Interaction } from '@/types';

export const USERS: User[] = [
    { id: 'u1', name: 'Alice Member', email: 'alice@example.com', role: 'MEMBER' },
    { id: 'u2', name: 'Bob Leader', email: 'bob@example.com', role: 'LEADER', zoneId: 'zone-1' },
    { id: 'u3', name: 'Charlie President', email: 'charlie@example.com', role: 'PRESIDENT' },
];

export const COURSES: Course[] = [
    {
        id: 'c1',
        title: 'Introduction to Zero Hunger',
        description: 'Learn the basics of our mission and how we impact the world.',
        category: 'Onboarding',
        tags: ['mission', 'basics'],
        duration: '30 min',
        thumbnail: '/images/course1.jpg'
    },
    {
        id: 'c2',
        title: 'Sustainable Farming 101',
        description: 'Techniques for sustainable agriculture in arid regions.',
        category: 'Agriculture',
        tags: ['farming', 'sustainability', 'technical'],
        duration: '2 hours',
        thumbnail: '/images/course2.jpg'
    },
    {
        id: 'c3',
        title: 'Community Leadership',
        description: 'How to lead local teams and organize food drives.',
        category: 'Leadership',
        tags: ['leadership', 'soft-skills'],
        duration: '1.5 hours',
        thumbnail: '/images/course3.jpg'
    },
    {
        id: 'c4',
        title: 'Crisis Management',
        description: 'Handling distribution during emergency situations.',
        category: 'Operations',
        tags: ['crisis', 'operations'],
        duration: '45 min',
        thumbnail: '/images/course4.jpg'
    }
];

export const EVENTS: Event[] = [
    {
        id: 'e1',
        title: 'Local Food Drive - Zone 1',
        date: '2023-11-15T09:00:00Z',
        location: 'Central Park',
        description: 'Distributing food packages to registered families.',
        type: 'FIELD_MISSION',
        zoneId: 'zone-1'
    },
    {
        id: 'e2',
        title: 'Global Strategy Webinar',
        date: '2023-12-01T14:00:00Z',
        location: 'Zoom',
        description: 'Quarterly strategy meeting with the President.',
        type: 'VIRTUAL'
    },
    {
        id: 'e3',
        title: 'Workshop: Urban Gardening',
        date: '2023-11-20T10:00:00Z',
        location: 'Community Center',
        description: 'Practical workshop on setting up urban gardens.',
        type: 'WORKSHOP',
        zoneId: 'zone-2'
    }
];

export const INTERACTIONS: Interaction[] = [
    { id: 'i1', userId: 'u1', entityId: 'c2', entityType: 'COURSE', type: 'VIEW', timestamp: '2023-11-01' },
    { id: 'i2', userId: 'u1', entityId: 'c2', entityType: 'COURSE', type: 'COMPLETE', timestamp: '2023-11-02' },
    { id: 'i3', userId: 'u2', entityId: 'c3', entityType: 'COURSE', type: 'VIEW', timestamp: '2023-11-01' },
];
