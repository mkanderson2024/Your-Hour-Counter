import { Day } from './Day.mjs';
import { renderDays } from './RenderDay.mjs';

export function addDay(daysList, date, hours) {
    try {
        const newDay = new Day(date, hours);
        daysList.push(newDay);
        renderDays(daysList);
        return { success: true, daysList };
    } catch (err) {
        return { success: false, error: err.message };
    }
}