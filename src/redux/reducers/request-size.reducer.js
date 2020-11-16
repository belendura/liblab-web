import requestSizeActionTypes from "../types/request-size.types";

const INITIAL_STATE = {
  succes: null,
  error: null,
};

export const requestSizeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case requestSizeActionTypes.REQUEST_SIZE_SUCCESS:
      return {
        ...state,
        success: action.payload,
        error: null,
      };
    case requestSizeActionTypes.REQUEST_SIZE_FAILURE:
      return {
        ...state,
        success: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default requestSizeReducer;
