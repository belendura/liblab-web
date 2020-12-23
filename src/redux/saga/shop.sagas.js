import { all, call, takeLatest, put } from "redux-saga/effects";

import axiosConfig from "../../helpers/axiosConfig.helpers";

import shopActionTypes from "../types/shop.types";

import {
  requestItemSuccess,
  requestItemFailure,
  fetchSearchSuccess,
  fetchSearchFailure
} from "../actions/shop.actions";

import { openModal } from "../actions/modal.actions";

export function* requestItem({ payload }) {
  try {
    yield axiosConfig.post(`/request-item/`, payload);

    yield put(requestItemSuccess());
  } catch (error) {
    yield put(requestItemFailure(error));
  }
}

export function* onRequestItemStart() {
  yield takeLatest(shopActionTypes.REQUEST_ITEM_START, requestItem);
}

export function* onOpenModal() {
  yield put(
    openModal("ALERTS", {
      text: "Thanks! we will notify you by email if it is available again",
    })
  );
}

export function* onRequestItemSuccess() {
  yield takeLatest(shopActionTypes.REQUEST_ITEM_SUCCESS, onOpenModal);
}

export function* onFetchSearch({payload}) {
  console.log("payload",payload)
 try{
 const response= yield axiosConfig.post(`/search/`, payload);
  yield put(fetchSearchSuccess(response.data));
} catch (error) {
  yield put(fetchSearchFailure(error));
  
}}

export function* onFetchSearchStart() {
  yield takeLatest(shopActionTypes.FETCH_SEARCH_START, onFetchSearch);
}

export function* shopSagas() {
  yield all([call(onRequestItemStart), call(onRequestItemSuccess),call(onFetchSearchStart)]);
}
