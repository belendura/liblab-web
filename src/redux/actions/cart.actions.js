import cartActionTypes from "../types/cart.types";

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const displayCart = () => ({
  type: cartActionTypes.DISPLAY_CART,
});

export const addItemFromDropup = (item, size) => ({
  type: cartActionTypes.ADD_ITEM_FROM_DROPUP,
  payload: { item, size },
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const addItemFromWishlist = (item) => ({
  type: cartActionTypes.ADD_ITEM_FROM_WISHLIST,
  payload: item,
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

// export const clearItemFromCart = (item) => ({
//   type: cartActionTypes.CLEAR_ITEM_FROM_CART,
//   payload: item,
// });
