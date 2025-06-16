// Matrix Api
import { getApiKey } from './ApiUtilities.js';

export async function getMatrixDistanceAndTime(fromCoordinates, toCoordinates) {
    const API_KEY = getApiKey();

    const url = 'https://api.openrouteservice.org/v2/matrix/driving-hgv';
    const headers = {
        'Authorization': API_KEY,
        'Content-Type': 'application/json'
    };

    const body = {
        locations: [fromCoordinates, toCoordinates],
        metrics: ['distance', 'duration'],
        units: 'mi'
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error(`Matrix API error: ${response.status}`);
        }

        const data = await response.json();
        const distance = data.distances[0][1]; // miles
        const duration = data.durations[0][1]; // seconds

        return {
            distance,
            duration
        };
    } catch (error) {
        console.error('Error fetching matrix data:', error);
        throw error;
    }
}
