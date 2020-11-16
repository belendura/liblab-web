import sizesGuideActionTypes from "../types/sizes-guide.types";

const INITIAL_STATE = {
  sizesGuideInfo: null,
  error: null,
};

export const sizesGuideReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case sizesGuideActionTypes.FETCH_SIZES_GUIDE_SUCCESS:
      return {
        ...state,
        sizesGuideInfo: action.payload,
        error: null,
      };
    case sizesGuideActionTypes.FETCH_SIZES_GUIDE_FAILURE:
      return {
        ...state,
        sizesGuideInfo: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default sizesGuideReducer;
