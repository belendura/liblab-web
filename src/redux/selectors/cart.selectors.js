import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);
export const selectSizeItem = createSelector(
  [selectCart],
  (cart) => cart.selectedSize
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.length > 0
      ? cartItems.reduce(
          (accumulatedQuantity, cartItem) =>
            accumulatedQuantity + cartItem.quantity,
          0
        )
      : 0
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.length > 0
    ? cartItems.reduce(
        (accumulatedQuantity, cartItem) =>
          accumulatedQuantity + cartItem.quantity * cartItem.LastPrice,
        0
      )
    : 0
);
