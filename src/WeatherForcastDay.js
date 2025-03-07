import React from "react";

export default function WeatherDay (props){
  return (
    <div>
      <div className="WeatherForcast-day">Thursday</div>
      <img
        className="Icon"
        size={25}
        src={props.data.condition.icon_url}
        alt={props.data.description}
      ></img>
      <div className="WeatherForcast-temperatures">
        <span className="WeatherForcast-temperature-max">19°</span>
        <span className="WeatherForcast-temperature-min">10°</span>
      </div>
    </div>
  );
}