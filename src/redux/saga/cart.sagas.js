import { takeLatest, put, all, call } from "redux-saga/effects";

import userActionTypes from "../types/user.types";

import { clearCart } from "../actions/cart.actions";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSucces() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSucces)]);
}
