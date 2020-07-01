import { createSelector } from "reselect";

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

export const selectFilteredSection = createSelector(
  [selectSection, (_, colors, sizes, fit) => ({ colors, sizes, fit })],
  (section, { colors, sizes, fit }) =>
    section
      ? section
          .reduce((accumulator, arrayItem) => {
            colors.length &&
              sizes.length &&
              fit.length &&
              colors.forEach((colorItem) => {
                if (arrayItem["Color"].name === colorItem)
                  sizes.forEach((sizeItem) => {
                    arrayItem["Sizes"].forEach((item) => {
                      if (item.size === sizeItem) {
                        fit.forEach((fitItem) => {
                          if (fitItem === arrayItem["Fit"])
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
                if (arrayItem["Color"].name === colorItem)
                  sizes.forEach((sizeItem) => {
                    arrayItem["Sizes"].forEach((item) => {
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
                if (arrayItem["Color"].name === colorItem)
                  fit.forEach((fitItem) => {
                    if (arrayItem["Fit"] === fitItem)
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
                      if (arrayItem["Fit"] === fitItem)
                        accumulator = [...accumulator, arrayItem];
                      return accumulator;
                    });
                });
              });
            colors.length &&
              !sizes.length &&
              !fit.length &&
              colors.forEach((colorItem) => {
                if (arrayItem["Color"].name === colorItem)
                  accumulator = [...accumulator, arrayItem];
                return accumulator;
              });
            !colors.length &&
              sizes.length &&
              !fit.length &&
              sizes.forEach((sizeItem) => {
                arrayItem["Sizes"].forEach((item) => {
                  if (item.size === sizeItem)
                    accumulator = [...accumulator, arrayItem];
                  return accumulator;
                });
              });
            !colors.length &&
              !sizes.length &&
              fit.length &&
              fit.forEach((fitItem) => {
                if (arrayItem["Fit"] === fitItem)
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
