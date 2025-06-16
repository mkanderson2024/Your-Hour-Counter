import { addTimesAndStore } from './Addition.js';
import { subtractTimesAndStore } from './Subtraction.js';
import { getMatrixDistanceAndTime } from './MatrixRequest.js';
import { getStoredTime } from './CalculationsUtilities.js';
import { getCityCoordinates } from './Coordinates.js';

const addition = document.getElementById('addition');
const additionDisplay = document.getElementById('addition-display');

const subtraction = document.getElementById('subtraction')
const subtractDisplay = document.getElementById('subtraction-display');

//Distance and Time (deta)
const deta = document.getElementById('deta')
const detaTimeDisplay = document.getElementById('time-display');
const detaMilesDisplay = document.getElementById('miles-display');

// Addition Form
addition.addEventListener('submit', (addUp) => {
    addUp.preventDefault();

    const time1 = document.getElementById('add-one').value.trim();
    const time2 = document.getElementById('add-two').value.trim();

    try {
        const additionResult = addTimesAndStore(time1, time2);
        additionDisplay.textContent = `Total: ${additionResult}`;
    } catch (err) {
        additionDisplay.textContent = `Error: ${err.message}`;
    }
});

// Subtraction Form
subtraction.addEventListener('submit', (subtract) => {
    subtract.preventDefault();

    const sTime1 = document.getElementById('subtract-one').value.trim();
    const sTime2 = document.getElementById('subtract-two').value.trim();

    try {
        const subtractionResult = subtractTimesAndStore(sTime1, sTime2);
        subtractDisplay.textContent = `Total: ${subtractionResult}`;
    } catch (err) {
        subtractDisplay.textContent = `Error: ${err.message}`;
    }
})

// Distance and Time Form (deta)
deta.addEventListener('submit', async (check) => {
    check.preventDefault();

    const startLocation = document.getElementById('location-one').value.trim();
    const endLocation = document.getElementById('location-two').value.trim();

    if (!startLocation || !endLocation) {
        alert('Please enter both start and end locations.');
        return;
    }

    detaTimeDisplay.textContent = 'Loading...';
    detaMilesDisplay.textContent = 'Loading...';

    try {
        const startCoordinates = await getCityCoordinates(startLocation);
        const endCoordinates = await getCityCoordinates(endLocation);

        const detaResult = await getMatrixDistanceAndTime(startCoordinates, endCoordinates);

        const hours = Math.floor(detaResult.duration / 3600);
        const minutes = Math.round((detaResult.duration % 3600) / 60);

        detaTimeDisplay.textContent = `Time: ${hours}:${minutes}`;
        detaMilesDisplay.textContent = `Miles: ${detaResult.distance.toFixed(2)}`;

    } catch (err) {
        detaTimeDisplay.textContent = `Error: ${err.message}`;
        detaMilesDisplay.textContent = `Error: ${err.message}`;
    }
});
// Display stored
const storedAddition = getStoredTime('addTime');
if (storedAddition) {
    additionDisplay.textContent = `Total: ${storedAddition}`;
}

const storedSubtraction = getStoredTime('subtract');
if (storedSubtraction) {
    subtractDisplay.textContent = `Total: ${storedSubtraction}`;
}

