import collectionsActionTypes from "../types/collections.types";
import { toggleSectionWishlist } from "../utils/collections.utils";

const INITIAL_STATE = {
  shopMenu: null,
  shopMenuPictures: null,
  section: null,
  pictures: null,
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
    case collectionsActionTypes.FETCH_HEADER_SUCCESS:
      return {
        ...state,
        shopMenu: action.payload.shopMenu,
        shopMenuPictures: action.payload.shopMenuPictures,
        error: null,
      };
    case collectionsActionTypes.FETCH_PICTURES_SUCCESS:
      return {
        ...state,
        pictures: action.payload,
        error: null,
      };
    case collectionsActionTypes.FETCH_COLLECTION_BY_CONDITION_SUCCESS:
      return {
        ...state,
        section: action.payload,
        gridView: false,
        ascendingOrder: false,
        descendingOrder: false,
        error: null,
      };
    case collectionsActionTypes.FETCH_SECTION_SUCCESS:
      return {
        ...state,
        section: action.payload.section,
        pictures: action.payload.pictures,
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
    case collectionsActionTypes.FETCH_SECTION_FAILURE:
    case collectionsActionTypes.FETCH_COLLECTION_BY_CONDITION_FAILURE:
      return {
        ...state,
        section: null,
        ascendingOrder: false,
        descendingOrder: false,
        error: action.payload,
      };
    case collectionsActionTypes.FETCH_HEADER_FAILURE:
      return {
        ...state,
        shopMenu: null,
        shopMenuPictures: null,
        error: action.payload,
      };
    case collectionsActionTypes.FETCH_SCENES_FAILURE:
      return {
        ...state,
        pictures: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default collectionsReducer;
