import { all, call, takeLatest, put } from "redux-saga/effects";

import axiosConfig from "../../helpers/axiosConfig.helpers";

import collectionsActionTypes from "../types/collections.types";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "../actions/collections.actions";

export function* onfetchCollectionsStart() {
  yield takeLatest(
    collectionsActionTypes.FETCH_COLLECTIONS_START,
    fetchCollections
  );
}

export function* fetchCollections({ payload }) {
  const { collection } = payload;
  try {
    const response = yield axiosConfig.get(`/shop/${collection}`);
    yield put(fetchCollectionsSuccess(response.data.collection));
  } catch (error) {
    yield put(fetchCollectionsFailure(error));
  }
}

export function* collectionsSagas() {
  yield all([call(onfetchCollectionsStart)]);
}
