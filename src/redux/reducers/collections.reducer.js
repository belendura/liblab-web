import collectionsActionTypes from "../types/collections.types";

const INITIAL_STATE = {
  section: null,
  filteredColors: [],
  filteredSizes: [],
  filteredFit: [],
  ascendingOrder: false,
  descendingOrder: false,
  error: null,
};

export const collectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case collectionsActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        section: action.payload,
        ascendingOrder: false,
        descendingOrder: false,
        error: null,
      };
    case collectionsActionTypes.FILTER_COLORS:
      return { ...state, filteredColors: action.payload, error: null };
    case collectionsActionTypes.FILTER_SIZES:
      return { ...state, filteredSizes: action.payload, error: null };
    case collectionsActionTypes.FILTER_FIT:
      return { ...state, filteredFit: action.payload, error: null };

    case collectionsActionTypes.ORDER_COLLECTIONS_PRICE_DESCENDING:
      return {
        ...state,
        ascendingOrder: false,
        descendingOrder: true,
        error: null,
      };
    case collectionsActionTypes.ORDER_COLLECTIONS_PRICE_ASCENDING:
      return {
        ...state,
        ascendingOrder: true,
        descendingOrder: false,
        error: null,
      };
    case collectionsActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        section: null,
        ascendingOrder: false,
        descendingOrder: true,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default collectionsReducer;
