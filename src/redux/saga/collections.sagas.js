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
  fetchCollectionsByConditionSuccess,
  fetchCollectionsByConditionFailure,
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

export function* fetchCollectionsByCondition({ payload }) {
  const { condition, wishlistItems } = payload;

  try {
    const response = yield axiosConfig.get(`/shop/${condition}`);
    const { collectionsItems, pictures } = response.data;
    console.log("response", response.data);
    const updatedSectionWishlist = updateSectionWishlist(
      collectionsItems,
      wishlistItems
    );
    const extendedSection = getExtendedSection(updatedSectionWishlist);
    yield put(fetchCollectionsByConditionSuccess(extendedSection, pictures));
  } catch (error) {
    yield put(fetchCollectionsByConditionFailure(error));
  }
}

export function* onFetchCollectionsByConditionStart() {
  yield takeLatest(
    collectionsActionTypes.FETCH_COLLECTIONS_BY_CONDITION_START,
    fetchCollectionsByCondition
  );
}

export function* fetchCollectionByCondition({ payload }) {
  const { collection, condition, wishlistItems } = payload;

  try {
    const response = yield axiosConfig.get(
      `/shop/${collection}/featured/${condition}`
    );

    const { collectionItems, pictures } = response.data;
    const updatedSectionWishlist = updateSectionWishlist(
      collectionItems,
      wishlistItems
    );
    const extendedSection = getExtendedSection(updatedSectionWishlist);

    yield put(fetchCollectionByConditionSuccess(extendedSection, pictures));
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

    const { sectionItems, pictures } = response.data;
    const updatedSectionWishlist = updateSectionWishlist(
      sectionItems,
      wishlistItems
    );
    const extendedSection = getExtendedSection(updatedSectionWishlist);
    yield put(fetchSectionSuccess(extendedSection, pictures));
  } catch (error) {
    yield put(fetchSectionFailure(error));
  }
}

export function* onFetchSectionStart() {
  yield takeLatest(collectionsActionTypes.FETCH_SECTION_START, fetchSection);
}

export function* fetchPictures({ payload: { pictures } }) {
  try {
    const response = yield axiosConfig.post(`/pictures/${pictures}`);

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
    call(onFetchCollectionsByConditionStart),
    call(onFetchCollectionByConditionStart),
    call(onFetchSectionStart),
    call(onFetchPicturesStart),
  ]);
}
