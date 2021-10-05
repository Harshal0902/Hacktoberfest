import React, { useState, useEffect } from "react";
import "./Css.css";
import Footer from "../Component/Footer";
import Bottom from "../Component/Bottom";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Ts from "../Component/Thunderstorm";
import Geolocation from "react-geolocation";

function Html() {
  const [temp, setTemp] = useState();
  const [feellike, setFeellike] = useState();
  const [pressure, setPressure] = useState();

  const [country, setCountry] = useState();
  const [weather, setWeather] = useState();
  const [sunrise, setSunrise] = useState();
  const [sunset, setSunset] = useState();
  const [name, setName] = useState();
  const [lon, setLon] = useState();
  const [lat, setLat] = useState();
  const srise = sunrise;
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  var date = new Date(srise * 1000);
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  var seconds = "0" + date.getSeconds();

  // Will display time in 10:30:23 format
  var sr = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  const sset = sunset;
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  var date = new Date(sset * 1000);
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  var seconds = "0" + date.getSeconds();

  // Will display time in 10:30:23 format
  var ss = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  const Months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const Weekdays = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  var Month = Months[date.getMonth()];
  var Weekday = Weekdays[date.getDay()];

  var today = new Date(),
    date =
      Weekday +
      " " +
      Month +
      " " +
      today.getDate() +
      " " +
      today.getFullYear() +
      ",";
  const time = today.getHours() + ":" + today.getMinutes();
  useEffect(() => {
    const fetchUrl = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=d686bdf012cea1b3b4050adf53dfdb64`;
      const response = await fetch(url);
      const resJson = await response.json();
      setTemp(resJson.main.temp);
      setFeellike(resJson.main.feels_like);
      setCountry(resJson.sys.country);
      setWeather(resJson.weather[0].description);
      setSunrise(resJson.sys.sunrise);
      setSunset(resJson.sys.sunset);
      setName(resJson.name);
      setPressure(resJson.main.pressure);
      console.log(resJson);
    };
    fetchUrl();
  }, [lat, lon]);

  return (
    <>
      {" "}
      <Geolocation
        render={({
          fetchingPosition,
          position: { coords: { latitude, longitude } = {} } = {},
          error,
          getCurrentPosition,
        }) => (
          <div>
            {error && <div>{error.message}</div>}
            <pre>
              {setLat(`${latitude}`)}
              {setLon(`${longitude}`)}
            </pre>
          </div>
        )}
      />
      <div className="text">
        <Bottom />

        <Footer />
        <div className="city">
          {name}, {country}
          <span className="pin">
            <LocationOnOutlinedIcon />
          </span>
        </div>
        <div className="temp">{Math.round(`${temp}`)}°C</div>
        <div>
          <Ts />
        </div>
        <div className="desc">{weather},</div>

        <div className="date">
          {date}
          <br />
          {time} Hrs
        </div>

        <div className="feelslike">Feels Like: </div>
        <div className="feeltemp">{feellike}°C</div>
        <div className="pressure">Pressure:</div>
        <div className="feelpressure">{pressure / 100} Pa</div>
        <div className="left">
          <span className="dawn">Dawn: </span>
          <span className="bold">{sr} Hrs</span>
        </div>
        <div className="right">
          <span className="dusk">Dusk:</span>
          <span className="bold"> {ss} Hrs</span>
        </div>
        <div className="copyright">
          Copyright ©2021 All rights reserved. /GAURAV.SINHA
        </div>
      </div>
    </>
  );
}

export default Html;
