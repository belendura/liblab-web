import { all, call, takeLatest, put } from "redux-saga/effects";

import axiosConfig from "../../helpers/axiosConfig.helpers";

import collectionsActionTypes from "../types/collections.types";
import { getExtendedItems } from "../utils/collections.utils";

import {
  fetchCollectionByConditionSuccess,
  fetchCollectionByConditionFailure,
  fetchSectionSuccess,
  fetchSectionFailure,
} from "../actions/collections.actions";

export function* fetchCollectionByCondition({ payload }) {
  const { condition } = payload;

  try {
    const response = yield axiosConfig.get(`/shop/${condition}`);
    const sectionExtended = getExtendedItems(response.data);
    yield put(fetchCollectionByConditionSuccess(sectionExtended));
  } catch (error) {
    yield put(fetchCollectionByConditionFailure(error));
  }
}

export function* onFetchCollectionByConditionStart() {
  yield takeLatest(
    collectionsActionTypes.FETCH_COLLECTION_BY_CONDITION_START,
    fetchCollectionByCondition
  );
}

export function* fetchSection({ payload }) {
  const { collection, section } = payload;
  try {
    const response = yield axiosConfig.get(`/shop/${collection}/${section}`);
    const sectionExtended = getExtendedItems(response.data);
    yield put(fetchSectionSuccess(sectionExtended));
  } catch (error) {
    yield put(fetchSectionFailure(error));
  }
}

export function* onFetchSectionStart() {
  yield takeLatest(collectionsActionTypes.FETCH_SECTION_START, fetchSection);
}

export function* collectionsSagas() {
  yield all([
    call(onFetchCollectionByConditionStart),
    call(onFetchSectionStart),
  ]);
}
