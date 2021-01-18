import cartActionTypes from "../types/cart.types";

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const displayCart = () => ({
  type: cartActionTypes.DISPLAY_CART,
});

export const addItem = (item,selectedSize,user) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: {item,selectedSize, user}
});

export const selectSize = (item) => ({
  type: cartActionTypes.SELECT_SIZE,
  payload: item,
});

export const clearSize = () => ({
  type: cartActionTypes.CLEAR_SIZE,
});

export const removeItem = (item,user) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: {item,user }
});

export const clearItemFromCart= (item,user) =>({
  type: cartActionTypes.CLEAR_ITEM_FROM_CART,
  payload:{item,user}
});

export const clearCart = () => ({
  type: cartActionTypes.CLEAR_CART,
});

export const updateCartSuccess = (updatedCart) => ({
  type: cartActionTypes.UPDATE_CART_SUCCESS,
  payload: updatedCart,
});

export const updateCartFailure = (error) => ({
  type: cartActionTypes.UPDATE_CART_FAILURE,
  payload: error,
});

export const updateCartFromCheckOutSuccess = (updatedCart) => ({
  type: cartActionTypes.UPDATE_CART_FROM_CHECKOUT_SUCCESS,
  payload: updatedCart,
});

export const updateCartFromCheckOutFailure = (error) => ({
  type: cartActionTypes.UPDATE_CART_FROM_CHECKOUT_FAILURE,
  payload: error,
});
