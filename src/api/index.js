const BaseURL = 'https://api.weatherapi.com/v1/current.json?key=6bb7168600a74ce08aa73856252909&q='

export const getWeatherData = async (city) => {
    const response = await fetch(`${BaseURL}${city}&aqi=yes`);
    return await response.json();
}

export const getLocationData = async (lat, lon) => {
    const response = await fetch(`${BaseURL}${lat},${lon}&aqi=yes`);
    return await response.json();
}