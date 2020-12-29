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
  fetchHeader,
  fetchCollectionByCondition,
  fetchCollectionsByCondition,
  fetchCollection,
  fetchSection,
  fetchItem,
  fetchItemByCondition,
  fetchItemByConditionOverall,
  fetchPictures,
  fetchSearch
} = require("./handlers/collections-management");

const { fetchSizesGuide } = require("./handlers/sizes-guide-management");

const { postSizeRequest} = require("./handlers/shop-management");

const {
  checkIfAuthenticated,
} = require("../functions/middlewares/authenticate");

const app = express();

app.use(cors());

app.get("/check-user-session", checkIfAuthenticated, getUser);

app.post("/login", logInWithEmailAndPassword);

app.post("/loginOAuth", logInWithGoogle);

app.post("/register", createUser);

app.get("/logout", logOut);

app.post("/reset-password", resetPassword);

app.get("/header", fetchHeader);

app.get("/shop/:collection", fetchCollection);

app.get("/shop/featured/:condition", fetchCollectionsByCondition);

app.get("/shop/:collection/featured/:condition", fetchCollectionByCondition);

app.get("/shop/:collection/:section/:reference/:color", fetchItem);

app.get("/shop/:collection/featured/:condition/:reference/:color", fetchItemByCondition);

app.get("/shop/:condition/:reference/:color", fetchItemByConditionOverall);

 app.get("/shop/:collection/:section", fetchSection);

app.get("/sizes-guide/:collection/:section", fetchSizesGuide);

app.post("/search", fetchSearch);

app.post("/pictures/:pictures", fetchPictures);

app.post("/request-item/", checkIfAuthenticated, postSizeRequest);

exports.backendServer = functions.region("europe-west3").https.onRequest(app);
