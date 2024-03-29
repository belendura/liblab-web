import { takeLatest, put, all, call } from "redux-saga/effects";
import axiosConfig from "../../helpers/axiosConfig.helpers";

import userActionTypes from "../types/user.types";
import collectionsActionTypes from "../types/collections.types";
import cartActionTypes from "../types/cart.types";
import wishlistActionTypes from "../types/wishlist.types";

import {
  toggleWishlistItem,
  clearWishlist,
  removeItemFromWishlist,
  updateWishlistFromCheckOutSuccess,
  updateWishlistFromCheckOutFailure,
} from "../actions/wishlist.actions";

export function* toggleWishlist({ payload }) {
  const { item, user } = payload;
  yield put(toggleWishlistItem(item, user));
}

export function* onToggleShopItemsWishlist() {
  yield takeLatest(
    collectionsActionTypes.TOGGLE_SHOP_ITEMS_WISHLIST,
    toggleWishlist
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

export function* onAddItem() {
  yield takeLatest(cartActionTypes.ADD_ITEM, removeItem);
}

export function* toggleUserWishlist({ payload }) {
  const { item, user } = payload;
  try {
    if (user !== null && user !== undefined) {
      const response = yield axiosConfig.post("/toggleWishlisItem", {
        item,
        user,
      });
      yield put(updateWishlistFromCheckOutSuccess(response.data));
    }
  } catch (error) {
    yield put(updateWishlistFromCheckOutFailure(error));
  }
}

export function* onToggleWishlistItem() {
  yield takeLatest(
    wishlistActionTypes.TOGGLE_WISHLIST_ITEM,
    toggleUserWishlist
  );
}

export function* removeItemFromUserWishlist({ payload }) {
  const { item, user } = payload;
  try {
    if (user !== null && user !== undefined) {
      const response = yield axiosConfig.post("/removeWishlistItem", {
        item,
        user,
      });
      yield put(updateWishlistFromCheckOutSuccess(response.data));
    }
  } catch (error) {
    yield put(updateWishlistFromCheckOutFailure(error));
  }
}

export function* onRemoveItemFromUserWishlist() {
  yield takeLatest(
    wishlistActionTypes.REMOVE_ITEM_FROM_WISHLIST,
    removeItemFromUserWishlist
  );
}

export function* wishlistSagas() {
  yield all([
    call(onToggleShopItemsWishlist),
    call(onSignOutSucces),
    call(onAddItem),
    call(onToggleWishlistItem),
    call(onRemoveItemFromUserWishlist),
  ]);
}
