import { all, call, takeLatest, put } from "redux-saga/effects";

import axiosConfig from "../../helpers/axiosConfig.helpers";

import collectionsActionTypes from "../types/collections.types";
import { toServerEnumerate } from "../../firebase/enumerate";

import {
  getExtendedSection,
  getAvailableColorsSection,
  updateSectionWishlist,
} from "../utils/collections.utils";

import {
  fetchHeaderSuccess,
  fetchHeaderFailure,
  fetchShopItemsSuccess,
  fetchShopItemsFailure,
  // fetchSectionSuccess,
  // fetchSectionFailure,
  fetchItemSuccess,
  fetchItemFailure,
  fetchPicturesSuccess,
  fetchPicturesFailure,
  fetchSearchSuccess,
  fetchSearchFailure
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

// export function* fetchCollectionsByCondition({ payload }) {
//   const { condition, wishlistItems } = payload;

//   try {
//     const response = yield axiosConfig.get(
//       `/shop/featured/${toServerEnumerate[condition]}`, {params:{}}
//     );
//     const { collectionsItems, pictures } = response.data;
//     const updatedSectionWishlist = updateSectionWishlist(
//       collectionsItems,
//       wishlistItems
//     );
//     const availableColorsSection = getAvailableColorsSection(updatedSectionWishlist);
//     const extendedSection = getExtendedSection(availableColorsSection );
//     yield put(fetchCollectionsByConditionSuccess(extendedSection, pictures));
//   } catch (error) {
//     yield put(fetchCollectionsByConditionFailure(error));
//   }
// }

// export function* onFetchCollectionsByConditionStart() {
//   yield takeLatest(
//     collectionsActionTypes.FETCH_COLLECTIONS_BY_CONDITION_START,
//     fetchCollectionsByCondition
//   );
// }

// export function* fetchCollectionByCondition({ payload }) {
//   const { collection, condition, wishlistItems } = payload;

//   try {
//     const response = yield axiosConfig.get(
//       `/shop/${collection}/featured/${
//         toServerEnumerate[condition.replace(" ", "")]
//       }`
//     );

//     const { collectionItems, pictures } = response.data;
//     const updatedSectionWishlist = updateSectionWishlist(
//       collectionItems,
//       wishlistItems
//     );
//     const availableColorsSection = getAvailableColorsSection(updatedSectionWishlist);
//     const extendedSection = getExtendedSection(availableColorsSection );

//     yield put(fetchCollectionByConditionSuccess(extendedSection, pictures));
//   } catch (error) {
//     yield put(fetchCollectionByConditionFailure(error));
//   }
// }

// export function* onFetchCollectionByConditionStart() {
//   yield takeLatest(
//     collectionsActionTypes.FETCH_COLLECTION_BY_CONDITION_START,
//     fetchCollectionByCondition
//   );
// }

export function* fetchShopItems({ payload }) {
  const { url, query, wishlistItems } = payload;
  console.log("payload",payload);

  try {
    const response = yield axiosConfig.get(
      url, {
        params: query,
      }
    );
console.log("response",response);
console.log("response data",response.data);
    const { collectionsItems, pictures } = response.data;
 
    const updatedSectionWishlist = updateSectionWishlist(
      collectionsItems,
      wishlistItems
    );
    
    const availableColorsSection = getAvailableColorsSection(updatedSectionWishlist);
    const extendedSection = getExtendedSection(availableColorsSection );         
    yield put(fetchShopItemsSuccess(extendedSection, pictures));
  } catch (error) {
    yield put(fetchShopItemsFailure(error));
  }
}

export function* onFetchShopItemsStart() {
  yield takeLatest(collectionsActionTypes.FETCH_SHOP_ITEMS_START, fetchShopItems);
}

// export function* fetchSection({ payload }) {
//   const { collection, section, wishlistItems } = payload;

//   try {
//     const response = yield axiosConfig.get(
//       `/shop/${collection}/${toServerEnumerate[section.replace(" ", "")]}`
//     );

//     const { sectionItems, pictures } = response.data;
//     const updatedSectionWishlist = updateSectionWishlist(
//       sectionItems,
//       wishlistItems
//     );
//     const availableColorsSection = getAvailableColorsSection(updatedSectionWishlist);
//     const extendedSection = getExtendedSection(availableColorsSection );         
//     yield put(fetchSectionSuccess(extendedSection, pictures));
//   } catch (error) {
//     yield put(fetchSectionFailure(error));
//   }
// }

// export function* onFetchSectionStart() {
//   yield takeLatest(collectionsActionTypes.FETCH_SECTION_START, fetchSection);
// }

export function* fetchItem({ payload: { collection, section, reference, color, wishlistItems} }) {

  try {
    const response = yield axiosConfig.get(`/shop/${collection}/${toServerEnumerate[section.replace(" ", "")]}/${reference}/${color}`);
const updatedSectionWishlist = updateSectionWishlist(
response.data,
  wishlistItems
);
const extendedSection = getExtendedSection(updatedSectionWishlist);
    yield put(fetchItemSuccess(extendedSection));
  } catch (error) {
    yield put(fetchItemFailure(error));
  }
}

export function* onFetchItemStart() {
  yield takeLatest(collectionsActionTypes.FETCH_ITEM_START, fetchItem);
}

// export function* fetchItemByCondition({ payload: { collection, condition, reference, color, wishlistItems} }) {
//   try {
//     const response = yield axiosConfig.get(`/shop/${collection}/featured/${toServerEnumerate[condition.replace(" ", "")]}/${reference}/${color}`);

// const updatedSectionWishlist = updateSectionWishlist(
// response.data,
//   wishlistItems
// );
// const extendedSection = getExtendedSection(updatedSectionWishlist);
//     yield put(fetchItemByConditionSuccess(extendedSection));
//   } catch (error) {
//     yield put(fetchItemByConditionFailure(error));
//   }
// }

// export function* onFetchItemByConditionStart() {
//   yield takeLatest(collectionsActionTypes.FETCH_ITEM_BY_CONDITION_START, fetchItemByCondition);
// }

// export function* fetchItemByConditionOverall({ payload: {  condition, reference, color, wishlistItems} }) {
//   try {
//     const response = yield axiosConfig.get(`/shop/${toServerEnumerate[condition.replace(" ", "")]}/${reference}/${color}`);
// const updatedSectionWishlist = updateSectionWishlist(
// response.data,
//   wishlistItems
// );
// const extendedSection = getExtendedSection(updatedSectionWishlist);
//     yield put(fetchItemByConditionOverallSuccess(extendedSection));
//   } catch (error) {
//     yield put(fetchItemByConditionOverallFailure(error));
//   }
// }

// export function* onFetchItemByConditionOverallStart() {
//   yield takeLatest(collectionsActionTypes.FETCH_ITEM_BY_CONDITION_OVERALL_START, fetchItemByConditionOverall);
// }

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

export function* onFetchSearch({payload}) {
 try{
 const response= yield axiosConfig.post(`/search/`, payload);
 const availableColorsSection = getAvailableColorsSection(response.data);
    const extendedSection = getExtendedSection(availableColorsSection );   
  yield put(fetchSearchSuccess(extendedSection));
} catch (error) {
  yield put(fetchSearchFailure(error));
  
}}

export function* onFetchSearchStart() {
  yield takeLatest(collectionsActionTypes.FETCH_SEARCH_START, onFetchSearch);
}
export function* collectionsSagas() {
  yield all([
    call(onFetchHeaderStart),
    // call(onFetchCollectionsByConditionStart),
    // call(onFetchCollectionByConditionStart),
    call(onFetchShopItemsStart),
    // call(onFetchSectionStart),
    call(onFetchPicturesStart),
    call(onFetchItemStart),
    // call(onFetchItemByConditionStart),
    // call(onFetchItemByConditionOverallStart),
    call(onFetchSearchStart),
  ]);
}
