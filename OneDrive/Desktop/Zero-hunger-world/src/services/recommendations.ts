import { Course, Recommendation, RoleRecommendation, User } from '@/types';
import { COURSES, INTERACTIONS, USERS } from '@/lib/mockData';

// Helper: Calculate cosine similarity (simplified for tags check)
const calculateSimilarity = (itemTags: string[], userTags: string[]) => {
    const intersection = itemTags.filter(t => userTags.includes(t)).length;
    const union = new Set([...itemTags, ...userTags]).size;
    return union === 0 ? 0 : intersection / union;
};

export const getRecommendedCourses = async (userId: string): Promise<Recommendation[]> => {
    const userInteractions = INTERACTIONS.filter(i => i.userId === userId && i.entityType === 'COURSE');
    const viewedCourseIds = new Set(userInteractions.map(i => i.entityId));

    // 1. Build User Profile (Tags based on viewed courses)
    const userTags = new Set<string>();
    userInteractions.forEach(i => {
        const course = COURSES.find(c => c.id === i.entityId);
        if (course) {
            course.tags.forEach(t => userTags.add(t));
        }
    });
    const userTagArray = Array.from(userTags);

    const recommendations: Recommendation[] = [];

    // 2. Content-Based Filtering
    // Recommend courses with similar tags to what user watched
    COURSES.forEach(course => {
        if (!viewedCourseIds.has(course.id)) {
            const similarity = calculateSimilarity(course.tags, userTagArray);
            if (similarity > 0.1) {
                recommendations.push({
                    id: `rec-cb-${course.id}`,
                    item: course,
                    type: 'COURSE',
                    score: similarity,
                    reason: `Because you are interested in ${course.tags.filter(t => userTags.has(t)).join(', ')}`
                });
            }
        }
    });

    // 3. Collaborative Filtering (Item-based - Simplified)
    // "Users who liked what you liked also liked..."
    // Find other users who viewed the same courses
    const similarUsers = new Set<string>();
    INTERACTIONS.filter(i => viewedCourseIds.has(i.entityId) && i.userId !== userId).forEach(i => similarUsers.add(i.userId));

    similarUsers.forEach(otherUserId => {
        const otherUserInteractions = INTERACTIONS.filter(i => i.userId === otherUserId && i.entityType === 'COURSE');
        otherUserInteractions.forEach(i => {
            if (!viewedCourseIds.has(i.entityId)) {
                const course = COURSES.find(c => c.id === i.entityId);
                if (course) {
                    // Avoiding duplicates if already added by Content-Based (or boost score)
                    const existing = recommendations.find(r => r.type === 'COURSE' && (r.item as Course).id === course.id);
                    if (!existing) {
                        recommendations.push({
                            id: `rec-cf-${course.id}`,
                            item: course,
                            type: 'COURSE',
                            score: 0.5, // Arbitrary score for CF
                            reason: 'Popular among members with similar interests'
                        });
                    }
                }
            }
        });
    });

    return recommendations.sort((a, b) => b.score - a.score).slice(0, 5);
};

export const getRoleRecommendations = async (userId: string): Promise<Recommendation[]> => {
    // Logic: If user has completed Leadership courses, recommend Team Leader role
    const userInteractions = INTERACTIONS.filter(i => i.userId === userId && i.entityType === 'COURSE' && i.type === 'COMPLETE');
    const completedCourses = userInteractions.map(i => COURSES.find(c => c.id === i.entityId));

    const hasLeadership = completedCourses.some(c => c?.tags.includes('leadership'));

    if (hasLeadership) {
        return [{
            id: 'rec-role-leader',
            item: { role: 'LEADER', description: 'Become a Team Leader to manage local events.' } as RoleRecommendation,
            type: 'ROLE',
            score: 0.9,
            reason: 'You have completed leadership training.'
        }];
    }
    return [];
};
