import { takeLatest, put, all, call } from "redux-saga/effects";

import axiosConfig from "../../helpers/axiosConfig.helpers";

import userActionTypes from "../types/user.types";
import cartActionTypes from "../types/cart.types";

import { clearCart, updateCartFromCheckOutSuccess,updateCartFromCheckOutFailure } from "../actions/cart.actions";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSucces() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}


export function* addItemToCart({payload}) {
const {item,selectedSize,user}=payload;
  try {
    if (user!==null && user!==undefined){
    const response = yield axiosConfig.post("/addItem", {item, selectedSize,user});
    yield put(updateCartFromCheckOutSuccess(response.data));
    }
  } catch (error) {
    yield put(updateCartFromCheckOutFailure(error));
  }
}

export function* onAddItemToCart() {
  yield takeLatest(cartActionTypes.ADD_ITEM, addItemToCart);
}

export function* removeItemFromCart({payload}) {
  const {item, user}=payload;
  try {
    if (user!==null && user!==undefined){
    const response = yield axiosConfig.post("/removeItem", {item, user});
    yield put(updateCartFromCheckOutSuccess(response.data));
    }
  } catch (error) {
    yield put(updateCartFromCheckOutFailure(error));
  }
}

export function* onRemoveItemFromCart() {
  yield takeLatest(cartActionTypes.REMOVE_ITEM, removeItemFromCart);
}

export function* clearItemFromCart({payload}) {
  const {item, user}=payload;
  try {
    if (user!==null && user!==undefined){
    const response = yield axiosConfig.post("/clearItem", {item, user});
    yield put(updateCartFromCheckOutSuccess(response.data));
    }
  } catch (error) {
    yield put(updateCartFromCheckOutFailure(error));
  }
}

export function* onClearItemFromCart() {
  yield takeLatest(cartActionTypes.CLEAR_ITEM_FROM_CART, clearItemFromCart);
}


export function* cartSagas() {
  yield all([call(onSignOutSucces),call(onAddItemToCart),call(onRemoveItemFromCart),call(onClearItemFromCart)]);
}
