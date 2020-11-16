import sizesGuideActionTypes from "../types/sizes-guide.types";

export const fetchSizesGuideStart = (collection, section) => ({
  type: sizesGuideActionTypes.FETCH_SIZES_GUIDE_START,
  payload: { collection, section },
});

export const fetchSizesGuideSuccess = (sizesGuide) => ({
  type: sizesGuideActionTypes.FETCH_SIZES_GUIDE_SUCCESS,
  payload: sizesGuide,
});

export const fetchSizesGuideFailure = (error) => ({
  type: sizesGuideActionTypes.FETCH_SIZES_GUIDE_FAILURE,
  payload: error,
});
