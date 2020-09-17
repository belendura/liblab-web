import collectionsActionTypes from "../types/collections.types";
import { addToWishlist } from "../utils/collections.utils";

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
    case collectionsActionTypes.FETCH_COLLECTION_SUCCESS:
    case collectionsActionTypes.FETCH_SECTION_SUCCESS:
      return {
        ...state,
        section: action.payload,
        ascendingOrdered: false,
        descendingOrdered: false,
        reducedDisplayedItems: false,
        error: null,
      };
    case collectionsActionTypes.TOGGLE_WISHLIST:
      return {
        ...state,
        section: addToWishlist(state.section, action.payload),
      };
    case collectionsActionTypes.FILTER_COLORS:
      return { ...state, filteredColors: action.payload, error: null };
    case collectionsActionTypes.FILTER_SIZES:
      return { ...state, filteredSizes: action.payload, error: null };
    case collectionsActionTypes.FILTER_FIT:
      return { ...state, filteredFit: action.payload, error: null };
    case collectionsActionTypes.ORDER_SECTION_PRICE_DESCENDING:
      return {
        ...state,
        ascendingOrdered: false,
        descendingOrdered: true,
        error: null,
      };
    case collectionsActionTypes.ORDER_SECTION_PRICE_ASCENDING:
      return {
        ...state,
        ascendingOrdered: true,
        descendingOrdered: false,
        error: null,
      };
    case collectionsActionTypes.RESET_ORDER_SECTION:
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
    case collectionsActionTypes.FETCH_COLLECTION_FAILURE:
    case collectionsActionTypes.FETCH_SECTION_FAILURE:
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
