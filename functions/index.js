const functions = require("firebase-functions");
const cors = require("cors");
const express = require("express");
const {
  getUser,
  createUserAuth,
  logInWithEmailAndPassword,
  logInWithGoogle,
} = require("./handlers/user-management");

const {
  checkIfAuthenticated,
} = require("../functions/middlewares/authenticate");

const app = express();

app.use(cors());

app.get("/checkUserSession", checkIfAuthenticated, getUser);

app.post("/login", logInWithEmailAndPassword);

app.post("/loginOAuth", logInWithGoogle);

app.post("/register", createUserAuth);

exports.backendServer = functions.region("europe-west3").https.onRequest(app);
