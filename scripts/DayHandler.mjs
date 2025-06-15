//Scripts for handling the creation of day objects

import { Day } from './Day.mjs';
import { renderDays } from './RenderDay.mjs';

const STORAGE_KEY = 'daysList';
let daysList = [];

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
    alert('Counting hours...');
    console.log('Days saved to localStorage');
    console.log(daysList);
});