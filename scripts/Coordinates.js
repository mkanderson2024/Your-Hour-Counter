//GeocodeAPI
import { getApiKey } from "./ApiUtilities.js";

export async function getCityCoordinates(cityName) {
    const apiKey = getApiKey()
    const url = `https://api.openrouteservice.org/geocode/search?api_key=${apiKey}&text=${encodeURIComponent(cityName)}&size=1`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.features.length === 0) {
        throw new Error(`No coordinates found for: ${cityName}`);
    }

    const coords = data.features[0].geometry.coordinates; // [lon, lat]
    return coords;
}