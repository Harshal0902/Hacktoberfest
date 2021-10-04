import "./App.css";
import React from "react";
import Html from "./Hero/Html";
import Geoloc from "./Hero/Geoloc";
import { Route, Switch, Link } from "react-router-dom";
import MyLocationIcon from "@material-ui/icons/MyLocation";

export default function App() {
  return (
    <div className="App">
      <span className="icon">
        <Link to="geolocation">
          <MyLocationIcon />
        </Link>
      </span>
      <Switch>
        <Route exact path="/weather-app" component={Html} />
        <Route exact path="/weather-app/geolocation" component={Geoloc} />
        <Route exact path="/geolocation" component={Geoloc} />
        <Route path="/" component={Html} />
      </Switch>
    </div>
  );
}
