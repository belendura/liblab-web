import userActionTypes from "../types/user.types";

export const emailSignInStart = (email, password, cart, wishlist) => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: {
    email,
    password,
    cart,
    wishlist,
  },
});

export const googleSignInStart = (cart, wishlist) => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START,
  payload: { cart, wishlist },
});

export const signInSuccess = (user) => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const signUpStart = (userCredentials) => ({
  type: userActionTypes.SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = (userCredentials) => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
  payload: userCredentials,
});

export const signUpFailure = (error) => ({
  type: userActionTypes.SIGN_UP_FAILURE,
  payload: error,
});

export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: userActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: userActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const resetPasswordStart = (email) => ({
  type: userActionTypes.RESET_PASSWORD_START,
  payload: { email },
});

export const resetPasswordSuccess = () => ({
  type: userActionTypes.RESET_PASSWORD_SUCCESS,
});

export const resetPasswordFailure = (error) => ({
  type: userActionTypes.RESET_PASSWORD_FAILURE,
  payload: error,
});
