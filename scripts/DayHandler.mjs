//Scripts for handling the creation of day objects

import { Day } from './Day.mjs';
import { renderDays } from './RenderDay.mjs';
import { getTotalHours } from './Count.js';
import { renderCountTotal } from './RenderCount.js';

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
        console.log('Should only run once')
    } catch (err) {
        alert('Error: ' + err.message);
    }
});

document.getElementById('count').addEventListener('click', () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(daysList));
    const total = getTotalHours(daysList);
    renderCountTotal(total)
    alert('Counting hours...');
    console.log('Days saved to localStorage');
    console.log(daysList);
});

document.getElementById('reset').addEventListener('click', () => {
    if (!confirm('Do you want to start a new count?')) return;

    daysList = [];
    localStorage.removeItem(STORAGE_KEY);
    renderDays(daysList);
    renderCountTotal('0:00');
})