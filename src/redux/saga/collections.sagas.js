import { all, call, takeLatest, put } from "redux-saga/effects";

import axiosConfig from "../../helpers/axiosConfig.helpers";

import collectionsActionTypes from "../types/collections.types";
import {
  getExtendedItems,
  updateSectionWishlist,
} from "../utils/collections.utils";

import {
  fetchCollectionByConditionSuccess,
  fetchCollectionByConditionFailure,
  fetchSectionSuccess,
  fetchSectionFailure,
} from "../actions/collections.actions";

export function* fetchCollectionByCondition({ payload }) {
  const { condition, wishlistItems } = payload;

  try {
    const response = yield axiosConfig.get(`/shop/${condition}`);
    const updatedSectionWishlist = updateSectionWishlist(
      response.data,
      wishlistItems
    );
    const extendedSection = getExtendedItems(updatedSectionWishlist);
    yield put(fetchCollectionByConditionSuccess(extendedSection));
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
  const { collection, section, wishlistItems } = payload;
  try {
    const response = yield axiosConfig.get(`/shop/${collection}/${section}`);
    const updatedSectionWishlist = updateSectionWishlist(
      response.data,
      wishlistItems
    );
    // console.log("updatedSectionWishlist", updatedSectionWishlist);
    const extendedSection = getExtendedItems(updatedSectionWishlist);
    yield put(fetchSectionSuccess(extendedSection));
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
