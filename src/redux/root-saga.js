import { all, call } from "redux-saga/effects";
import { userSagas } from "./saga/user.sagas";
import { collectionsSagas } from "./saga/collections.sagas";
import { cartSagas } from "./saga/cart.sagas";
import { wishlistSagas } from "./saga/wishlist.sagas";
import { sizesGuideSagas } from "./saga/sizes-guide.sagas";
import { shopSagas } from "./saga/shop.sagas";

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(collectionsSagas),
    call(cartSagas),
    call(wishlistSagas),
    call(sizesGuideSagas),
    call(shopSagas),
  ]);
}
