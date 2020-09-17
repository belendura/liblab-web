import collectionsActionTypes from "../types/collections.types";

export const fetchCollectionStart = (condition) => ({
  type: collectionsActionTypes.FETCH_COLLECTION_START,
  payload: { condition },
});

export const fetchCollectionSuccess = (collection) => ({
  type: collectionsActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collection,
});

export const fetchCollectionFailure = (error) => ({
  type: collectionsActionTypes.FETCH_COLLECTION_FAILURE,
  payload: error,
});

export const fetchSectionStart = (collection, section) => ({
  type: collectionsActionTypes.FETCH_SECTION_START,
  payload: { collection, section },
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

export const ascendingOrder = () => ({
  type: collectionsActionTypes.ORDER_SECTION_PRICE_ASCENDING,
});

export const descendingOrder = () => ({
  type: collectionsActionTypes.ORDER_SECTION_PRICE_DESCENDING,
});

export const resetOrder = () => ({
  type: collectionsActionTypes.RESET_ORDER_SECTION,
});

export const reduceDisplayedItems = () => ({
  type: collectionsActionTypes.REDUCE_DISPLAYED_ITEMS,
});

export const enlargeDisplayedItems = () => ({
  type: collectionsActionTypes.ENLARGE_DISPLAYED_ITEMS,
});

export const selectShopItem = (item) => ({
  type: collectionsActionTypes.SELECT_ITEM,
  payload: item,
});

export const toggleWishlist = (item) => ({
  type: collectionsActionTypes.TOGGLE_WISHLIST,
  payload: item,
});
