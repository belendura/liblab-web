import { all, call, takeLatest, put } from "redux-saga/effects";

import axiosConfig from "../../helpers/axiosConfig.helpers";

import requestSizeActionTypes from "../types/request-size.types";

import {
  requestSizeSuccess,
  requestSizeFailure,
} from "../actions/request-size.actions";

export function* requestSize({ payload }) {
  try {
    const response = yield axiosConfig.post(`/request-size/`, payload);
    yield put(requestSizeSuccess(response.data));
  } catch (error) {
    yield put(requestSizeFailure(error));
  }
}

export function* onRequestSizeStart() {
  yield takeLatest(requestSizeActionTypes.REQUEST_SIZE_START, requestSize);
}

export function* requestSizeSagas() {
  yield all([call(onRequestSizeStart)]);
}
