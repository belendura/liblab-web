import { takeLatest, put, all, call } from "redux-saga/effects";

import userActionTypes from "../types/user.types";
import collectionsActionTypes from "../types/collections.types";
import cartActionTypes from "../types/cart.types";

import {
  toggleWishlistItem,
  clearWishlist,
  clearSizeSelection,
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

export function* clearSizeFromSelection({ payload }) {
  yield put(clearSizeSelection(payload));
}
export function* onAddItem() {
  yield takeLatest(cartActionTypes.ADD_ITEM, clearSizeFromSelection);
}

export function* wishlistSagas() {
  yield all([
    call(onToggleSectionWishlist),
    call(onSignOutSucces),
    call(onAddItem),
  ]);
}
