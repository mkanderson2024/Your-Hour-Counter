import { updateFooterInfo } from './Footer.js';
import { renderLinkCards } from './Cards.mjs'

updateFooterInfo();

renderLinkCards(
    'cards-container',   // containerId
    'modal',             // modalId
    'modal-text',        // modalTextId
    'modal-close',       // modalCloseId
    './data/links.json'  // JSON file path
);