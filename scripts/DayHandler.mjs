//Scripts for handling the creation of day objects

import { Day } from './Day.mjs';
import { renderDays } from './RenderDay.mjs';
import { getSeventyHours } from './Count.js';
import { renderSeventyCount } from './RenderCount.js';

const STORAGE_KEY = 'daysList';
let daysList = [];

const storedDays = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (storedDays && Array.isArray(storedDays)) {
    daysList = storedDays.map(Day.fromObject);
    renderDays(daysList);
}

document.getElementById('day-form').addEventListener('submit', (createDay) => {
    createDay.preventDefault();

    const date = document.getElementById('date').value;
    const hours = document.getElementById('hours').value.trim();

    try {
        const newDay = new Day(date, hours);
        daysList.push(newDay);
        renderDays(daysList);
    } catch (err) {
        alert('Error: ' + err.message);
    }
});

// Counts the total hours for the days listed
document.getElementById('count').addEventListener('click', () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(daysList));
    const total = getSeventyHours(daysList);
    renderSeventyCount(total)
    alert('Counting complete. See Count Information for details.');
    console.log('Days saved to localStorage');
    console.log(daysList);
});

// Clears list of days
document.getElementById('reset').addEventListener('click', () => {
    if (!confirm('Do you want to start a new count?')) return;

    daysList = [];
    localStorage.removeItem(STORAGE_KEY);
    renderDays(daysList);
    renderCountTotal('0:00');
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