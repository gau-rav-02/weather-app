import React from 'react';
import { useWeather } from '../context/weather';



const Input = () =>{
    const weather = useWeather();
    return(
        <div>
            <input type='text' className='Input' placeholder='Search Here' value={weather.searchCity} onChange={(e) => weather.setSearchCity(e.target.value)}></input>
        </div>
    );
}

export default Input;