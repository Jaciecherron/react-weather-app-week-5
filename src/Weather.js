import React, { useState } from "react";
import './Weather.css';
import axios from "axios";
import FriendlyDate from "./friendlyDate";

export default function Weather (props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response) {
  setWeatherData({
    ready: true,
    temperature: response.data.temperature.current,
    wind: response.data.wind.speed,
    city: response.data.city,
    date: new Date(response.data.time * 1000),
    humidity: response.data.temperature.humidity,
    iconURL: "https://ss1.fstatic.com/onebox/weather/64/partly_cloudy.png",
    description: response.data.condition.description,
  });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
            autoFocus="on"
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          />
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FriendlyDate date={weatherData.date} />
            </li>
          <li className="text-captialize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                className="float-left"
                src={weatherData.iconURL}
                alt={weatherData.description}
              ></img>
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>{" "}
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/hr</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
  let apiKey = "9f3o6449dc310bta33096fd85b205350";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
  axios.get(apiURL).then(handleResponse)
 
  return "Loading..."}
}