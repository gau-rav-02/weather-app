import './App.css';

import Input from './components/input';
import Button from './components/button';
import Card from './components/card';
import { useWeather } from './context/weather';
import { useEffect } from 'react';

function App() {
  const weather = useWeather();
  console.log("weather", weather);

  useEffect(()=>{
    weather.fetchLocation();
  },[]);

  return (
    <div className="App">
      <div className='container'>
        <h1>Weather App</h1>
        <Input />
        <Button onClick={weather.fetchData} value='Search'/>
        <Card />
        <Button onClick={weather.fetchLocation} value='Refresh'/>        
      </div>
    </div>
  );
}

export default App;
