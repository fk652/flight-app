import { addErrors } from "./errors";

export const SET_AIRPORTS = "airports/SET_AIRPORTS";

// Actions
export const setAirports = (airports) => ({
  type: SET_AIRPORTS,
  airports
})

// Selectors 
export const getAirports = (state) => {
	return state.airports ? Object.values(state.airports) : [];
}

// Thunk Action Creators
export const fetchAirports = () => async dispatch => {
  const res = await fetch(`/airports?access_key=${process.env.REACT_APP_AVIATION_API_KEY}`)
  const data = await res.json();

  if (data.error) {
    dispatch(addErrors(data.error));
  } else {
    dispatch(setAirports(data.data));
  }
}

// Reducer
const initialState = null;

const airportsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AIRPORTS:
      return {...action.airports}
    default:
      return state;
  }
}

export default airportsReducer;
