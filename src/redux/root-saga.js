import { all, call } from "redux-saga/effects";
import { userSagas } from "./saga/user.sagas";
import { collectionsSagas } from "./saga/collections.sagas";
import { cartSagas } from "./saga/cart.sagas";

export default function* rootSaga() {
  yield all([call(userSagas), call(collectionsSagas), call(cartSagas)]);
}
