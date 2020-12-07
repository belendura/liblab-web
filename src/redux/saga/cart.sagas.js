import { takeLatest, put, all, call } from "redux-saga/effects";

import userActionTypes from "../types/user.types";
import wishlistActionTypes from "../types/wishlist.types";

import { clearCart, addItemFromWishlist } from "../actions/cart.actions";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSucces() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* addItemFromWishlistToCart({ payload }) {
  const { item } = payload;
  console.log("item in cart SAGAS", item);
  yield put(addItemFromWishlist(item));
}

export function* onAddFromWishlistToCart() {
  yield takeLatest(
    wishlistActionTypes.ADD_FROM_WISHLIST_TO_CART,
    addItemFromWishlistToCart
  );
}

export function* cartSagas() {
  yield all([call(onSignOutSucces), call(onAddFromWishlistToCart)]);
}
