import { cartActionTypes } from "../types/cart.types";
import { addItemToCart, removeItemFromCart } from "../utils/cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  selectedSize: "",
  error: null,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOOGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(
          state.cartItems,
          action.payload.item,
          action.payload.selectedSize
        ),
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
    case cartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case cartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    case cartActionTypes.ORDER_ITEMS_FAILURE:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default cartReducer;
