import { createSelector } from "reselect";

import { setSectionFilter, getFilteredColorOptions, getFilteredSizeOptions, getFilteredFitOptions} from "../utils/collections.utils";

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
  [selectSection,selectSearchParams, (_, condition, sizes, fit) => ({ condition, sizes, fit })],
  (section, searchParams, { condition, sizes, fit }) =>
    section ? getFilteredColorOptions(section,searchParams, condition,sizes,fit)        
      : null
      
);

export const selectSectionSizeOptions = createSelector(
  [selectSection,selectSearchParams, (_, condition, colors, fit) => ({ condition, colors, fit })],
  (section,searchParams, { condition, colors, fit }) =>
    section
      ? getFilteredSizeOptions(section,searchParams,condition,colors,fit)    
      : null
);

export const selectSectionFitOptions = createSelector(
  [selectSection, selectSearchParams,(_, condition, colors, sizes) => ({ condition, colors, sizes })],
  (section, searchParams,{ condition,colors, sizes }) =>
    section
      ?getFilteredFitOptions(section,searchParams,condition,colors,sizes) 
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
