import wishlistActionTypes from "../types/wishlist.types";

export const toggleWishlistItem = (item) => ({
  type: wishlistActionTypes.TOGGLE_WISHLIST_ITEM,
  payload: item,
});

export const addItemToWishlist = (item) => ({
  type: wishlistActionTypes.ADD_ITEM_TO_WISHLIST,
  payload: { item },
});

export const removeItemFromWishlist = (item) => ({
  type: wishlistActionTypes.REMOVE_ITEM_FROM_WISHLIST,
  payload: item,
});

export const addFromWishlistToCart = (item, selectedSize) => ({
  type: wishlistActionTypes.ADD_FROM_WISHLIST_TO_CART,
  payload: { item, selectedSize },
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
