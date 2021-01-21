import collectionsActionTypes from "../types/collections.types";
import {
  toggleShopItemsWishlist,
  updatePictures,
} from "../utils/collections.utils";

const INITIAL_STATE = {
  shopMenu: null,
  shopMenuPictures: null,
  shopItems: null,
  pictures: null,
  filteredColors: [],
  filteredSizes: [],
  filteredFit: [],
  filteredType: [],
  inPairsView: false,
  ascendingOrder: false,
  descendingOrder: false,
  error: null,
  searchLoaded: false,
  searchParams: "",
};

export const collectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case collectionsActionTypes.FETCH_SEARCH_START:
      return {
        ...state,
        searchParams: action.payload.search,
        error: null,
      };
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
    case collectionsActionTypes.FETCH_SHOP_ITEMS_SUCCESS:
      return {
        ...state,
        shopItems: action.payload.items,
        pictures: updatePictures(
          state.pictures,
          action.payload.shopItemsPictures
        ),
        inPairsView: false,
        ascendingOrder: false,
        descendingOrder: false,
        error: null,
      };
    case collectionsActionTypes.FETCH_ITEM_SUCCESS:
      return {
        ...state,
        shopItems: action.payload,
        error: null,
      };
    case collectionsActionTypes.FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        shopItems: action.payload,
        searchLoaded: true,
        error: null,
      };
    case collectionsActionTypes.TOGGLE_SHOP_ITEMS_WISHLIST:
      return {
        ...state,
        shopItems: toggleShopItemsWishlist(
          state.shopItems,
          action.payload.item
        ),
      };
    case collectionsActionTypes.FILTER_COLORS:
      return { ...state, filteredColors: action.payload, error: null };
    case collectionsActionTypes.FILTER_SIZES:
      return { ...state, filteredSizes: action.payload, error: null };
    case collectionsActionTypes.FILTER_FIT:
      return { ...state, filteredFit: action.payload, error: null };
    case collectionsActionTypes.FILTER_TYPE:
      return { ...state, filteredType: action.payload, error: null };
    case collectionsActionTypes.ORDER_SHOP_ITEMS_PRICE_ASCENDING:
      return {
        ...state,
        ascendingOrder: true,
        descendingOrder: false,
        error: null,
      };
    case collectionsActionTypes.ORDER_SHOP_ITEMS_PRICE_DESCENDING:
      return {
        ...state,
        ascendingOrder: false,
        descendingOrder: true,
        error: null,
      };
    case collectionsActionTypes.RESET_ORDER_SHOP_ITEMS:
      return {
        ...state,
        ascendingOrder: false,
        descendingOrder: false,
        error: null,
      };
    case collectionsActionTypes.RESET_IN_PAIRS_VIEW:
      return {
        ...state,
        inPairsView: false,
        error: null,
      };
    case collectionsActionTypes.SET_IN_PAIRS_VIEW:
      return {
        ...state,
        inPairsView: true,
        error: null,
      };
    case collectionsActionTypes.FETCH_SHOP_ITEMS_FAILURE:
      return {
        ...state,
        shopItems: null,
        pictures: null,
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
    case collectionsActionTypes.FETCH_PICTURES_FAILURE:
      return {
        ...state,
        pictures: null,
        error: action.payload,
      };
    case collectionsActionTypes.FETCH_ITEM_FAILURE:
      return {
        ...state,
        shopItems: null,
        error: action.payload,
      };
    case collectionsActionTypes.CLEAR_SHOP_ITEMS:
      return {
        ...state,
        shopItems: null,
      };
    case collectionsActionTypes.FETCH_SEARCH_FAILURE:
      return {
        ...state,
        shopItems: null,
        error: action.payload,
        searchLoaded: true,
      };
    case collectionsActionTypes.RESET_SEARCH_LOADED:
      return {
        ...state,
        searchLoaded: false,
      };
    default:
      return state;
  }
};

export default collectionsReducer;
