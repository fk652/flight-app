import { useSelector } from "react-redux";
import { getFlights } from "../../store/flights";
import "./FlightsDisplay.css";
import FlightItem from "./FlightItem";

const FlightsDisplay = () => {
  const flights = useSelector(getFlights);

  return (
    <div className="flights-display">
      {
        flights.map((flightInfo, index) => {
          return (
            <FlightItem key={index} flightInfo={flightInfo} />
          )
        })
      }
    </div>
  );
};

export default FlightsDisplay;