import { cartActionTypes } from "../types/cart.types";

export const toogleCartHidden = () => ({
  type: cartActionTypes.TOOGLE_CART_HIDDEN,
});

export const addItem = (item, selectedSize) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: { item, selectedSize },
});

export const selectSize = (item) => ({
  type: cartActionTypes.SELECT_SIZE,
  payload: item,
});

export const clearSize = () => ({
  type: cartActionTypes.CLEAR_SIZE,
});

export const removeItem = (item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: cartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const clearCart = () => ({
  type: cartActionTypes.CLEAR_CART,
});

export const orderItemsStart = (cartItems) => ({
  type: cartActionTypes.ORDER_ITEMS_START,
  payload: cartItems,
});

export const orderItemsSuccess = () => ({
  type: cartActionTypes.ORDER_ITEMS_SUCCESS,
});

export const orderItemsFailure = (error) => ({
  type: cartActionTypes.ORDER_ITEMS_FAILURE,
  payload: error,
});
