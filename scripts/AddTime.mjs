import { addTimesAndStore, getStoredTime } from './Addition.js';

const form = document.getElementById('addition')
const resultDisplay = document.getElementById('addition-display')

resultDisplay.addEventListener('submit', (addUp) => {
    addUp.preventDefault();
    const time1 = document.getElementById('add-one').value.trim();
    const time2 = document.getElementById('add-two').value.trim();

    try {
        const result = addTimesAndStore(time1, time2);
        result.Display.textContent = `Total: ${result}`;
    } catch (err) {
        resultDisplay.textcontent = `Error: ${err.message}`;
    }
});

const stored = getStoredTime();
if (stored) {
    resultDisplay.textContent = `Total: ${stored}`
}
