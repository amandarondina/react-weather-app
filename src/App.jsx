import React, { useState } from "react";
import axios from "axios";
import "./index.css";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [icon, setIcon] = useState("");

  const url = `https://apis.scrimba.com/openweathermap/data/2.5/weather?q=${location}&units=metric`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        setIcon(response.data.weather[0].icon);
        console.log(response.data.weather[0].icon);
      });
      setLocation("");
    }
  };

  return (
    <div className="wrapper">
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>

   {data.name && (
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{Math.round(data.main.temp)}°C </h1> : null}
          </div>
          <div className="icon-container">
            {data.weather ? (
              <img src={`/assets/icons/${icon}.png`} className="icon" />
            ) : null}
          </div>

          <div className="description">
            {data.weather ? <p>{data.weather[0].main} </p> : null}
          </div>
        </div>
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{Math.round(data.main.feels_like)}°C </p>
              ) : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className="bold">{data.wind.speed}m/s </p> : null}
              <p>Wind Speed</p>
            </div>
          </div>       
      </div>
      )}
    </div>
    </div>
  );
}

export default App;
