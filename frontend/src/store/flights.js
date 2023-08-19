import { addErrors } from "./errors";
import { paramsFormatter } from "./util";

export const SET_FLIGHTS = "flights/SET_FLIGHTS";
export const RESET_FLIGHTS = "flights/RESET_FLIGHTS";

// Actions
export const setFlights = (flights) => ({
  type: SET_FLIGHTS,
  flights
})

export const resetFlights = () => ({
  type: RESET_FLIGHTS
})

// Selectors 
export const getNumberOfFlights = (state) => {
  return state.flights ? Object.values(state.flights).length : -1;
}

export const getFlights = (state) => {
	return state.flights ? Object.values(state.flights) : [];
}

// Thunk Action Creators
export const fetchFlights = (parameters) => async dispatch => {
  const queryString = paramsFormatter(parameters);
  const res = await fetch(`/flights?${queryString}`);
  const data = await res.json();

  if (data.error) {
    dispatch(addErrors(data.error));
  } else {
    dispatch(setFlights(data.data));
  }
}

// Reducer
const initialState = null;

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FLIGHTS:
      return {...action.flights}
    case RESET_FLIGHTS:
      return initialState;
    default:
      return state;
  }
}

export default flightsReducer;
