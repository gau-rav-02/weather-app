const BaseURL = 'http://api.weatherapi.com/v1/current.json?key=c0caf8b9fa324733aac135847230310&q='

async function getWeatherData(city) {
    const response = await fetch(`${BaseURL}${city}&aqi=yes`);
    return await response.json();
}

async function setSearchCity(city){
    let icon = document.getElementById("icon");
    let weather = document.getElementById("weather");
    let temperature = document.getElementById("temperature");
    let location = document.getElementById("location");
    response = await getWeatherData(city);
    icon.src = response.current.condition.icon;
    weather.innerHTML = response.current.condition.text;
    temperature.innerHTML = response.current.temp_c + "&degC";
    location.innerHTML = response.location.name + ", " + response.location.region + ", " + response.location.country;
}