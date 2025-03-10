import React from "react";

export default function WeatherTemp (props) {
  return (
    <div className="temp">
      <span className="temperature">{Math.round(props.celsius)}</span>{" "}
     <span className="unit">°C </span>
    </div>
  );
} 