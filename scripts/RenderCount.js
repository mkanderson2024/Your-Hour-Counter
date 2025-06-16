//Handles rendering of the count information to the webpage

export function renderCount(summary, elementId) {
    const countOutput = document.getElementById(elementId);
    if (!countOutput) {
        console.warn(`Element with ID "${elementId}" not found.`);
        return;
    }

    countOutput.innerHTML = '';

    //Upgradable count information
    const info = document.createElement('p');
    info.className = 'count-info';
    info.textContent = `${summary}`;

    countOutput.appendChild(info);
}