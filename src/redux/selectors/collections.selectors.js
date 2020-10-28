import { createSelector } from "reselect";

import { setSectionFilter } from "../utils/collections.utils";

const selectCollection = (state) => state.collections;

export const selectSection = createSelector([selectCollection], (collections) =>
  collections ? collections.section : null
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
                if (arrayItem[0]["Sizes"].size === sizeItem)
                  fit.forEach((fitItem) => {
                    if (arrayItem[0]["Fit"] === fitItem)
                      accumulator = [...accumulator, arrayItem[0]["Color"]];
                    return accumulator;
                  });
              });
            !sizes.length &&
              fit.length &&
              fit.forEach((fitItem) => {
                if (arrayItem[0]["Fit"] === fitItem)
                  accumulator = [...accumulator, arrayItem[0]["Color"]];
                return accumulator;
              });
            sizes.length &&
              !fit.length &&
              sizes.forEach((sizeItem) => {
                arrayItem[0]["Sizes"].forEach((item) => {
                  if (item.size === sizeItem)
                    accumulator = [...accumulator, arrayItem[0]["Color"]];
                  return accumulator;
                });
              });
            !sizes.length &&
              !fit.length &&
              arrayItem.length &&
              accumulator.push(arrayItem[0]["Color"]);
            return accumulator;
          }, [])
          .reduce((accum, item) => {
            return accum.includes(item) ? accum : [...accum, item];
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
                if (arrayItem[0]["Color"].name === colorItem)
                  fit.forEach((fitItem) => {
                    if (arrayItem[0]["Fit"] === fitItem)
                      arrayItem[0]["Sizes"].map((item) => {
                        accumulator = [...accumulator, item.size];
                      });
                    return accumulator;
                  });
              });
            !colors.length &&
              fit.length &&
              fit.forEach((fitItem) => {
                if (arrayItem[0]["Fit"] === fitItem)
                  arrayItem[0]["Sizes"].map((item) => {
                    accumulator = [...accumulator, item.size];
                  });
                return accumulator;
              });
            colors.length &&
              !fit.length &&
              colors.forEach((colorItem) => {
                if (arrayItem[0]["Color"].name === colorItem)
                  arrayItem[0]["Sizes"].map((item) => {
                    accumulator = [...accumulator, item.size];
                  });
                return accumulator;
              });
            !colors.length &&
              !fit.length &&
              arrayItem.length &&
              arrayItem[0]["Sizes"].map((item) => {
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
                if (arrayItem[0]["Color"].name === colorItem)
                  sizes.forEach((sizeItem) => {
                    arrayItem[0]["Sizes"].forEach((item) => {
                      if (item.size === sizeItem)
                        accumulator = [...accumulator, arrayItem[0]["Fit"]];
                      return accumulator;
                    });
                  });
              });
            !colors.length &&
              sizes.length &&
              sizes.forEach((sizeItem) => {
                arrayItem[0]["Sizes"].forEach((item) => {
                  if (item.size === sizeItem)
                    accumulator = [...accumulator, arrayItem[0]["Fit"]];
                  return accumulator;
                });
              });
            colors.length &&
              !sizes.length &&
              colors.forEach((colorItem) => {
                if (arrayItem[0]["Color"].name === colorItem)
                  accumulator = [...accumulator, arrayItem[0]["Fit"]];
                return accumulator;
              });
            !colors.length &&
              !sizes.length &&
              arrayItem.length &&
              accumulator.push(arrayItem[0]["Fit"]);
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

export const selectItem = createSelector(
  [selectSection, (_, reference, color) => ({ reference, color })],
  (section, { reference, color }) =>
    section
      ? section.reduce((accumulator, arrayItem) => {
          if (
            arrayItem[0]["Reference"] === reference &&
            arrayItem[0]["Color"].name === color
          ) {
            arrayItem.forEach((item) => accumulator.push(item));
          }
          return accumulator;
        }, [])
      : null
);

export const selectSelectedShopItem = createSelector(
  [selectCollection],
  (collections) => (collections ? collections.selectedItem : null)
);
