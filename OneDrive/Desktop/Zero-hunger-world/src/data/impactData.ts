export type ActivityType = 'meal' | 'housing' | 'bath' | 'project' | 'medical';

export interface Activity {
    type: ActivityType;
    title: string;
    description: string;
    value: number;
}

export interface MonthData {
    id: number; // 0-11
    name: string;
    theme?: string; // Optional theme slogan
    activities: Activity[];
}

export interface YearData {
    year: number;
    months: MonthData[];
}

// Helper to create specific activity objects
const createActivity = (type: ActivityType, value: number): Activity => {
    switch (type) {
        case 'meal': return { type, title: 'Meals Distributed', description: 'Nutritious meals served to those in need', value };
        case 'housing': return { type, title: 'Housing Support', description: 'Nights of shelter provided', value };
        case 'bath': return { type, title: 'Hygiene Services', description: 'Showers and hygiene kits distributed', value };
        case 'project': return { type, title: 'Micro-Projects', description: 'Small business initiatives funded', value };
        case 'medical': return { type, title: 'Medical Aid', description: 'Consultations and medication provided', value };
    }
};

// Initial data population helpers
const monthsList = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const generateEmptyMonths = (): MonthData[] => {
    return monthsList.map((name, index) => ({
        id: index,
        name,
        activities: []
    }));
};

const populateYear = (year: number, data: Partial<Record<string, { theme?: string, meals?: number, housing?: number, bath?: number, projects?: number, medical?: number }>>): YearData => {
    const months = generateEmptyMonths();

    Object.entries(data).forEach(([monthName, stats]) => {
        const monthIndex = monthsList.findIndex(m => m.startsWith(monthName)); // Match "Jan" to "January"
        if (monthIndex !== -1 && stats) {
            months[monthIndex].theme = stats.theme;
            const activities: Activity[] = [];
            if (stats.meals) activities.push(createActivity('meal', stats.meals));
            if (stats.housing) activities.push(createActivity('housing', stats.housing));
            if (stats.bath) activities.push(createActivity('bath', stats.bath));
            if (stats.projects) activities.push(createActivity('project', stats.projects));
            if (stats.medical) activities.push(createActivity('medical', stats.medical));

            months[monthIndex].activities = activities;
        }
    });

    return { year, months };
};

// DATA SOURCE - EXACT NUMBERS PRESERVED
export const impactData: YearData[] = [
    populateYear(2023, {
        "Nov": { meals: 2400, housing: 8, bath: 15, projects: 2, medical: 10, theme: "Winter Warmth" },
        "Dec": { meals: 3100, housing: 12, bath: 20, projects: 4, medical: 15, theme: "Holiday Care" }
    }),
    populateYear(2024, {
        "Jan": { meals: 3500, housing: 10, bath: 25, projects: 3, medical: 20, theme: "New Beginnings" },
        "Feb": { meals: 3800, housing: 8, bath: 28, projects: 2, medical: 18 },
        "Mar": { meals: 4200, housing: 15, bath: 30, projects: 5, medical: 25, theme: "Ramadan Spirit" },
        "Apr": { meals: 5100, housing: 12, bath: 22, projects: 4, medical: 30, theme: "Eid Joy" },
        "May": { meals: 4600, housing: 9, bath: 26, projects: 2, medical: 15 },
        "Jun": { meals: 4300, housing: 11, bath: 24, projects: 3, medical: 12, theme: "Summer Aid" }
    }),
    populateYear(2025, {
        "Jan": { meals: 5500, housing: 14, bath: 35, projects: 6, medical: 40, theme: "Strong Start" },
        "Feb": { meals: 6900, housing: 18, bath: 40, projects: 5, medical: 35, theme: "Record High" }
    })
];
