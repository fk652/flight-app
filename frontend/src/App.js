import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAirports } from "./store/airports";
import FlightSearchBar from "./components/FlightSearchBar";
import FlightsDisplay from "./components/FlightsDisplay";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAirports());
  })

  return (
    <div className="flight-app-container">
      <h1>Flight Search</h1>
      <FlightSearchBar />
      <FlightsDisplay />
    </div>
  );
}

export default App;
