import { createSelector } from "reselect";

const selectWishlist = (state) => state.wishlist;

export const selectWishlistItems = createSelector(
  [selectWishlist],
  (wishlist) => wishlist.wishlistItems
);

export const selectWishlistItem = createSelector(
  [selectWishlistItems, (_, item) => ({ item })],
  (wishlistItems, { item }) =>
    wishlistItems
      ? wishlistItems.find((arrayItem) => {
          return arrayItem.id === item.id;
        })
      : null
);
