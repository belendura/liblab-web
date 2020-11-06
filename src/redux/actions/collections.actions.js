import collectionsActionTypes from "../types/collections.types";

export const fetchShopMenuStart = () => ({
  type: collectionsActionTypes.FETCH_SHOP_MENU_START,
});

export const fetchShopMenuSuccess = (menu) => ({
  type: collectionsActionTypes.FETCH_SHOP_MENU_SUCCESS,
  payload: menu,
});

export const fetchShopMenuFailure = (error) => ({
  type: collectionsActionTypes.FETCH_SHOP_MENU_FAILURE,
  payload: error,
});

export const fetchCollectionByConditionStart = (condition, wishlistItems) => ({
  type: collectionsActionTypes.FETCH_COLLECTION_BY_CONDITION_START,
  payload: { condition, wishlistItems },
});

export const fetchCollectionByConditionSuccess = (collection) => ({
  type: collectionsActionTypes.FETCH_COLLECTION_BY_CONDITION_SUCCESS,
  payload: collection,
});

export const fetchCollectionByConditionFailure = (error) => ({
  type: collectionsActionTypes.FETCH_COLLECTION_BY_CONDITION_FAILURE,
  payload: error,
});

export const fetchSectionStart = (collection, section, wishlistItems) => ({
  type: collectionsActionTypes.FETCH_SECTION_START,
  payload: { collection, section, wishlistItems },
});

export const fetchSectionSuccess = (section) => ({
  type: collectionsActionTypes.FETCH_SECTION_SUCCESS,
  payload: section,
});

export const fetchSectionFailure = (error) => ({
  type: collectionsActionTypes.FETCH_SECTION_FAILURE,
  payload: error,
});

export const filterColors = (color) => ({
  type: collectionsActionTypes.FILTER_COLORS,
  payload: color,
});

export const filterSizes = (sizes) => ({
  type: collectionsActionTypes.FILTER_SIZES,
  payload: sizes,
});

export const filterFit = (fit) => ({
  type: collectionsActionTypes.FILTER_FIT,
  payload: fit,
});

export const setAscendingOrder = () => ({
  type: collectionsActionTypes.ORDER_SECTION_PRICE_ASCENDING,
});

export const setDescendingOrder = () => ({
  type: collectionsActionTypes.ORDER_SECTION_PRICE_DESCENDING,
});

export const resetOrder = () => ({
  type: collectionsActionTypes.RESET_ORDER_SECTION,
});

export const resetGridView = () => ({
  type: collectionsActionTypes.RESET_GRID_VIEW,
});

export const setGridView = () => ({
  type: collectionsActionTypes.SET_GRID_VIEW,
});

export const selectShopItem = (item) => ({
  type: collectionsActionTypes.SELECT_ITEM,
  payload: item,
});

export const toggleSectionWishlist = (item) => ({
  type: collectionsActionTypes.TOGGLE_SECTION_WISHLIST,
  payload: item,
});
