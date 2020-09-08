import wishlistActionTypes from "../types/wishlist.types";

import { toggleItem } from "../utils/wishlist.utils";

const INITIAL_STATE = {
  wishlistItems: [],
  selectedSize: "",
  error: null,
};

const wishlistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case wishlistActionTypes.TOGGLE_ITEM:
      return {
        ...state,
        wishlistItems: toggleItem(state.wishlistItems, action.payload),
      };

    case wishlistActionTypes.SELECT_SIZE:
      return {
        ...state,
        selectedSize: action.payload,
      };
    case wishlistActionTypes.CLEAR_SIZE:
      return {
        ...state,
        selectedSize: "",
      };

    case wishlistActionTypes.SELECT_SIZE:
      return {
        ...state,
        selectedSize: action.payload,
      };
    case wishlistActionTypes.CLEAR_SIZE:
      return {
        ...state,
        selectedSize: "",
      };

    case wishlistActionTypes.CLEAR_WISHLIST:
      return {
        ...state,
        wishlistItems: [],
      };
    case wishlistActionTypes.UPDATE_WISHLIST_SUCCESS:
      return {
        ...state,
        wishlistItems: action.payload,
      };
    case wishlistActionTypes.UPDATE_WISHLIST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default wishlistReducer;
