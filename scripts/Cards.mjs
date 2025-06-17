// Create cards with links on them

export async function renderLinkCards(containerId, modalId, modalTextId, modalCloseId, jsonPath) {
    const container = document.getElementById(containerId);
    const modal = document.getElementById(modalId);
    const modalText = document.getElementById(modalTextId);
    const modalClose = document.getElementById(modalCloseId);

    try {
        const res = await fetch(jsonPath);
        if (!res.ok) throw new Error('Failed to load link data');
        const data = await res.json();

        data.links.forEach(link => {
            const card = document.createElement('div');
            card.className = 'card';

            const title = document.createElement('h3');
            title.textContent = link.description;

            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.target = '_blank';
            linkElement.textContent = 'Visit';

            const moreButton = document.createElement('button');
            moreButton.textContent = 'More';
            moreButton.addEventListener('click', () => {
                modalText.textContent = link.purpose;
                modal.style.display = 'block';
            });

            card.appendChild(title);
            card.appendChild(linkElement);
            card.appendChild(moreButton);
            container.appendChild(card);
        });

        // Modal handlers
        modalClose.onclick = () => {
            modal.style.display = 'none';
        };
        window.onclick = (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
    } catch (err) {
        console.error('Error loading links:', err);
        container.textContent = 'Failed to load link data.';
    }
}
