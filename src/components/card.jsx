import React from 'react';
import { useWeather } from '../context/weather';
 
const Card = () => {
    const weather = useWeather();
    return(
        <div className='Card'>
            <img src={weather.data?.current?.condition.icon}/>
            <p>{weather.data?.current?.condition.text}</p>
            <h3>{weather.data?.current?.temp_c}</h3>
            <h4>{weather.data?.location?.name}, {weather.data?.location?.region}, {weather.data?.location?.country}</h4>
        </div>
    );
}

export default Card;