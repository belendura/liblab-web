import shopActionTypes from "../types/shop.types";

export const requestItemStart = (itemCredentials, userCredentials) => ({
  type: shopActionTypes.REQUEST_ITEM_START,
  payload: { itemCredentials, userCredentials },
});

export const requestItemSuccess = () => ({
  type: shopActionTypes.REQUEST_ITEM_SUCCESS,
});

export const requestItemFailure = (error) => ({
  type: shopActionTypes.REQUEST_ITEM_FAILURE,
  payload: error,
});
