import { all, call } from "redux-saga/effects";
import { userSagas } from "./saga/user.sagas";
import { collectionsSagas } from "./saga/collections.sagas";

export default function* rootSaga() {
  yield all([call(userSagas), call(collectionsSagas)]);
}
