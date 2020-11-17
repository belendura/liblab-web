import { all, call, takeLatest, put } from "redux-saga/effects";

import axiosConfig from "../../helpers/axiosConfig.helpers";

import requestSizeActionTypes from "../types/request-size.types";

import {
  requestSizeSuccess,
  requestSizeFailure,
} from "../actions/request-size.actions";

import { openModal } from "../actions/modal.actions";

export function* requestSize({ payload }) {
  try {
    yield axiosConfig.post(`/request-size/`, payload);

    yield put(requestSizeSuccess());
  } catch (error) {
    yield put(requestSizeFailure(error));
  }
}

export function* onRequestSizeStart() {
  yield takeLatest(requestSizeActionTypes.REQUEST_SIZE_START, requestSize);
}

export function* onOpenModal() {
  yield put(
    openModal("ALERTS", {
      text: "Thanks! we will notify you by email if it is available again",
    })
  );
}

export function* onRequestSizeSuccess() {
  yield takeLatest(requestSizeActionTypes.REQUEST_SIZE_SUCCESS, onOpenModal);
}

export function* requestSizeSagas() {
  yield all([call(onRequestSizeStart), call(onRequestSizeSuccess)]);
}
