import { createSelector } from "reselect";

const selectWishlist = (state) => state.wishlist;

export const selectWishlistItems = createSelector(
  [selectWishlist],
  (wishlist) => wishlist.wishlistItems
);

export const selectSizeItem = createSelector(
  [selectWishlist],
  (wishlist) => wishlist.selectedSize
);
