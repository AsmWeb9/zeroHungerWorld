import { Event } from '@/types';
import { EVENTS } from '@/lib/mockData';

export const getAllEvents = async (): Promise<Event[]> => {
    return EVENTS;
};

export const getEventsByZone = async (zoneId: string): Promise<Event[]> => {
    return EVENTS.filter((e) => e.zoneId === zoneId);
};
