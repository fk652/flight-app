import { useState } from "react";
import { useSelector } from "react-redux";
import "./FlightSearchBar.css";
import { getAirlines } from "../../store/airlines";
import { getAirports } from "../../store/airports";

const FlightSearchBar = () => {
  const airlineOptions = useSelector(getAirlines);
  airlineOptions.sort((a, b) => {
    let x = a.airline_name.toLowerCase();
    let y = b.airline_name.toLowerCase();

    if (x > y) return 1; 
    if (x < y) return -1;
    return 0;
  })

  let airportOptions = useSelector(getAirports);

  const [airline, setAirline] = useState('');
  const [departingAirport, setDepartingAirport] = useState('');
  const [arrivingAirport, setArrivingAirport] = useState('');
  const [flightNumber, setFlightNumber] = useState('');
  const [flightStatus, setFlightStatus] = useState('');

  const update = (setter) => (e) => {
    setter(e.target.value);
  }

  const handleSubmit = () => {

  }

  return (
    <form className="flight-search-bar" onSubmit={handleSubmit}>
      <h1>Flight Search Form</h1>
      
      <div className="flight-form-field">
        <label className="flight-form-label" htmlFor="airline">
          Airline
        </label>
        <select 
          className="flight-form-select" 
          name="airline" 
          onChange={update(setAirline)} 
          defaultValue={airline}
        >
          <option value="">- Select an Airline -</option>
          {
            airlineOptions.map((airline, index) => {
              return (
                <option key={index} value={airline.airline_name}>
                  {airline.airline_name}
                </option>
              )
            })
          }
        </select>
      </div>

      <div className="flight-form-field">
        <label className="flight-form-label" htmlFor="departingAirport">
          Departing Airport
        </label>
        <select className="flight-form-select" 
                name="departingAirline" 
                onChange={update(setDepartingAirport)} 
                defaultValue={departingAirport}>
          <option value="">- Select a Departing Airport -</option>
          {
            airportOptions.map((airport, index) => {
              return (
                <option key={index} value={airport.iata_code}>
                  {`${airport.iata_code} - ${airport.airport_name}`}
                </option>
              )
            })
          }
        </select>
      </div>

      <div className="flight-form-field">
        <label className="flight-form-label" htmlFor="arrivingAirport">
          Arriving Airport
        </label>
        <select 
          className="flight-form-select" 
          name="arrivingAirline" 
          onChange={update(setArrivingAirport)} 
          defaultValue={arrivingAirport}
        >
          <option value="">- Select an Arriving Airport -</option>
          {
            airportOptions.map((airport, index) => {
              return (
                <option key={index} value={airport.iata_code}>
                  {`${airport.iata_code} - ${airport.airport_name}`}
                </option>
              )
            })
          }
        </select>
      </div>

      <div className="flight-form-field">
        <label className="flight-form-label" htmlFor="flightNumber">
          Flight Number
        </label>
        <input 
          className="flight-form-input"
          type="text" 
          placeholder="Flight Number (e.g UA2402)" 
          onChange={update(setFlightNumber)} 
          value={flightNumber} 
        />
      </div>

      <div className="flight-form-field">
        <label className="flight-form-label" htmlFor="flightStatus">
          Flight Status
        </label>
        <select 
          className="flight-form-select" 
          name="flightStatus" 
          onChange={update(setFlightStatus)} 
          defaultValue={flightStatus}
        >
          <option value="">- Select a Flight Status -</option>
          <option value="scheduled">Scheduled</option>
          <option value="active">Active</option>
          <option value="landed">Landed</option>
          <option value="cancelled">Cancelled</option>
          <option value="incident">Incident</option>
          <option value="diverted">Diverted</option>
        </select>
      </div>

      <button className="flight-form-submit" type="submit">
        Search Flight
      </button>
    </form>
  );
};

export default FlightSearchBar;