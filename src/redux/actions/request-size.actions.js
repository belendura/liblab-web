import requestSizeActionTypes from "../types/request-size.types";

export const requestSizeStart = (itemCredentials, userCredentials) => ({
  type: requestSizeActionTypes.REQUEST_SIZE_START,
  payload: { itemCredentials, userCredentials },
});

export const requestSizeSuccess = () => ({
  type: requestSizeActionTypes.REQUEST_SIZE_SUCCESS,
});

export const requestSizeFailure = (error) => ({
  type: requestSizeActionTypes.REQUEST_SIZE_FAILURE,
  payload: error,
});
