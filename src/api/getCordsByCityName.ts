export const getCordsByCityName = async (cityName: string) => {
    const API_KEY = '9c3ed56176540f1768d48d5184745472';
    const API_URL = 'https://api.openweathermap.org/geo/1.0/direct';

    const queryParams = `?q=${cityName}&limit=1&appid=${API_KEY}`;
    const requestUrl = `${API_URL}${queryParams}`;

    try {
        const response = await fetch(requestUrl, {
            method: 'GET'
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (e) {
        console.error('Error fetching coordinates:', e);
        throw e;
    }
}