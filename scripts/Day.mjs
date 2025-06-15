//Handles creation of a day object

export class Day {
    constructor(date, duration) {
        if (!Day.isValidDuration(duration)) {
            throw new Error("Invalid duration format. Use HH:MM.");
        }

        this.id = Date.now();
        this.date = date;
        this.duration = duration;
    }

    static isValidDuration(duration) {
        return /^\d{1,2}:\d{2}$/.test(duration);
    }

    static fromObject(obj) {
        const day = new Day(obj.date, obj.duration);
        day.id = obj.id
        return day;
    }
}
