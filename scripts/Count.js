//Handles counting of the total work time

export function getTotalHours(daysList) {
    let total = 0;

    daysList.forEach(day => {
        const [hours, minutes] = day.duration.split(':').map(Number);
        totalMinutes += hours * 60 + minutes;
    });

    const totalHours = Math.floor(totalMinutes / 60);
    const remainingMinutes = totalMinutes % 60;

    return `${totalHours}:${String(remainingMinutes).padStart(2, '0')}`
}