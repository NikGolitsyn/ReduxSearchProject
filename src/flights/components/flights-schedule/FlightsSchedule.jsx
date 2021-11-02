import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { setButtonActive } from "../../utils/styles.utils";
import FlightsList from "./FlightsList.jsx";
import Search from "../search/Search.jsx";
import Navigation from "../navigation/Navigation.jsx";

const FlightsSchedule = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!pathname.includes("departures") && !pathname.includes("arrivals")) {
      return null;
    }
    return setButtonActive(pathname.substr(1));
  }, [pathname]);

  return (
    <>
      <div className="flights-navigation">
        <Search />
        <Navigation />
        <Switch>
          <Route path="/:flightsType" component={FlightsList} />
        </Switch>
      </div>
    </>
  );
};

export default FlightsSchedule;
