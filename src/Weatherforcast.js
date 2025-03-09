import React, { useState } from "react";
import "./WeatherForcast.css";
import WeatherForcastDay from "./WeatherForcastDay";
import axios from "axios";

export default function WeatherForcast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForcast] = useState(null);

  function handleResponse(response){
    setForcast(response.data.daily);
    setLoaded(true);
  }

if (loaded) {
    return (
      <div className="weatherforcast">
        <div className="row">
          <div className="col">
            <WeatherForcastDay data={forecast[0]} />
          </div>
          <div className="col">
            <WeatherForcastDay data={forecast[1]} />
          </div>
          <div className="col">
            <WeatherForcastDay data={forecast[2]} />
          </div>
          <div className="col">
            <WeatherForcastDay data={forecast[3]} />
          </div>
          <div className="col">
            <WeatherForcastDay data={forecast[4]}  />
          </div>
        </div>
      </div>
    );
} else {
let apiKey = "9f3o6449dc310bta33096fd85b205350";
let longitude = props.coordinates.longitude;
let latitude = props.coordinates.latitude;
let apiURL = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
axios.get(apiURL).then(handleResponse);

return null;
}}
