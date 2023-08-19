import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { fetchAirports } from "./store/airports";
import FlightSearchBar from "./components/FlightSearchBar";
import FlightsDisplay from "./components/FlightsDisplay";
import { fetchAirlines } from "./store/airlines";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAirports());
    dispatch(fetchAirlines());
  }, [])

  return (
    <div className="flight-app-container">
    <Switch>
      <Route path="">
        <FlightSearchBar />
        <FlightsDisplay />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
