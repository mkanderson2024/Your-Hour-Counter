//Scripts for handling the creation of day objects

import { addDay } from './DayManager.mjs';
import { Day } from './Day.mjs';
import { renderDays } from './RenderDay.mjs';
import { getSixtyHours, getSeventyHours } from './HourCounter.js';
import { renderCount } from './RenderCount.js';


const STORAGE_KEY = 'daysList';
let daysList = [];

//Renders exsisting days list in case of page not working
const storedDays = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (storedDays && Array.isArray(storedDays)) {
    daysList = storedDays.map(Day.fromObject);
    renderDays(daysList);
}

// Adds day to to list of days to count
document.getElementById('day-form').addEventListener('submit', (createDay) => {
    createDay.preventDefault();

    const date = document.getElementById('date').value;
    const hours = document.getElementById('hours').value.trim();

    const result = addDay(daysList, date, hours);
    if (!result.success) {
        alert('Error: ' + result.error);
    }
});

// Counts the total hours for the days listed for code limitations: 60, 70 hour rules
document.getElementById('count').addEventListener('click', () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(daysList));
    const sixtyHoursTotal = getSixtyHours(daysList);
    const seventyHoursTotal = getSeventyHours(daysList);
    renderCount(sixtyHoursTotal, 'count-sixty')
    renderCount(seventyHoursTotal, 'count-seventy')
    alert('Counting complete. See Count Information for details.');
    console.log('Days saved to localStorage');
    console.log(daysList);
});

// Clears list of days
document.getElementById('reset').addEventListener('click', () => {
    if (!confirm('Do you want to start a new count?')) return;

    daysList = [];
    localStorage.removeItem(STORAGE_KEY);
    const sixtyHoursReset = getSixtyHours(daysList);
    const seventyHoursReset = getSeventyHours(daysList);
    renderDays(daysList);
    renderCount(sixtyHoursReset, 'count-sixty');
    renderCount(seventyHoursReset, 'count-seventy');
})

// Removes the last day from the list
document.getElementById('remove').addEventListener('click', () => {
    if (daysList.length === 0) {
        alert('No days to remove.');
        return;
    }

    const removed = daysList.pop();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(daysList));
    renderDays(daysList);
});