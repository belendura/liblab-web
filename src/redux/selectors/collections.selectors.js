import { createSelector } from "reselect";

import {
  setShopItemsFilter,
  getFilteredColorOptions,
  getFilteredSizeOptions,
  getFilteredFitOptions,
} from "../utils/collections.utils";

const selectCollection = (state) => state.collections;

export const selectShopMenu = createSelector(
  [selectCollection],
  (collections) => (collections ? collections.shopMenu : null)
);

export const selectShopMenuPictures = createSelector(
  [selectCollection],
  (collections) => (collections ? collections.shopMenuPictures : null)
);

export const selectPictures = createSelector(
  [selectCollection],
  (collections) => (collections ? collections.pictures : null)
);

export const selectCollectionsPictures = createSelector(
  [selectPictures],
  (pictures) => (pictures ? pictures.collections : null)
);

export const selectCarousel = createSelector([selectPictures], (pictures) =>
  pictures ? pictures.carousel : null
);

export const selectShopItemsPicture = createSelector(
  [selectPictures],
  (pictures) => (pictures ? pictures.shopItemsPictures : null)
);

export const selectShopItems = createSelector(
  [selectCollection],
  (collections) => (collections ? collections.shopItems : null)
);

export const selectSearchLoaded = createSelector(
  [selectCollection],
  (collections) => (collections ? collections.searchLoaded : null)
);

export const selectSearchParams = createSelector(
  [selectCollection],
  (collections) => (collections ? collections.searchParams : null)
);

export const selectFilteredColors = createSelector(
  [selectCollection],
  (collections) => (collections ? collections.filteredColors : null)
);

export const selectFilteredSizes = createSelector(
  [selectCollection],
  (collections) => (collections ? collections.filteredSizes : null)
);

export const selectFilteredFit = createSelector(
  [selectCollection],
  (collections) => (collections ? collections.filteredFit : null)
);

export const selectInPairsView = createSelector(
  [selectCollection],
  (collections) => (collections ? collections.inPairsView : null)
);

export const selectAscendingOrder = createSelector(
  [selectCollection],
  (collections) => (collections ? collections.ascendingOrder : null)
);

export const selectDescendingOrder = createSelector(
  [selectCollection],
  (collections) => (collections ? collections.descendingOrder : null)
);

export const selectShopItemsColorOptions = createSelector(
  [
    selectShopItems,
    selectSearchParams,
    (_, condition, sizes, fit) => ({ condition, sizes, fit }),
  ],
  (shopItems, searchParams, { condition, sizes, fit }) =>
    shopItems
      ? getFilteredColorOptions(shopItems, searchParams, condition, sizes, fit)
      : null
);

export const selectShopItemsSizeOptions = createSelector(
  [
    selectShopItems,
    selectSearchParams,
    (_, condition, colors, fit) => ({ condition, colors, fit }),
  ],
  (shopItems, searchParams, { condition, colors, fit }) =>
    shopItems
      ? getFilteredSizeOptions(shopItems, searchParams, condition, colors, fit)
      : null
);

export const selectShopItemsFitOptions = createSelector(
  [
    selectShopItems,
    selectSearchParams,
    (_, condition, colors, sizes) => ({ condition, colors, sizes }),
  ],
  (shopItems, searchParams, { condition, colors, sizes }) =>
    shopItems
      ? getFilteredFitOptions(shopItems, searchParams, condition, colors, sizes)
      : null
);

export const selectFilteredShopItems = createSelector(
  [selectShopItems, (_, colors, sizes, fit) => ({ colors, sizes, fit })],
  (shopItems, { colors, sizes, fit }) =>
    shopItems ? setShopItemsFilter(shopItems, colors, sizes, fit) : null
);

export const selectItem = createSelector([selectCollection], (collections) =>
  collections ? collections.selectedItem : null
);

export const selectItemByColor = createSelector(
  [selectShopItems, (_, reference, color) => ({ reference, color })],
  (shopItems, { reference, color }) =>
    shopItems
      ? shopItems.find((shopItem) => {
          if (
            shopItem.reference === reference &&
            shopItem.color.name === color
          ) {
            return shopItem;
          }
        })
      : null
);
