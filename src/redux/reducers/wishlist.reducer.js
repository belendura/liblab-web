import wishlistActionTypes from "../types/wishlist.types";

import { updateWishlist } from "../utils/wishlist.utils";

const INITIAL_STATE = {
  wishlistItems: [],
  error: null,
};

const wishlistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case wishlistActionTypes.TOGGLE_WISHLIST_ITEM:
      return {
        ...state,
        wishlistItems: updateWishlist(state.wishlistItems, action.payload),
      };
    case wishlistActionTypes.REMOVE_ITEM_FROM_WISHLIST:
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter((item) => {
          return item !== action.payload;
        }),
      };
    case wishlistActionTypes.SELECT_SIZE:
      return {
        ...state,
        wishlistItems: state.wishlistItems.map((item) => {
          console.log("payload", action.payload);
          if (item === action.payload.item) {
            item = { ...item, selectedSize: action.payload.size };
          }
          return item;
        }),
      };
    case wishlistActionTypes.CLEAR_SIZE_SELECTION:
      return {
        ...state,
        wishlistItems: state.wishlistItems.map((item) => {
          if (item === action.payload) {
            item = { ...item, selectedSize: null };
          }
          return item;
        }),
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
