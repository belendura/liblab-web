import { all, call, takeLatest, put } from "redux-saga/effects";

import axiosConfig from "../../helpers/axiosConfig.helpers";

import collectionsActionTypes from "../types/collections.types";

import {
  getExtendedShopItems,
  getAvailableColorsShopItems,
  updateShopItemsWishlist,
} from "../utils/collections.utils";

import {
  fetchShopMenuSuccess,
  fetchShopMenuFailure,
  fetchShopItemsSuccess,
  fetchShopItemsFailure,
  fetchItemSuccess,
  fetchItemFailure,
  fetchPicturesSuccess,
  fetchPicturesFailure,
  fetchSearchSuccess,
  fetchSearchFailure,
} from "../actions/collections.actions";

export function* fetchShopMenu() {
  try {
    const response = yield axiosConfig.get(`/shopMenu`);
    yield put(fetchShopMenuSuccess(response.data));
  } catch (error) {
    yield put(fetchShopMenuFailure(error));
  }
}

export function* onFetchShopMenuStart() {
  yield takeLatest(collectionsActionTypes.FETCH_SHOP_MENU_START, fetchShopMenu);
}

export function* fetchShopItems({ payload }) {
  const { url, query, wishlistItems } = payload;
  try {
    const response = yield axiosConfig.get(url, {
      params: query,
    });

    const { collectionsItems, pictures } = response.data;
    const updatedShopItemsWishlist = updateShopItemsWishlist(
      collectionsItems,
      wishlistItems
    );

    const availableColorsShopItems = getAvailableColorsShopItems(
      updatedShopItemsWishlist
    );
    const extendedShopItems = getExtendedShopItems(availableColorsShopItems);
    yield put(fetchShopItemsSuccess(extendedShopItems, pictures));
  } catch (error) {
    yield put(fetchShopItemsFailure(error));
  }
}

export function* onFetchShopItemsStart() {
  yield takeLatest(
    collectionsActionTypes.FETCH_SHOP_ITEMS_START,
    fetchShopItems
  );
}

export function* fetchItem({ payload }) {
  const { url, query, wishlistItems } = payload;
  const { queryColor } = query;
  try {
    const response = yield axiosConfig.get(url, {
      params: { color: queryColor },
    });
    const updatedShopItemsWishlist = updateShopItemsWishlist(
      response.data,
      wishlistItems
    );
    const extendedShopItems = getExtendedShopItems(updatedShopItemsWishlist);
    yield put(fetchItemSuccess(extendedShopItems));
  } catch (error) {
    yield put(fetchItemFailure(error));
  }
}

export function* onFetchItemStart() {
  yield takeLatest(collectionsActionTypes.FETCH_ITEM_START, fetchItem);
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

export function* onFetchSearch({ payload }) {
  try {
    const response = yield axiosConfig.post(`/search/`, payload);
    const availableColorsShopItems = getAvailableColorsShopItems(response.data);
    const extendedShopItems = getExtendedShopItems(availableColorsShopItems);
    yield put(fetchSearchSuccess(extendedShopItems));
  } catch (error) {
    yield put(fetchSearchFailure(error));
  }
}

export function* onFetchSearchStart() {
  yield takeLatest(collectionsActionTypes.FETCH_SEARCH_START, onFetchSearch);
}
export function* collectionsSagas() {
  yield all([
    call(onFetchShopMenuStart),
    call(onFetchShopItemsStart),
    call(onFetchPicturesStart),
    call(onFetchItemStart),
    call(onFetchSearchStart),
  ]);
}
