//Scripts for subtracting two time durations.

//Gets input of time duration
function inputStringToMinutes(timeStr) {
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
export function subtractTimesAndStore(timeA, timeB, key = 'subtractTime') {
    const totalMinutes = inputStringToMinutes(timeA) - inputStringToMinutes(timeB);

    if (totalMinutes < 0) {
        throw new Error("Resulting time is negative.")
    }

    const result = minutesToTimeString(totalMinutes);
    localStorage.setItem(key, result);
    console.log(`Subtraction complete: ${result}`)
    return result;
}

export function getStoredTime2(key = 'subtractTime') {
    return localStorage.getItem(key);
}