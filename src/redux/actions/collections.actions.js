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

export const fetchShopItemsStart = (url, query, wishlistItems) => ({
  type: collectionsActionTypes.FETCH_SHOP_ITEMS_START,
  payload: { url, query, wishlistItems },
});

export const fetchShopItemsSuccess = (items, shopItemsPictures) => ({
  type: collectionsActionTypes.FETCH_SHOP_ITEMS_SUCCESS,
  payload: { items, shopItemsPictures },
});

export const fetchShopItemsFailure = (error) => ({
  type: collectionsActionTypes.FETCH_SHOP_ITEMS_FAILURE,
  payload: error,
});

export const fetchItemStart = (url, query, wishlistItems) => ({
  type: collectionsActionTypes.FETCH_ITEM_START,
  payload: { url, query, wishlistItems },
});

export const fetchItemSuccess = (item) => ({
  type: collectionsActionTypes.FETCH_ITEM_SUCCESS,
  payload: item,
});

export const fetchItemFailure = (error) => ({
  type: collectionsActionTypes.FETCH_ITEM_FAILURE,
  payload: error,
});

export const fetchItemByConditionStart = (
  collection,
  condition,
  reference,
  color,
  wishlistItems
) => ({
  type: collectionsActionTypes.FETCH_ITEM_BY_CONDITION_START,
  payload: { collection, condition, reference, color, wishlistItems },
});

export const fetchItemByConditionSuccess = (item) => ({
  type: collectionsActionTypes.FETCH_ITEM_BY_CONDITION_SUCCESS,
  payload: item,
});

export const fetchItemByConditionFailure = (error) => ({
  type: collectionsActionTypes.FETCH_ITEM_BY_CONDITION_FAILURE,
  payload: error,
});

export const fetchItemByConditionOverallStart = (
  condition,
  reference,
  color,
  wishlistItems
) => ({
  type: collectionsActionTypes.FETCH_ITEM_BY_CONDITION_OVERALL_START,
  payload: { condition, reference, color, wishlistItems },
});

export const fetchItemByConditionOverallSuccess = (item) => ({
  type: collectionsActionTypes.FETCH_ITEM_BY_CONDITION_OVERALL_SUCCESS,
  payload: item,
});

export const fetchItemByConditionOverallFailure = (error) => ({
  type: collectionsActionTypes.FETCH_ITEM_BY_CONDITION_OVERALL_FAILURE,
  payload: error,
});

export const fetchSearchStart = (search) => ({
  type: collectionsActionTypes.FETCH_SEARCH_START,
  payload: { search },
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
  type: collectionsActionTypes.ORDER_SHOP_ITEMS_PRICE_ASCENDING,
});

export const setDescendingOrder = () => ({
  type: collectionsActionTypes.ORDER_SHOP_ITEMS_PRICE_DESCENDING,
});

export const resetOrder = () => ({
  type: collectionsActionTypes.RESET_ORDER_SHOP_ITEMS,
});

export const resetInPairsView = () => ({
  type: collectionsActionTypes.RESET_IN_PAIRS_VIEW,
});

export const setInPairsView = () => ({
  type: collectionsActionTypes.SET_IN_PAIRS_VIEW,
});

export const toggleShopItemsWishlist = (item, user) => ({
  type: collectionsActionTypes.TOGGLE_SHOP_ITEMS_WISHLIST,
  payload: { item, user },
});

export const clearShopItems = () => ({
  type: collectionsActionTypes.CLEAR_SHOP_ITEMS,
});

export const resetSearchLoaded = () => ({
  type: collectionsActionTypes.RESET_SEARCH_LOADED,
});
