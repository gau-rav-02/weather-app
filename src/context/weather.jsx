import { createContext, useContext, useState } from 'react';
import { getLocationData, getWeatherData } from '../api/index.js';

const WeatherContext = createContext(null);

export const useWeather = () => {
    return useContext(WeatherContext);  
}

export const WeatherProvider = (props) => {
    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] = useState(null);

    const fetchData = async () => {
        const response = await getWeatherData(searchCity);
        console.log(response);
        setData(response);
    }

    const fetchLocation = async () => {
        navigator.geolocation.getCurrentPosition((position) => {
            getLocationData(position.coords.latitude, position.coords.longitude).then(data => setData(data));
        });
    }

    return(
        <WeatherContext.Provider value={{searchCity, data, setSearchCity, fetchData, fetchLocation}}> 
            {props.children}
        </WeatherContext.Provider>
    );
}