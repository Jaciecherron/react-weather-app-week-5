import React from "react";
import "./WeatherForcast.css";
import WeatherForcastDay from "./WeatherForcastDay";

export default function WeatherForcast() {
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