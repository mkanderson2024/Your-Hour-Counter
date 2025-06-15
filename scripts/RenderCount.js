//Handles rendering of the count information to the webpage

export function renderCountTotal(theTotal) {
    const countOutput = document.getElementById('countDisplay');
    countOutput.innerHTML = '';

    //Upgradable count information
    const info = document.createElement('p');
    info.className = 'count-info';
    info.textContent = `Total Hours: ${theTotal}`;

    countOutput.appendChild(info);
}