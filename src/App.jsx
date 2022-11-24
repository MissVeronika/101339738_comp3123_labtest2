import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=9896e920a814f8c2faa64dbc3e1e0487`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }
 

  return (
    <div className="app">
      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation (event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location Please'
        type="text"/>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
          <p>{data.name}</p>
          <div className="temp">
          {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          </div>
          <div className="weatherDescription">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
        <div className="bottom">
          <div className="humidity">
          {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>

          <div className="feels">
          {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
            <p>Feels Like</p>
          </div>

          <div className="temp_min">
        {data.main.temp_min ? <p className='bold'>{data.main.temp_min}°C</p> : null}
        <p>Min Temp</p>
        </div>

         <div className="temp_max">
        {data.main.temp_max ? <p className='bold'>{data.main.temp_max}°C</p> : null}
        <p>Max Temp</p>
        </div>

        <div className="wind">
        {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} Km</p> : null}
        <p>Wind Speed</p>
        </div>

        <div className="pressure">
          {console.log(data.main.pressure)}
        {data.main.pressure ? <p className='bold'>{data.main.pressure} Hg</p> : null}
        <p>Pressure</p>
        </div>

      </div>
     }


     </div>
     </div>
  );
}

export default App;
