import wishlistActionTypes from "../types/wishlist.types";

export const toggleWishlistItem = (item) => ({
  type: wishlistActionTypes.TOGGLE_WISHLIST_ITEM,
  payload: item,
});

export const removeItemFromWishlist = (item) => ({
  type: wishlistActionTypes.REMOVE_ITEM_FROM_WISHLIST,
  payload: item,
});

export const selectSize = (item, size) => ({
  type: wishlistActionTypes.SELECT_SIZE,
  payload: { item, size },
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
