import collectionsActionTypes from "../types/collections.types";

const INITIAL_STATE = {
  collections: null,
  error: null,
};

export const collectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case collectionsActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return { ...state, collections: action.payload, error: null };

    case collectionsActionTypes.FETCH_COLLECTIONS_FAILURE:
      return { ...state, collections: null, error: action.payload };

    default:
      return state;
  }
};

export default collectionsReducer;
