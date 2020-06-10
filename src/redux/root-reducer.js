import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "../redux/reducers/user.reducer";
import collectionsReducer from "../redux/reducers/collections.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  collections: collectionsReducer,
});

export default persistReducer(persistConfig, rootReducer);
