import { addTimesAndStore, getStoredTime } from './Addition.js';
import { subtractTimesAndStore } from './Subtraction.js';

const form = document.getElementById('addition');
const form2 = document.getElementById('subtraction')
const resultDisplay = document.getElementById('addition-display');
const resultDisplay2 = document.getElementById('subtraction-display');

form.addEventListener('submit', (addUp) => {
    addUp.preventDefault();

    const time1 = document.getElementById('add-one').value.trim();
    const time2 = document.getElementById('add-two').value.trim();

    try {
        const result = addTimesAndStore(time1, time2);
        resultDisplay.textContent = `Total: ${result}`;
    } catch (err) {
        resultDisplay.textContent = `Error: ${err.message}`;
    }
});

form2.addEventListener('submit', (subtract) => {
    subtract.preventDefault();

    const sTime1 = document.getElementById('subtract-one').value.trim();
    const sTime2 = document.getElementById('subtract-two').value.trim();

    try {
        const result2 = subtractTimesAndStore(sTime1, sTime2);
        resultDisplay2.textContent = `Total: ${result2}`;
    } catch (err) {
        resultDisplay2.textContent = `Error: ${err.message}`;
    }
})

const stored = getStoredTime('addTime');
if (stored) {
    resultDisplay.textContent = `Total: ${stored}`;
}

const stored2 = getStoredTime('subtract');
if (stored2) {
    resultDisplay2.textContent = `Total: ${stored}`;
}