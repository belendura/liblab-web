import { takeLatest, put, all, call } from "redux-saga/effects";

import userActionTypes from "../types/user.types";
import wishlistActionTypes from "../types/wishlist.types";

import { clearCart, addItem } from "../actions/cart.actions";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSucces() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* addItemToCart({ payload }) {
  yield put(addItem(payload));
}

export function* onAddToCart() {
  yield takeLatest(wishlistActionTypes.ADD_TO_CART, addItemToCart);
}

export function* cartSagas() {
  yield all([call(onSignOutSucces), call(onAddToCart)]);
}
