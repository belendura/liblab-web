import wishlistActionTypes from "../types/wishlist.types";

export const toggleItem = (item) => ({
  type: wishlistActionTypes.TOGGLE_ITEM,
  payload: item,
});

export const addItem = (item) => ({
  type: wishlistActionTypes.ADD_ITEM,
  payload: { item },
});

export const removeItem = (item) => ({
  type: wishlistActionTypes.REMOVE_ITEM,
  payload: item,
});

export const addToCart = (item) => ({
  type: wishlistActionTypes.ADD_TO_CART,
  payload: item,
});

export const selectSize = (item) => ({
  type: wishlistActionTypes.SELECT_SIZE,
  payload: item,
});

export const clearSize = () => ({
  type: wishlistActionTypes.CLEAR_SIZE,
});

export const clearWishlist = () => ({
  type: wishlistActionTypes.CLEAR_WISHLIST,
});

export const updateWishlistSuccess = (updatedWishlist) => ({
  type: wishlistActionTypes.UPDATE_WISHLIST_SUCCESS,
  payload: updatedWishlist,
});

export const updateWishlistFailure = (error) => ({
  type: wishlistActionTypes.UPDATE_WISHLIST_FAILURE,
  payload: error,
});
