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
  fetchCollections,
} = require("./handlers/user-management");

const {
  checkIfAuthenticated,
} = require("../functions/middlewares/authenticate");

const {
  checkCollectionAndSection,
} = require("../functions/middlewares/collection-section");

const app = express();

app.use(cors());

app.get("/check-user-session", checkIfAuthenticated, getUser);

app.post("/login", logInWithEmailAndPassword);

app.post("/loginOAuth", logInWithGoogle);

app.post("/register", createUser);

app.get("/logout", logOut);

app.post("/reset-password", resetPassword);

app.get(
  "/shop/:collection/:section",
  checkCollectionAndSection,
  fetchCollections
);

exports.backendServer = functions.region("europe-west3").https.onRequest(app);
