import { all, call, takeLatest, put } from "redux-saga/effects";

import axiosConfig from "../../helpers/axiosConfig.helpers";

import collectionsActionTypes from "../types/collections.types";
import wishlistActionTypes from "../types/wishlist.types";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "../actions/collections.actions";

export function* fetchCollections({ payload }) {
  const { collection, section } = payload;
  try {
    const response = yield axiosConfig.get(`/shop/${collection}/${section}`);
    console.log("response", response);
    yield put(fetchCollectionsSuccess(response.data));
  } catch (error) {
    yield put(fetchCollectionsFailure(error));
  }
}

export function* onfetchCollectionsStart() {
  yield takeLatest(
    collectionsActionTypes.FETCH_COLLECTIONS_START,
    fetchCollections
  );
}

export function* collectionsSagas() {
  yield all([call(onfetchCollectionsStart)]);
}
