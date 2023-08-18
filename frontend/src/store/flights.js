import { paramsFormatter } from "./util";

export const SET_FLIGHTS = "flights/SET_FLIGHTS";

// Actions
export const setFlights = (flights) => ({
  type: SET_FLIGHTS,
  flights
})

// Selectors 
export const getFlights = (state) => {
	return state.flights ? Object.values(state.flights) : [];
}

// Thunk Action Creators
export const fetchFlights = (parameters) => async dispatch => {
  const queryString = paramsFormatter(parameters);
  const res = await fetch(`/flights?${queryString}`);
  const data = await res.json();
  dispatch(setFlights(data.data));
}

// Reducer
const initialState = null;

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FLIGHTS:
      return {...action.flights}
    default:
      return state;
  }
}

export default flightsReducer;
