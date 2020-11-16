import { all, call, takeLatest, put } from "redux-saga/effects";

import axiosConfig from "../../helpers/axiosConfig.helpers";

import sizesGuideActionTypes from "../types/sizes-guide.types";

import {
  fetchSizesGuideSuccess,
  fetchSizesGuideFailure,
} from "../actions/sizes-guide.actions";

export function* fetchSizesGuide({ payload }) {
  const { collection, section } = payload;
  try {
    const response = yield axiosConfig.get(
      `/sizes-guide/${collection}/${section}`
    );
    yield put(fetchSizesGuideSuccess(response.data));
  } catch (error) {
    yield put(fetchSizesGuideFailure(error));
  }
}

export function* onFetchSizesGuideStart() {
  yield takeLatest(
    sizesGuideActionTypes.FETCH_SIZES_GUIDE_START,
    fetchSizesGuide
  );
}

export function* sizesGuideSagas() {
  yield all([call(onFetchSizesGuideStart)]);
}
