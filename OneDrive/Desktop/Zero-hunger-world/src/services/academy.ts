import { Course } from '@/types';
import { COURSES } from '@/lib/mockData';

export const getAllCourses = async (): Promise<Course[]> => {
    return COURSES;
};

export const getCourseById = async (id: string): Promise<Course | undefined> => {
    return COURSES.find((c) => c.id === id);
};

export const getCoursesByCategory = async (category: string): Promise<Course[]> => {
    return COURSES.filter((c) => c.category === category);
};
