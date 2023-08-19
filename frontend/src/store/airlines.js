import { addErrors } from "./errors";

export const SET_AIRLINES = "airlines/SET_AIRLINES";

// Actions
export const setAirlines = (airlines) => ({
  type: SET_AIRLINES,
  airlines
})

// Selectors 
export const getAirlines = (state) => {
	return state.airlines ? Object.values(state.airlines) : [];
}

// Thunk Action Creators
export const fetchAirlines = () => async dispatch => {
  const res = await fetch(`/airlines?access_key=${process.env.REACT_APP_AVIATION_API_KEY}`);
  const data = await res.json();

  if (data.error) {
    dispatch(addErrors(data.error));
  } else {
    dispatch(setAirlines(data.data));
  }
}

// Reducer
const initialState = null;

const airlinesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AIRLINES:
      return {...action.airlines}
    default:
      return state;
  }
}

export default airlinesReducer;
