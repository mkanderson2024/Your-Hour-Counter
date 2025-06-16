//Formats dates to US style formatting

export function formatDate(dateString) {
    const dateObj = new Date(dateString + 'T00:00:00');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    return `${month}/${day}/${year}`;
}