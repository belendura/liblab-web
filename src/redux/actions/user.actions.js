import userActionTypes from "../types/user.types";

export const emailSignInStart = (email, password) => ({
  type: userActionTypes.EMAIL_SING_IN_START,
  payload: {
    email,
    password,
  },
});

export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SING_IN_START,
});

export const signInSuccess = (user) => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: userActionTypes.SING_IN_FAILURE,
  payload: error,
});

export const SignUpStart = (userCredentials) => ({
  type: userActionTypes.GOOGLE_SING_IN_START,
  payload: userCredentials,
});

export const signUpSuccess = (email, password) => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: { email, password },
});

export const signUpFailure = (error) => ({
  type: userActionTypes.SING_IN_FAILURE,
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
