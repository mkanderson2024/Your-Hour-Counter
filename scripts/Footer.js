export function updateFooterInfo() {
    // Copyright year
    const date = new Date();
    const year = document.getElementById("copyright-year");
    if (year) {
        year.textContent += date.getFullYear();
    }

    // Last modified
    const modified = document.getElementById("lastModified");
    if (modified) {
        let lastModified = new Date(document.lastModified);
        modified.textContent += lastModified.toLocaleString();
    }
}
