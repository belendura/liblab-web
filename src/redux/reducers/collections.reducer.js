import collectionsActionTypes from "../types/collections.types";
import { toggleSectionWishlist } from "../utils/collections.utils";

const INITIAL_STATE = {
  shopMenu: null,
  shopMenuImages: null,
  section: null,
  filteredColors: [],
  filteredSizes: [],
  filteredFit: [],
  gridgridView: false,
  ascendingOrder: false,
  descendingOrder: false,
  error: null,
  selectedItem: null,
};

export const collectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case collectionsActionTypes.FETCH_SHOP_MENU_SUCCESS:
      return {
        ...state,
        shopMenu: action.payload,
        error: null,
      };
    case collectionsActionTypes.FETCH_COLLECTION_BY_CONDITION_SUCCESS:
    case collectionsActionTypes.FETCH_SECTION_SUCCESS:
      return {
        ...state,
        section: action.payload,
        gridView: false,
        ascendingOrder: false,
        descendingOrder: false,
        error: null,
      };
    case collectionsActionTypes.TOGGLE_SECTION_WISHLIST:
      return {
        ...state,
        section: toggleSectionWishlist(state.section, action.payload),
      };
    case collectionsActionTypes.FILTER_COLORS:
      return { ...state, filteredColors: action.payload, error: null };
    case collectionsActionTypes.FILTER_SIZES:
      return { ...state, filteredSizes: action.payload, error: null };
    case collectionsActionTypes.FILTER_FIT:
      return { ...state, filteredFit: action.payload, error: null };
    case collectionsActionTypes.ORDER_SECTION_PRICE_ASCENDING:
      return {
        ...state,
        ascendingOrder: true,
        descendingOrder: false,
        error: null,
      };
    case collectionsActionTypes.ORDER_SECTION_PRICE_DESCENDING:
      return {
        ...state,
        ascendingOrder: false,
        descendingOrder: true,
        error: null,
      };
    case collectionsActionTypes.RESET_ORDER_SECTION:
      return {
        ...state,
        ascendingOrder: false,
        descendingOrder: false,
        error: null,
      };
    case collectionsActionTypes.RESET_GRID_VIEW:
      return {
        ...state,
        gridView: false,
        error: null,
      };
    case collectionsActionTypes.SET_GRID_VIEW:
      return {
        ...state,
        gridView: true,
        error: null,
      };
    case collectionsActionTypes.FETCH_SHOP_MENU_FAILURE:
    case collectionsActionTypes.FETCH_COLLECTION_FAILURE:
    case collectionsActionTypes.FETCH_SECTION_FAILURE:
      return {
        ...state,
        shopMenu: null,
        section: null,
        ascendingOrder: false,
        descendingOrder: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default collectionsReducer;
