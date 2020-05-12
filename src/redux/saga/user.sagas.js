import { all, call, takeLatest, put } from "redux-saga/effects";

import { saveToken, removeToken } from "../../helpers/axiosTokens.helpers";
import axiosConfig from "../../helpers/axiosConfig.helpers";

import { auth, googleProvider } from "../../firebase/firebase.utils";
import userActionTypes from "../types/user.types";

import {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  signOutSuccess,
  signOutFailure,
} from "../actions/user.actions";

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SING_IN_START, signInWithGoogle);
}

export function* signInWithGoogle() {
  try {
    const { user, credential } = yield auth.signInWithPopup(googleProvider);
    const token = credential.accessToken;
    yield call(saveToken, token);
    yield put(signInSuccess({ user }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SING_IN_START, signInWithEmail);
}

export function* signInWithEmail({ payload }) {
  const { email, password } = payload;
  try {
    const response = yield axiosConfig.post(`/login`, { email, password });
    yield call(saveToken, response.data.token);
    yield put(signInSuccess({ user: response.data.user }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onSignUpStart() {
  yield takeLatest(userActionTypes.SING_UP_START, signUp);
}

export function* signUp({ payload }) {
  const { userCredentials } = payload;
  try {
    const response = yield axiosConfig.post(`/register`, { userCredentials });
    call(saveToken, response.data.token);
    const { email, password } = userCredentials;
    yield put(signUpSuccess(email, password));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, checkUser);
}

export function* checkUser() {
  try {
    const response = yield axiosConfig("/checkUserSession");
    yield put(signInSuccess({ user: response.data.user }));
  } catch (error) {
    yield auth.signOut();
    yield call(removeToken);
    //redirect?
  }
}

export function* onSignOutStart() {
  yield takeLatest(userActionTypes.SING_OUT_START, signOut);
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield call(removeToken);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}
export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onCheckUserSession),
    call(onSignOutStart),
  ]);
}
