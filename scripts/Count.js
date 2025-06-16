//Handles counting of the total work time
import { formatDate } from "./DateUtilities.js";

export function getSeventyHours(daysList) {
    let totalMinutes = 0;
    let dates = [];

    daysList.forEach(day => {
        const [hours, minutes] = day.duration.split(':').map(Number);
        totalMinutes += hours * 60 + minutes;
        if (totalMinutes > 4200) {
            const formattedDate = formatDate(day.date);
            dates.push(formattedDate)
            console.log('Date over 70 Hours:', day.date)

        }
    });
    console.log(dates)
    const totalHours = Math.floor(totalMinutes / 60);
    const remainingMinutes = totalMinutes % 60;
    if (totalMinutes > 4200) {
        console.log(dates)
        const combined = dates.join(', ')
        return `${totalHours}:${String(remainingMinutes).padStart(2, '0')}. Dates where hours exeed 70 are: ${combined}.`
    } else {
        return `${totalHours}:${String(remainingMinutes).padStart(2, '0')}. No dates where hours exceed 70.`
    }
}