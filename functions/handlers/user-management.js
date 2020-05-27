const { auth } = require("../helpers/firebase");
const { firestore } = require("../helpers/admin");
const { createUserDocument } = require("../helpers/create-user-doc");

//Create User Auth with Email and Password
exports.createUserAuth = async (req, res) => {
  const { email, password, ...additionalData } = req.body;
  try {
    const { user: userAuth } = await auth.createUserWithEmailAndPassword(
      email,
      password
    );
    const token = await userAuth.getIdToken();
    const user = await createUserDocument(userAuth, additionalData);
    return res.status(200).json({ user, token });
  } catch (error) {
    return res.status(500).send(`Error user register ${error.code}`);
  }
};

//Get User from Database
exports.getUser = async (req, res) => {
  const { authId } = req.body;
  try {
    const userRef = firestore.doc(`users/${authId}`);
    const snapShot = await userRef.get();
    const user = snapShot.data();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).send(error.code);
  }
};

//LogIn with Email and Password
exports.logInWithEmailAndPassword = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { user } = await auth.signInWithEmailAndPassword(email, password);
    const token = await user.getIdToken();
    return res.status(200).json({ user, token });
  } catch (error) {
    return res.status(500).send(`Error login ${error.code}`);
  }
};

//LogIn with Google
exports.logInWithGoogle = async (req, res) => {
  const userData = req.body;
  try {
    const user = await createUserDocument(userData);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(`Error Google login ${error.code}`);
  }
};
