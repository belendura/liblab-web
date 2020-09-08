import { all, call, takeLatest, put } from "redux-saga/effects";

import { saveToken, removeToken } from "../../helpers/axiosTokens.helpers";
import axiosConfig from "../../helpers/axiosConfig.helpers";

import { auth, googleProvider } from "../../firebase/firebase.utils";

import { updateCartSuccess, updateCartFailure } from "../actions/cart.actions";
import {
  updateWishlistSuccess,
  updateWishlistFailure,
} from "../actions/wishlist.actions";

import userActionTypes from "../types/user.types";

import {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  signOutStart,
  signOutSuccess,
  signOutFailure,
  resetPasswordSuccess,
  resetPasswordFailure,
} from "../actions/user.actions";

export function* signInWithGoogle({ payload }) {
  const { cart, wishlist } = payload;
  try {
    const { user, credential } = yield auth.signInWithPopup(googleProvider);
    const token = credential.accessToken;
    yield call(saveToken, token);
    const response = yield axiosConfig.post(
      "/loginOAuth",
      user,
      cart,
      wishlist
    );
    yield put(signInSuccess(response.data));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithEmail({ payload }) {
  const { email, password, cart, wishlist } = payload;
  try {
    const response = yield axiosConfig.post("/login", {
      email,
      password,
      cart,
      wishlist,
    });
    call(saveToken, response.data.token);
    yield put(signInSuccess(response.data));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* updateCartAfterSignIn({
  payload: { updatedCart, updatedWishlist },
}) {
  try {
    yield put(updateCartSuccess(updatedCart));
    yield put(updateWishlistSuccess(updatedWishlist));
  } catch (error) {
    yield put(updateCartFailure(error));
    yield put(updateWishlistFailure(error));
  }
}

export function* onSignInSuccess() {
  yield takeLatest(userActionTypes.SIGN_IN_SUCCESS, updateCartAfterSignIn);
}

export function* signUp({ payload }) {
  try {
    const response = yield axiosConfig.post("/register", payload);

    call(saveToken, response.data.token);
    yield put(signUpSuccess(response.data.user));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}
export function* onSignUpStart() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUp);
}

export function* checkUser() {
  try {
    const response = yield axiosConfig.get("/check-user-session");
    yield put(signInSuccess(response.data.user));
  } catch (error) {
    call(removeToken);
    yield axiosConfig.get("/logout");
  }
}
export function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, checkUser);
}

export function* onSignOutStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

export function* signOut() {
  try {
    call(removeToken);
    yield axiosConfig.get("/logout");
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* signOutAfterSignUp() {
  try {
    yield put(signOutStart());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onSignUpSuccess() {
  yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signOutAfterSignUp);
}

export function* resetPassword({ payload }) {
  const { email } = payload;
  try {
    yield axiosConfig.post("/reset-password", email);
    yield put(resetPasswordSuccess());
  } catch (error) {
    yield put(resetPasswordFailure(error));
  }
}

export function* onResetPasswordStart() {
  yield takeLatest(userActionTypes.RESET_PASSWORD_START, resetPassword);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpSuccess),
    call(onResetPasswordStart),
    call(onSignInSuccess),
  ]);
}
