import { createSelector } from "reselect";
import { getItems } from "../../helpers/collections.helpers";

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

export const selectDescendingOrdered = createSelector(
  [selectCollection],
  (collections) => (collections ? collections.descendingOrdered : null)
);

export const selectAscendingOrdered = createSelector(
  [selectCollection],
  (collections) => (collections ? collections.ascendingOrdered : null)
);

export const selectReducedDisplayedItems = createSelector(
  [selectCollection],
  (collections) => (collections ? collections.reducedDisplayedItems : null)
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
                if (arrayItem["Sizes"].size === sizeItem)
                  fit.forEach((fitItem) => {
                    if (arrayItem["Fit"] === fitItem)
                      accumulator = [...accumulator, arrayItem["Color"]];
                    return accumulator;
                  });
              });
            !sizes.length &&
              fit.length &&
              fit.forEach((fitItem) => {
                if (arrayItem["Fit"] === fitItem)
                  accumulator = [...accumulator, arrayItem["Color"]];
                return accumulator;
              });
            sizes.length &&
              !fit.length &&
              sizes.forEach((sizeItem) => {
                arrayItem["Sizes"].forEach((item) => {
                  if (item.size === sizeItem)
                    accumulator = [...accumulator, arrayItem["Color"]];
                  return accumulator;
                });
              });
            !sizes.length &&
              !fit.length &&
              accumulator.push(arrayItem["Color"]);
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
                if (arrayItem["Color"].name === colorItem)
                  fit.forEach((fitItem) => {
                    if (arrayItem["Fit"] === fitItem)
                      arrayItem["Sizes"].map((item) => {
                        accumulator = [...accumulator, item.size];
                      });
                    return accumulator;
                  });
              });
            !colors.length &&
              fit.length &&
              fit.forEach((fitItem) => {
                if (arrayItem["Fit"] === fitItem)
                  arrayItem["Sizes"].map((item) => {
                    accumulator = [...accumulator, item.size];
                  });
                return accumulator;
              });
            colors.length &&
              !fit.length &&
              colors.forEach((colorItem) => {
                if (arrayItem["Color"].name === colorItem)
                  arrayItem["Sizes"].map((item) => {
                    accumulator = [...accumulator, item.size];
                  });
                return accumulator;
              });
            !colors.length &&
              !fit.length &&
              arrayItem["Sizes"].map((item) => {
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
                if (arrayItem["Color"].name === colorItem)
                  sizes.forEach((sizeItem) => {
                    arrayItem["Sizes"].forEach((item) => {
                      if (item.size === sizeItem)
                        accumulator = [...accumulator, arrayItem["Fit"]];
                      return accumulator;
                    });
                  });
              });
            !colors.length &&
              sizes.length &&
              sizes.forEach((sizeItem) => {
                arrayItem["Sizes"].forEach((item) => {
                  if (item.size === sizeItem)
                    accumulator = [...accumulator, arrayItem["Fit"]];
                  return accumulator;
                });
              });
            colors.length &&
              !sizes.length &&
              colors.forEach((colorItem) => {
                if (arrayItem["Color"].name === colorItem)
                  accumulator = [...accumulator, arrayItem["Fit"]];
                return accumulator;
              });
            !colors.length &&
              !sizes.length &&
              accumulator.push(arrayItem["Fit"]);
            return accumulator;
          }, [])
          .reduce((accum, item) => {
            return accum.includes(item) ? accum : [...accum, item];
          }, [])
      : null
);

export const selectSectionExtended = createSelector(
  [selectSection],
  (section) =>
    section
      ? section.reduce((accumulator, arrayItem) => {
          const items = getItems(
            section,
            arrayItem["Name"],
            arrayItem["Color"]
          );
          accumulator.push(items);
          return accumulator;
        }, [])
      : null
);

export const selectFilteredSection = createSelector(
  [selectSectionExtended, (_, colors, sizes, fit) => ({ colors, sizes, fit })],
  (sectionExtended, { colors, sizes, fit }) =>
    sectionExtended
      ? sectionExtended
          .reduce((accumulator, arrayItem) => {
            colors.length &&
              sizes.length &&
              fit.length &&
              colors.forEach((colorItem) => {
                if (arrayItem[0]["Color"].name === colorItem)
                  sizes.forEach((sizeItem) => {
                    arrayItem[0]["Sizes"].forEach((item) => {
                      if (item.size === sizeItem) {
                        fit.forEach((fitItem) => {
                          if (fitItem === arrayItem[0]["Fit"])
                            accumulator = [...accumulator, arrayItem];
                        });
                      }
                      return accumulator;
                    });
                  });
              });
            colors.length &&
              sizes.length &&
              !fit.length &&
              colors.forEach((colorItem) => {
                if (arrayItem[0]["Color"].name === colorItem)
                  sizes.forEach((sizeItem) => {
                    arrayItem[0]["Sizes"].forEach((item) => {
                      if (item.size === sizeItem)
                        accumulator = [...accumulator, arrayItem];
                      return accumulator;
                    });
                  });
              });
            colors.length &&
              !sizes.length &&
              fit.length &&
              colors.forEach((colorItem) => {
                if (arrayItem[0]["Color"].name === colorItem)
                  fit.forEach((fitItem) => {
                    if (arrayItem[0]["Fit"] === fitItem)
                      accumulator = [...accumulator, arrayItem];
                    return accumulator;
                  });
              });
            !colors.length &&
              sizes.length &&
              fit.length &&
              sizes.forEach((sizeItem) => {
                arrayItem["Sizes"].forEach((item) => {
                  if (item.size === sizeItem)
                    fit.forEach((fitItem) => {
                      if (arrayItem[0]["Fit"] === fitItem)
                        accumulator = [...accumulator, arrayItem];
                      return accumulator;
                    });
                });
              });
            colors.length &&
              !sizes.length &&
              !fit.length &&
              colors.forEach((colorItem) => {
                if (arrayItem[0]["Color"].name === colorItem)
                  accumulator = [...accumulator, arrayItem];
                return accumulator;
              });
            !colors.length &&
              sizes.length &&
              !fit.length &&
              sizes.forEach((sizeItem) => {
                arrayItem[0]["Sizes"].forEach((item) => {
                  if (item.size === sizeItem)
                    accumulator = [...accumulator, arrayItem];
                  return accumulator;
                });
              });
            !colors.length &&
              !sizes.length &&
              fit.length &&
              fit.forEach((fitItem) => {
                if (arrayItem[0]["Fit"] === fitItem)
                  accumulator = [...accumulator, arrayItem];
                return accumulator;
              });
            !colors.length &&
              !sizes.length &&
              !fit.length &&
              accumulator.push(arrayItem);
            return accumulator;
          }, [])
          .reduce((accum, item) => {
            return accum.includes(item) ? accum : [...accum, item];
          }, [])
      : null
);

export const selectItem = createSelector(
  [selectSectionExtended, (_, reference) => ({ reference })],
  (sectionExtended, { reference }) =>
    sectionExtended
      ? sectionExtended.filter((arrayItem) => {
          if (arrayItem[0]["Reference"] === reference) {
            return arrayItem;
          }
        })
      : null
);
