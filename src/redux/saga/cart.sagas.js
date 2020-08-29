import { all, call, takeLatest, put } from "redux-saga/effects";

import axiosConfig from "../../helpers/axiosConfig.helpers";

import cartActionTypes from "../types/cart.types";

import {} from "../actions/cart.actions";

export function* onOrderItemsStart() {
  yield takeLatest(collectionsActionTypes.ORDER_ITEMS_START, orderItems);
}

export function* orderItems({ payload }) {
  const { collection, section } = payload;
  try {
    const response = yield axiosConfig.get(`/shop/${collection}/${section}`);

    yield put(orderItensSuccess(response.data));
  } catch (error) {
    yield put(orderItemsFailure(error));
  }
}

export function* cartSagas() {
  yield all([call(onOrderItemsStart)]);
}
