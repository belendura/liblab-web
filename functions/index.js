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
} = require("./handlers/collections-management");

const { fetchSizesGuide } = require("./handlers/sizes-guide-management");

const { postSizeRequest } = require("./handlers/request-size-management");

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

app.get("/shop-menu", fetchShopMenu);

app.get("/shop/:collection/:section", fetchSection);

app.get("/shop/:condition", fetchCollection);

app.get("/sizes-guide/:collection/:section", fetchSizesGuide);

app.post("/request-item/", postSizeRequest);

exports.backendServer = functions.region("europe-west3").https.onRequest(app);
