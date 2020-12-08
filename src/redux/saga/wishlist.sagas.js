import { takeLatest, put, all, call } from "redux-saga/effects";

import userActionTypes from "../types/user.types";
import collectionsActionTypes from "../types/collections.types";
import cartActionTypes from "../types/cart.types";

import {
  toggleWishlistItem,
  clearWishlist,
  removeItemFromWishlist,
} from "../actions/wishlist.actions";

export function* addToWishlist({ payload }) {
  yield put(toggleWishlistItem(payload));
}

export function* onToggleSectionWishlist() {
  yield takeLatest(
    collectionsActionTypes.TOGGLE_SECTION_WISHLIST,
    addToWishlist
  );
}

export function* clearWishlistOnSignOut() {
  yield put(clearWishlist());
}

export function* onSignOutSucces() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearWishlistOnSignOut);
}

export function* removeItemFromDropup({ payload }) {
  const { item } = payload;
  yield put(removeItemFromWishlist(item));
}

export function* onAddItemFromDropup() {
  yield takeLatest(cartActionTypes.ADD_ITEM_FROM_DROPUP, removeItemFromDropup);
}

export function* removeItem({ payload }) {
  yield put(removeItemFromWishlist(payload));
}

export function* onAddItemFromWishlist() {
  yield takeLatest(cartActionTypes.ADD_ITEM_FROM_WISHLIST, removeItem);
}

export function* wishlistSagas() {
  yield all([
    call(onToggleSectionWishlist),
    call(onSignOutSucces),
    call(onAddItemFromDropup),
    call(onAddItemFromWishlist),
  ]);
}
