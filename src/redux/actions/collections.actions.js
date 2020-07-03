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

export const filterCollections = (colors, sizes, fit) => ({
  type: collectionsActionTypes.FILTER_COLLECTIONS,
  payload: { colors, sizes, fit },
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
