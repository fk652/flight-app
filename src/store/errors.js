const ADD_ERRORS = "errors/addErrors";
const REMOVE_ERRORS = "errors/removeErrors";

// Actions
export const addErrors = (errors) => ({
  type: ADD_ERRORS,
  errors
})

export const removeErrors = () => ({
  type: REMOVE_ERRORS
})

// Selectors
export const getErrors = (state) => {
  return state.errors ? state.errors : null
}

// Reducer
const initialState = null;

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ERRORS:
      return {...action.errors}
    case REMOVE_ERRORS:
      return {...initialState};
    default:
      return state;
  }
}

export default errorReducer;