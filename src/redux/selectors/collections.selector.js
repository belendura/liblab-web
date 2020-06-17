import { createSelector } from "reselect";

const selectCollection = (state) => state.collections;

export const selectSection = createSelector([selectCollection], (collections) =>
  collections ? collections.section : null
);

export const selectSectionSizes = createSelector([selectSection], (section) =>
  section
    ? section
        .reduce((accumulator, arrayItem) => {
          arrayItem["Sizes"].map((item) => {
            accumulator = [...accumulator, item.size];
            return accumulator;
          });
          return accumulator;
        }, [])
        .reduce((accum, item) => {
          return accum.includes(item) ? accum : [...accum, item];
        }, [])
    : null
);

export const selectSectionColors = createSelector([selectSection], (section) =>
  section
    ? section
        .reduce((accumulator, arrayItem) => {
          return (accumulator = [...accumulator, arrayItem["Color"]]);
        }, [])
        .reduce((accum, item) => {
          return accum.includes(item) ? accum : [...accum, item];
        }, [])
    : null
);
