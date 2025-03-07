import React from "react";
import "./WeatherForcast.css";
import WeatherForcastDay from "./WeatherForcastDay";
import axios from "axios";

export default function WeatherForcast(props) {
  function handleResponse(response){

  }


let apiKey = "9f3o6449dc310bta33096fd85b205350";
let longitude = props.coordinates.longitude;
let latitude = props.coordinates.latitude;
let apiURL = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
axios.get(apiURL).then(handleResponse);

  return (
    <div className="weatherforcast">
      <div className="row">
        <div className="col">
          <WeatherForcastDay />
        </div>
        <div className="col">
          <WeatherForcastDay />
        </div>
        <div className="col">
          <WeatherForcastDay />
        </div>
        <div className="col">
          <WeatherForcastDay />
        </div>
        <div className="col">
          <WeatherForcastDay />
          </div>
        </div>
      </div>
  );
}
