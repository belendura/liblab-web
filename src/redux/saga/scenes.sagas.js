import { all, call, takeLatest, put } from "redux-saga/effects";

import axiosConfig from "../../helpers/axiosConfig.helpers";

import scenesActionTypes from "../types/scenes.types";

import {
  fetchScenesSuccess,
  fetchScenesFailure,
} from "../actions/scenes.actions";

export function* fetchScenes({ payload }) {
  try {
    const response = yield axiosConfig.get(`/scenes/${payload}`);
    yield put(fetchScenesSuccess(response.data));
  } catch (error) {
    yield put(fetchScenesFailure(error));
  }
}

export function* onFetchScenesStart() {
  yield takeLatest(scenesActionTypes.FETCH_SCENES_START, fetchScenes);
}

export function* scenesSagas() {
  yield all([call(onFetchScenesStart)]);
}
