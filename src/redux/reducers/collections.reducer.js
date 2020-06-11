import collectionsActionTypes from "../types/collections.types";

const INITIAL_STATE = {
  section: null,
  error: null,
};

export const collectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case collectionsActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return { ...state, section: action.payload, error: null };

    case collectionsActionTypes.FETCH_COLLECTIONS_FAILURE:
      return { ...state, section: null, error: action.payload };

    default:
      return state;
  }
};

export default collectionsReducer;
