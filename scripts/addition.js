//Scripts for adding two time durations together.

//Gets input of time duration
function inputSringToMinutes(timeStr) {
    const match = /^(\d+):([0-5]\d)$/.exec(timeStr)
    if (!match) {
        throw new Error(`Invalid time format: ${timeStr}`);
    }
    const [_, hours, minutes] = match;
    return parseInt(hours) * 60 + parseInt(minutes);
}

//Convert minutes to time string for display
function minutesToTimeString(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

//Stores sum in local storage
export function addTimesAndStore(timeA, timeB, key = 'addTime') {
    const totalMinutes = inputStringToMinutes(timeA) + timeStringToMinutes(timeB);
    const result = minutesToTimeString(totalMinutes);
    localStorage.setItem(key, result);
    return result;
}

export function getStoredTime(key = `addTime`) {
    return localStorage.getItem(key);
}