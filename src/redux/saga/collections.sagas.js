import { all, call, takeLatest, put } from "redux-saga/effects";

import axiosConfig from "../../helpers/axiosConfig.helpers";

import collectionsActionTypes from "../types/collections.types";
import wishlistActionTypes from "../types/wishlist.types";

import {
  fetchCollectionSuccess,
  fetchCollectionFailure,
  fetchSectionSuccess,
  fetchSectionFailure,
} from "../actions/collections.actions";

export function* fetchCollection({ payload }) {
  const { condition } = payload;

  try {
    const response = yield axiosConfig.get(`/shop/${condition}`);
    console.log("response", response);
    yield put(fetchCollectionSuccess(response.data));
  } catch (error) {
    yield put(fetchCollectionFailure(error));
  }
}

export function* onFetchCollectionStart() {
  yield takeLatest(
    collectionsActionTypes.FETCH_COLLECTION_START,
    fetchCollection
  );
}

export function* fetchSection({ payload }) {
  const { collection, section } = payload;
  try {
    const response = yield axiosConfig.get(`/shop/${collection}/${section}`);

    console.log("response", response);
    yield put(fetchSectionSuccess(response.data));
  } catch (error) {
    yield put(fetchSectionFailure(error));
  }
}

export function* onFetchSectionStart() {
  yield takeLatest(collectionsActionTypes.FETCH_SECTION_START, fetchSection);
}

export function* collectionsSagas() {
  yield all([call(onFetchCollectionStart), call(onFetchSectionStart)]);
}
