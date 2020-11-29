import qs from "qs";
import { all, call, takeLatest, put } from "redux-saga/effects";

import axiosConfig from "../../helpers/axiosConfig.helpers";

import collectionsActionTypes from "../types/collections.types";
import {
  getExtendedSection,
  updateSectionWishlist,
} from "../utils/collections.utils";

import {
  fetchHeaderSuccess,
  fetchHeaderFailure,
  fetchCollectionByConditionSuccess,
  fetchCollectionByConditionFailure,
  fetchSectionSuccess,
  fetchSectionFailure,
  fetchPicturesSuccess,
  fetchPicturesFailure,
} from "../actions/collections.actions";

export function* fetchHeader() {
  try {
    const response = yield axiosConfig.get(`/header`);
    yield put(fetchHeaderSuccess(response.data));
  } catch (error) {
    yield put(fetchHeaderFailure(error));
  }
}

export function* onFetchHeaderStart() {
  yield takeLatest(collectionsActionTypes.FETCH_HEADER_START, fetchHeader);
}

export function* fetchCollectionByCondition({ payload }) {
  const { condition, wishlistItems } = payload;

  try {
    const response = yield axiosConfig.get(`/shop/${condition}`);
    const updatedSectionWishlist = updateSectionWishlist(
      response.data,
      wishlistItems
    );
    const extendedSection = getExtendedSection(updatedSectionWishlist);
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
    const extendedSection = getExtendedSection(updatedSectionWishlist);
    yield put(fetchSectionSuccess(extendedSection));
  } catch (error) {
    yield put(fetchSectionFailure(error));
  }
}

export function* onFetchSectionStart() {
  yield takeLatest(collectionsActionTypes.FETCH_SECTION_START, fetchSection);
}

export function* fetchPictures({ payload: { pictures } }) {
  // console.log("payload", pictures);
  try {
    const response = yield axiosConfig.get(`/pictures/${pictures}`);
    // console.log("response", response.data);
    yield put(fetchPicturesSuccess(response.data));
  } catch (error) {
    yield put(fetchPicturesFailure(error));
  }
}

export function* onFetchPicturesStart() {
  yield takeLatest(collectionsActionTypes.FETCH_PICTURES_START, fetchPictures);
}

export function* collectionsSagas() {
  yield all([
    call(onFetchHeaderStart),
    call(onFetchCollectionByConditionStart),
    call(onFetchSectionStart),
    call(onFetchPicturesStart),
  ]);
}
