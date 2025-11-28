const cache = new Map<string, { data: any, timestamp: number }>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export const getCurrentWeatherData = async (latitude: number, longitude: number): Promise<[]> => {
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const API_KEY = '9c3ed56176540f1768d48d5184745472';
    const queryParams = `?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

    const key = `${latitude},${longitude}`;
    const cached = cache.get(key);

    const requestUrl = `${API_URL}${queryParams}`;

    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
        return cached.data;
    }

    try {
        const data = await fetch(requestUrl, {
            method: 'GET'
        });

        if (!data.ok) {
            throw new Error(`HTTP error! status: ${data.status}`);
        }

        cache.set(key, { data, timestamp: Date.now() });

        return await data.json();
    } catch (e) {
        console.error('Error fetching current weather:', e);
        throw e;
    }
};