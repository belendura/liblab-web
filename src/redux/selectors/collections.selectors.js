import { createSelector } from "reselect";

import { setSectionFilter } from "../utils/collections.utils";

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

export const selectSectionPicture = createSelector(
  [selectPictures],
  (pictures) => (pictures ? pictures.sectionPictures : null)
);

export const selectSection = createSelector([selectCollection], (collections) =>
  collections ? collections.section : null
);

export const selectSearchLoaded = createSelector([selectCollection], (collections) =>
  collections ? collections.searchLoaded : null
);

export const selectSearchParams = createSelector([selectCollection], (collections) =>
  collections ? collections.searchParams : null
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

export const selectGridView = createSelector(
  [selectCollection],
  (collections) => (collections ? collections.gridView : null)
);

export const selectAscendingOrder = createSelector(
  [selectCollection],
  (collections) => (collections ? collections.ascendingOrder : null)
);

export const selectDescendingOrder = createSelector(
  [selectCollection],
  (collections) => (collections ? collections.descendingOrder : null)
);

export const selectSectionColorOptions = createSelector(
  [selectSection, (_, sizes, fit) => ({ sizes, fit })],
  (section, { sizes, fit }) =>
    section
      ? section
          .reduce((accumulator, arrayItem) => {
            sizes.length &&
              fit.length &&
              sizes.forEach((sizeItem) => {
                if (arrayItem.sizes.size === sizeItem)
                  fit.forEach((fitItem) => {
                    if (arrayItem.fit === fitItem)
                      accumulator = [...accumulator, arrayItem.color];
                    return accumulator;
                  });
              });
            !sizes.length &&
              fit.length &&
              fit.forEach((fitItem) => {
                if (arrayItem.fit === fitItem)
                  accumulator = [...accumulator, arrayItem.color];
                return accumulator;
              });
            sizes.length &&
              !fit.length &&
              sizes.forEach((sizeItem) => {
                arrayItem.sizes.forEach((item) => {
                  if (item.size === sizeItem)
                    accumulator = [...accumulator, arrayItem.color];
                  return accumulator;
                });
              });
            !sizes.length &&
              !fit.length &&
              arrayItem &&
              accumulator.push(arrayItem.color);
            return accumulator;
          }, [])
          .reduce((accum, item) => {
            if (accum.some((newItem) => newItem.code === item.code)) {
              accum = [...accum];
            } else {
              accum = [...accum, item];
            }
            return accum;
          }, [])
      : null
);

export const selectSectionSizeOptions = createSelector(
  [selectSection, (_, colors, fit) => ({ colors, fit })],
  (section, { colors, fit }) =>
    section
      ? section
          .reduce((accumulator, arrayItem) => {
            colors.length &&
              fit.length &&
              colors.forEach((colorItem) => {
                if (arrayItem.color.code === colorItem)
                  fit.forEach((fitItem) => {
                    if (arrayItem.fit === fitItem)
                      arrayItem.sizes.map((item) => {
                        accumulator = [...accumulator, item.size];
                      });
                    return accumulator;
                  });
              });
            !colors.length &&
              fit.length &&
              fit.forEach((fitItem) => {
                if (arrayItem.fit === fitItem)
                  arrayItem.sizes.map((item) => {
                    accumulator = [...accumulator, item.size];
                  });
                return accumulator;
              });
            colors.length &&
              !fit.length &&
              colors.forEach((colorItem) => {
                if (arrayItem.color.code === colorItem)
                  arrayItem.sizes.map((item) => {
                    accumulator = [...accumulator, item.size];
                  });
                return accumulator;
              });
            !colors.length &&
              !fit.length &&
              arrayItem &&
              arrayItem.sizes.map((item) => {
                accumulator = [...accumulator, item.size];
              });
            return accumulator;
          }, [])
          .reduce((accum, item) => {
            return accum.includes(item) ? accum : [...accum, item];
          }, [])
      : null
);

export const selectSectionFitOptions = createSelector(
  [selectSection, (_, colors, sizes) => ({ colors, sizes })],
  (section, { colors, sizes }) =>
    section
      ? section
          .reduce((accumulator, arrayItem) => {
            colors.length &&
              sizes.length &&
              colors.forEach((colorItem) => {
                if (arrayItem.color.code === colorItem)
                  sizes.forEach((sizeItem) => {
                    arrayItem.sizes.forEach((item) => {
                      if (item.size === sizeItem)
                        accumulator = [...accumulator, arrayItem.fit];
                      return accumulator;
                    });
                  });
              });
            !colors.length &&
              sizes.length &&
              sizes.forEach((sizeItem) => {
                arrayItem.sizes.forEach((item) => {
                  if (item.size === sizeItem)
                    accumulator = [...accumulator, arrayItem.fit];
                  return accumulator;
                });
              });
            colors.length &&
              !sizes.length &&
              colors.forEach((colorItem) => {
                if (arrayItem.color.code === colorItem)
                  accumulator = [...accumulator, arrayItem.fit];
                return accumulator;
              });
            !colors.length &&
              !sizes.length &&
              arrayItem &&
              accumulator.push(arrayItem.fit);
            return accumulator;
          }, [])
          .reduce((accum, item) => {
            return accum.includes(item) ? accum : [...accum, item];
          }, [])
      : null
);

export const selectFilteredSection = createSelector(
  [selectSection, (_, colors, sizes, fit) => ({ colors, sizes, fit })],
  (section, { colors, sizes, fit }) =>
    section ? setSectionFilter(section, colors, sizes, fit) : null
);

export const selectItem = createSelector([selectCollection], (collections) =>
  collections ? collections.selectedItem : null
);

export const selectItemByColor = createSelector(
  [selectSection, (_, reference, color) => ({ reference, color })],
  (section, { reference, color }) =>
    section
      ? section.find((arrayItem) => {
          if (
            arrayItem.reference === reference &&
            arrayItem.color.name === color
          ) {
            return arrayItem;
          }
        })
      : null
);
