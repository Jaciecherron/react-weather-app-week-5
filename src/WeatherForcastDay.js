import React from "react";

export default function WeatherDay (props){
    function maxTemperature (){
      let temperature = Math.round(props.data.temperature.maximum);
      return `${temperature}°`;
    }

    function minTemperature() {
      let temperature = Math.round(props.data.temperature.minumum);
      return `${temperature}°`;
    }

    function day () {
      let date = new Date(props.data.time * 1000);
      let day = date.getDay();

      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

      return days[day];
    }
  return (
    <div>
      <div className="WeatherForcast-day">{day()}</div>
      <img
        className="Icon"
        size={25}
        src={props.data.condition.icon_url}
        alt={props.data.description}
      ></img>
      <div className="WeatherForcast-temperatures">
        <span className="WeatherForcast-temperature-max">{maxTemperature()}</span>
        <span className="WeatherForcast-temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}