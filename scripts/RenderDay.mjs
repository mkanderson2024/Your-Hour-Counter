//Handles rendering the days with thier dates and corripsonding duration of work time
import { formatDate } from './DateUtilities.js';

export function renderDays(daysList) {
    const daysOutput = document.getElementById('daysDisplay');
    daysOutput.innerHTML = '';

    if (daysList.length === 0) {
        daysOutput.textContent = 'No days to count yet. Add days to begin a count.'
        return;
    }

    const list = document.createElement('ul');
    list.className = 'day-list';

    //Format for the day
    daysList.forEach(day => {
        const item = document.createElement('li');
        const formattedDate = formatDate(day.date);

        item.textContent = `Date: ${formattedDate} Hours: ${day.duration}`;
        item.className = 'day-item';
        list.appendChild(item);


    });

    daysOutput.appendChild(list)
}