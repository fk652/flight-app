import "./FlightItem.css";

const FlightItem = ({ flightInfo }) => {
  const dateFormatter = (date) => {
    return new Date(date).toLocaleString();
  }

  return (
    <div className="flight-item">
      <div className="flight-header">
        <div className="flight-number-airline">
          {flightInfo.flight.iata}
          <br />
          {flightInfo.airline.name}
        </div>
        <div className="flight-from-to">
          {flightInfo.departure.iata} to {flightInfo.arrival.iata}
        </div>
        <div className="flight-status">
          {flightInfo.flight_status}
          <br />
          {flightInfo.flight_date}
        </div>
      </div>

      <div className="flight-info-container">
        <div className="flight-sub-info">
          <h2>Departure</h2>
          <div className="flight-airport-info">
            {flightInfo.departure.airport}
            <br />
            ({flightInfo.departure.iata})
          </div>
          <div className="flight-time-info">
            Scheduled: {dateFormatter(flightInfo.departure.scheduled)}
            <br />
            Estimated: {dateFormatter(flightInfo.departure.estimated)}
          </div>
          <div className="flight-terminal-gate">
            <span>Terminal {flightInfo.departure.terminal || '-'}</span>
            <span>Gate {flightInfo.departure.gate || '-'}</span>
          </div>
        </div>
        <div className="flight-sub-info-divider" />
        <div className="flight-sub-info">
          <h2>Arrival</h2>
          <div className="flight-airport-info">
            {flightInfo.arrival.airport}
            <br />
            ({flightInfo.arrival.iata})
          </div>
          <div className="flight-time-info">
            Scheduled: {dateFormatter(flightInfo.arrival.scheduled)}
            <br />
            Estimated: {dateFormatter(flightInfo.arrival.estimated)}
          </div>
          <div className="flight-terminal-gate">
            <span>Terminal {flightInfo.arrival.terminal || '-'}</span>
            <span>Gate {flightInfo.arrival.gate || '-'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightItem;