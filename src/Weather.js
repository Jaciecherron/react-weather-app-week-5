import React from "react";
import './Weather.css';

export default function Weather () {
  return (
    <div className="Weather">
      <form>
        <input
          type="search"
          placeholder="Enter a city..."
          className="form-control"
          autoFocus="on"
        />
        <input type="submit" value="Search" className="btn btn-primary w-100" />
      </form>
      <h1>New York</h1>
      <ul>
        <li>Monday 07:00</li>
        <li>Mostly Cloudly</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              className="float-left"
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="moslty cloudy"
            ></img>
            <div className="float-left">
            <span className="temperature">6</span>{" "}
            <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>prescipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13 km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}