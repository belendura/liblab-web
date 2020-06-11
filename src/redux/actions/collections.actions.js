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
