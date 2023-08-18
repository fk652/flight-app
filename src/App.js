import "./index.css"
import FlightSearchBar from "./components/FlightSearchBar";
import FlightsDisplay from "./components/FlightsDisplay";

function App() {
  return (
    <div className="flight-app-container">
      <h1>Flight Search</h1>
      <FlightSearchBar />
      <FlightsDisplay />
    </div>
  );
}

export default App;
