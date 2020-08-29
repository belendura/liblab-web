import collectionsActionTypes from "../types/collections.types";

const INITIAL_STATE = {
  section: null,
  filteredColors: [],
  filteredSizes: [],
  filteredFit: [],
  differentColor: {},
  ascendingOrdered: false,
  descendingOrdered: false,
  reducedDisplayedItems: false,
  error: null,
  selectedItem: null,
};

export const collectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case collectionsActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        section: action.payload,
        ascendingOrdered: false,
        descendingOrdered: false,
        reducedDisplayedItems: false,
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
        ascendingOrdered: false,
        descendingOrdered: true,
        error: null,
      };
    case collectionsActionTypes.ORDER_COLLECTIONS_PRICE_ASCENDING:
      return {
        ...state,
        ascendingOrdered: true,
        descendingOrdered: false,
        error: null,
      };
    case collectionsActionTypes.RESET_ORDER_COLLECTIONS:
      return {
        ...state,
        ascendingOrdered: false,
        descendingOrdered: false,
        error: null,
      };
    case collectionsActionTypes.REDUCE_DISPLAYED_ITEMS:
      return {
        ...state,
        reducedDisplayedItems: true,
        error: null,
      };
    case collectionsActionTypes.ENLARGE_DISPLAYED_ITEMS:
      return {
        ...state,
        reducedDisplayedItems: false,
        error: null,
      };
    case collectionsActionTypes.SELECT_ITEM:
      return {
        ...state,
        selectedItem: action.payload,
        error: null,
      };
    case collectionsActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        section: null,
        ascendingOrdered: false,
        descendingOrdered: true,
        reducedDisplayedItems: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default collectionsReducer;
