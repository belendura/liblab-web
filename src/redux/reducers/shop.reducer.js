import shopActionTypes from "../types/shop.types";


const INITIAL_STATE = {
  error: null,
searchResults:[],
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.REQUEST_ITEM_SUCCESS:
      return {
        ...state,
        error: null,
      };
    case shopActionTypes.REQUEST_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state;
  }
};

export default shopReducer;
