import { createSelector } from "reselect";

export const selectSizesGuide = (state) => state.sizesGuide;

export const selectSizesGuideInfo = createSelector(
  [selectSizesGuide],
  (sizesGuide) => (sizesGuide ? sizesGuide.sizesGuideInfo : null)
);
