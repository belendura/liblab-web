import collectionsActionTypes from "../types/collections.types";

export const fetchCollectionsStart = (collection, section) => ({
  type: collectionsActionTypes.FETCH_COLLECTIONS_START,
  payload: { collection, section },
});

export const fetchCollectionsSuccess = (collections) => ({
  type: collectionsActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

export const fetchCollectionsFailure = (error) => ({
  type: collectionsActionTypes.FETCH_COLLECTIONS_FAILURE,
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
  type: collectionsActionTypes.ORDER_COLLECTIONS_PRICE_ASCENDING,
});

export const descendingOrder = () => ({
  type: collectionsActionTypes.ORDER_COLLECTIONS_PRICE_DESCENDING,
});

export const resetOrder = () => ({
  type: collectionsActionTypes.RESET_ORDER_COLLECTIONS,
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
