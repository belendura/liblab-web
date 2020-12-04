import cartActionTypes from "../types/cart.types";

import { addItemToCart, removeItemFromCart } from "../utils/cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  selectedSize: "",
  error: null,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case cartActionTypes.UPDATE_CART_SUCCESS:
      return {
        ...state,
        cartItems: action.payload,
      };
    case cartActionTypes.SELECT_SIZE:
      return {
        ...state,
        selectedSize: action.payload,
      };
    case cartActionTypes.CLEAR_SIZE:
      return {
        ...state,
        selectedSize: "",
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case cartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    case cartActionTypes.UPDATE_CART_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
