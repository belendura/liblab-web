import userActionTypes from "../types/user.types";

const INITIAL_STATE = {
  user: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SING_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case userActionTypes.SING_OUT_SUCCESS:
      return {
        ...state,
        user: null,
        error: null,
      };
    case userActionTypes.SING_IN_FAILURE:
    case userActionTypes.SING_UP_FAILURE:
    case userActionTypes.SING_OUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
