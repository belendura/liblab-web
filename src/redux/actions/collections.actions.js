import collectionsActionTypes from "../types/collections.types";

export const fetchHeaderStart = () => ({
  type: collectionsActionTypes.FETCH_HEADER_START,
});

export const fetchHeaderSuccess = ({ shopMenu, shopMenuPictures }) => ({
  type: collectionsActionTypes.FETCH_HEADER_SUCCESS,
  payload: { shopMenu, shopMenuPictures },
});

export const fetchHeaderFailure = (error) => ({
  type: collectionsActionTypes.FETCH_HEADER_FAILURE,
  payload: error,
});

export const fetchPicturesStart = (pictures) => ({
  type: collectionsActionTypes.FETCH_PICTURES_START,
  payload: { pictures },
});

export const fetchPicturesSuccess = (newPictures) => ({
  type: collectionsActionTypes.FETCH_PICTURES_SUCCESS,
  payload: newPictures,
});

export const fetchPicturesFailure = (error) => ({
  type: collectionsActionTypes.FETCH_PICTURES_FAILURE,
  payload: error,
});

export const fetchCollectionsByConditionStart = (condition, wishlistItems) => ({
  type: collectionsActionTypes.FETCH_COLLECTIONS_BY_CONDITION_START,
  payload: { condition, wishlistItems },
});

export const fetchCollectionsByConditionSuccess = (items, sectionPictures) => ({
  type: collectionsActionTypes.FETCH_COLLECTIONS_BY_CONDITION_SUCCESS,
  payload: { items, sectionPictures },
});

export const fetchCollectionsByConditionFailure = (error) => ({
  type: collectionsActionTypes.FETCH_COLLECTIONS_BY_CONDITION_FAILURE,
  payload: error,
});

export const fetchCollectionByConditionStart = (
  collection,
  condition,
  wishlistItems
) => ({
  type: collectionsActionTypes.FETCH_COLLECTION_BY_CONDITION_START,
  payload: { collection, condition, wishlistItems },
});

export const fetchCollectionByConditionSuccess = (items, sectionPictures) => ({
  type: collectionsActionTypes.FETCH_COLLECTION_BY_CONDITION_SUCCESS,
  payload: { items, sectionPictures },
});

export const fetchCollectionByConditionFailure = (error) => ({
  type: collectionsActionTypes.FETCH_COLLECTION_BY_CONDITION_FAILURE,
  payload: error,
});

export const fetchCollectionStart = (collection, wishlistItems) => ({
  type: collectionsActionTypes.FETCH_COLLECTION_START,
  payload: { collection, wishlistItems },
});

export const fetchCollectionSuccess = (items, sectionPictures) => ({
  type: collectionsActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: { items, sectionPictures },
});

export const fetchCollectionFailure = (error) => ({
  type: collectionsActionTypes.FETCH_COLLECTION_FAILURE,
  payload: error,
});
export const fetchSectionStart = (collection, section, wishlistItems) => ({
  type: collectionsActionTypes.FETCH_SECTION_START,
  payload: { collection, section, wishlistItems },
});

export const fetchSectionSuccess = (items, sectionPictures) => ({
  type: collectionsActionTypes.FETCH_SECTION_SUCCESS,
  payload: { items, sectionPictures },
});

export const fetchSectionFailure = (error) => ({
  type: collectionsActionTypes.FETCH_SECTION_FAILURE,
  payload: error,
});


export const fetchItemStart = (collection, section, reference, color, wishlistItems) => ({
  type: collectionsActionTypes.FETCH_ITEM_START,
  payload: { collection, section,reference, color, wishlistItems },
});

export const fetchItemSuccess = (item) => ({
  type: collectionsActionTypes.FETCH_ITEM_SUCCESS,
  payload:  item,
});

export const fetchItemFailure = (error) => ({
  type: collectionsActionTypes.FETCH_ITEM_FAILURE,
  payload: error,
});

export const fetchItemByConditionStart = (collection, condition, reference, color, wishlistItems) => ({
  type: collectionsActionTypes.FETCH_ITEM_BY_CONDITION_START,
  payload: { collection, condition,reference, color, wishlistItems },
});

export const fetchItemByConditionSuccess = (item) => ({
  type: collectionsActionTypes.FETCH_ITEM_BY_CONDITION_SUCCESS,
  payload:  item,
});

export const fetchItemByConditionFailure = (error) => ({
  type: collectionsActionTypes.FETCH_ITEM_BY_CONDITION_FAILURE,
  payload: error,
});

export const fetchItemByConditionOverallStart = ( condition, reference, color, wishlistItems) => ({
  type: collectionsActionTypes.FETCH_ITEM_BY_CONDITION_OVERALL_START,
  payload: { condition,reference, color, wishlistItems },
});

export const fetchItemByConditionOverallSuccess = (item) => ({
  type: collectionsActionTypes.FETCH_ITEM_BY_CONDITION_OVERALL_SUCCESS,
  payload:  item,
});

export const fetchItemByConditionOverallFailure = (error) => ({
  type: collectionsActionTypes.FETCH_ITEM_BY_CONDITION_OVERALL_FAILURE,
  payload: error,
});

export const fetchSearchStart = (search) => ({
  type: collectionsActionTypes.FETCH_SEARCH_START,
  payload: {search },
});

export const fetchSearchSuccess = (searchResults) => ({
  type: collectionsActionTypes.FETCH_SEARCH_SUCCESS,
  payload: searchResults,
});

export const fetchSearchFailure = (error) => ({
  type: collectionsActionTypes.FETCH_SEARCH_FAILURE,
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

export const filterType = (type) => ({
  type: collectionsActionTypes.FILTER_TYPE,
  payload: type,
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

export const toggleSectionWishlist = (item) => ({
  type: collectionsActionTypes.TOGGLE_SECTION_WISHLIST,
  payload: item,
});

export const clearSection = () => ({
  type: collectionsActionTypes.CLEAR_SECTION,

});

export const resetSearchLoaded = () => ({
  type: collectionsActionTypes.RESET_SEARCH_LOADED,

});
