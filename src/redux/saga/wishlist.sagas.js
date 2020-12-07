import { takeLatest, put, all, call } from "redux-saga/effects";

import userActionTypes from "../types/user.types";
import collectionsActionTypes from "../types/collections.types";
import cartActionTypes from "../types/cart.types";
import wishlistActionTypes from "../types/wishlist.types";

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

export function* removeItem({ payload }) {
  const { item } = payload;

  yield put(removeItemFromWishlist(item));
}

export function* onAddItemFromPreview() {
  yield takeLatest(cartActionTypes.ADD_ITEM_FROM_PREVIEW, removeItem);
}

export function* onAddItemFromWishlist() {
  yield takeLatest(wishlistActionTypes.ADD_FROM_WISHLIST_TO_CART, removeItem);
}

export function* wishlistSagas() {
  yield all([
    call(onToggleSectionWishlist),
    call(onSignOutSucces),
    call(onAddItemFromWishlist),
    call(onAddItemFromPreview),
  ]);
}
