import React, { useState } from "react";
import Geoloc from "./Geolocation";
import Weather from "./Weather";

function WeatherApp() {
  const [state, setState] = useState();
  return (
    <div>
      <input
        value={state}
        type="search"
        onChange={(e) => {
          setState(e.target.value);
        }}
        placeholder="search location"
      />
      {!state ? <Geoloc /> : <Weather />}
    </div>
  );
}

export default WeatherApp;
