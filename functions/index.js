const functions = require("firebase-functions");
const cors = require("cors");
const express = require("express");
const {
  getUser,
  createUser,
  logInWithEmailAndPassword,
  logInWithGoogle,
  logOut,
  resetPassword,
} = require("./handlers/user-management");

const {
  fetchShopMenu,
  fetchCollection,
  fetchSection,
  fetchItem,
  fetchPictures,
  fetchSearch,
} = require("./handlers/collections-management");

const { fetchSizesGuide } = require("./handlers/sizes-guide-management");

const { postSizeRequest } = require("./handlers/shop-management");
const {
  addItemToUserCart,
  removeItemFromUserCart,
  clearItemFromUserCart,
} = require("./handlers/cart-management");
const {
  toggleItemFromWishlist,
  removeItemFromUserWishlist,
} = require("./handlers/wishlist-management");

const { checkIfAuthenticated } = require("./middlewares/authenticate");

const app = express();

app.use(cors());

app.get("/check-user-session", checkIfAuthenticated, getUser);

app.post("/login", logInWithEmailAndPassword);

app.post("/loginOAuth", logInWithGoogle);

app.post("/register", createUser);

app.get("/logout", logOut);

app.post("/reset-password", resetPassword);

app.get("/shopMenu", fetchShopMenu);

app.get("/shop/:urlCollection", fetchCollection);

app.get("/shop/:urlCollection/:urlSection", fetchSection);

app.get("/shop/:urlCollection/:urlSection/:urlReference/", fetchItem);

app.get("/sizes-guide/:collection/:section", fetchSizesGuide);

app.post("/search", fetchSearch);

app.post("/pictures/:pictures", fetchPictures);

app.post("/request-item/", postSizeRequest);

app.post("/addItem", addItemToUserCart);

app.post("/removeItem", removeItemFromUserCart);

app.post("/clearItem", clearItemFromUserCart);

app.post("/toggleWishlisItem", toggleItemFromWishlist);

app.post("/removeWishlistItem", removeItemFromUserWishlist);

exports.backendServer = functions.region("europe-west3").https.onRequest(app);
