//Scripts for handling the creation of day objects

import { Day } from './Day.mjs';

const STORAGE_KEY = 'daysList';

export function addDay(date, duration) {
    const newDay = new Day(date, duration);
    const days = getDays();
    days.push(newDay);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(days));
}

export function getDays() {
    const dayData = localStorage.getItem(STORAGE_KEY);
    const rawList = dayData ? JSON.parse(data) : [];
    return rawList.map(Day.fromObject);
}

export function clearDays() {
    localStorage.removeItem(STORAGE_KEY)
};

