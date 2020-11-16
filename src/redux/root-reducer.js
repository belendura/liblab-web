import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "../redux/reducers/user.reducer";
import collectionsReducer from "../redux/reducers/collections.reducer";
import cartReducer from "../redux/reducers/cart.reducer";
import wishlistReducer from "../redux/reducers/wishlist.reducer";
import modalReducer from "../redux/reducers/modal.reducer";
import sizesGuideReducer from "../redux/reducers/sizes-guide.reducer";
import requestSizeReducer from "../redux/reducers/request-size.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  collections: collectionsReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  modal: modalReducer,
  sizesGuide: sizesGuideReducer,
  requestSize: requestSizeReducer,
});

export default persistReducer(persistConfig, rootReducer);
