// Counts hours based upon the limits in the code book

import { formatDate } from "./DateUtilities.js";

export function verifyHours(daysList, limitation) {
    const limitationInMinutes = limitation * 60;
    let totalMinutes = 0;
    let exeedingDates = [];

    daysList.forEach(day => {
        const [hours, minutes] = day.duration.split(':').map(Number);
        totalMinutes += hours * 60 + minutes;

        if (totalMinutes > limitationInMinutes && exeedingDates.length === 0) {
            const formattedDate = formatDate(day.date);
            exeedingDates.push(formattedDate);
            console.log(`Date over ${limitation} Hours:`, day.date);
        }
    });

    const totalHours = Math.floor(totalMinutes / 60);
    const remainingMinutes = totalMinutes % 60;
    const formattedTotal = `${totalHours}:${String(remainingMinutes).padStart(2, '0')}`;

    if (thresholdDates.length > 0) {
        return `${formattedTotal}. Dates where ${limitation} hours were exceeded: ${thresholdDates.join(', ')}.`;
    } else {
        return `${formattedTotal}. No dates where hours exceed ${limitation}.`;
    }
}