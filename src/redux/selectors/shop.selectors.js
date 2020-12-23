import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectSearchResults = createSelector(
    [selectShop],
    (shop) => shop && shop.searchResults
  );