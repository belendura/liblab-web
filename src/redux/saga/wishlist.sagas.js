import { takeLatest, put, all, call } from "redux-saga/effects";

import collectionsActionTypes from "../types/collections.types";
import { toggleItem } from "../actions/wishlist.actions";

export function* addToWishlist({ payload }) {
  yield put(toggleItem(payload));
}

export function* onToggleWishlist() {
  yield takeLatest(collectionsActionTypes.TOGGLE_WISHLIST, addToWishlist);
}

export function* wishlistSagas() {
  yield all([call(onToggleWishlist)]);
}
