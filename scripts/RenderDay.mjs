//Handles rendering the days with thier dates and corripsonding duration of work time

export function renderDays(daysList) {
    const daysOutput = document.getElementById('daysDisplay');
    daysOutput.innerHTML = '';

    if (daysList.length === 0) {
        daysOutput.textContent = 'No days to count yet.'
        return;
    }

    const list = document.createElement('ul');

    //Format for the day
    daysList.forEach(day => {
        const item = document.createElement('li');
        const formattedDate = formatDate(day.date);

        item.textContent = `Date: ${formattedDate} Hours: ${day.duration}`;
        list.appendChild(item);


    });

    daysOutput.appendChild(list)
}

function formatDate(dateString) {
    const dateObj = new Date(dateString + 'T00:00:00');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    return `${month}/${day}/${year}`;
}