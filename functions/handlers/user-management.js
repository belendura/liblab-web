const { auth } = require("../helpers/firebase");

const {
  createUserDocument,
} = require("../helpers/firestore/user/create-user-document");
const {
  getUserDocument,
} = require("../helpers/firestore/user/get-user-document");
const {
  updateUserCartDocument,
} = require("../helpers/firestore/user/update-user-cart-document");
const {
  updateUserWishlistDocument,
} = require("../helpers/firestore/user/update-user-wishlist-document");

const { actionCodesettings } = require("../config/urlConfig");

//Create User Auth with Email and Password
exports.createUser = async (req, res) => {
  const { email, password, ...additionalData } = req.body;
  try {
    const { user: userAuth } = await auth.createUserWithEmailAndPassword(
      email,
      password
    );

    const token = await userAuth.getIdToken();
    await userAuth.sendEmailVerification(actionCodesettings);
    const user = await createUserDocument(userAuth, additionalData);
    return res.status(200).json({ user, token });
  } catch (error) {
    return res.status(500).send(`Error user register ${error}`);
  }
};

//Get User from Database
exports.getUser = async (req, res) => {
  const { authId } = req.body;
  try {
    const user = await getUserDocument(authId);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).send(error);
  }
};

//LogIn with Email and Password
exports.logInWithEmailAndPassword = async (req, res) => {
  const { email, password, cart, wishlist } = req.body;

  try {
    const { user: userAuth } = await auth.signInWithEmailAndPassword(
      email,
      password
    );

    const { uid } = userAuth;

    if (userAuth.emailVerified) {
      const token = await userAuth.getIdToken();
      const user = await getUserDocument(uid);
      const updatedCart = await updateUserCartDocument(user, cart);
      const updatedWishlist = await updateUserWishlistDocument(user, wishlist);

      return res
        .status(200)
        .json({ user, token, updatedCart, updatedWishlist });
    } else {
      const currentUser = auth.currentUser;

      await currentUser.sendEmailVerification(actionCodesettings);

      return res.status(500).send(`Error email not verified`);
    }
  } catch (error) {
    return res.status(500).send(`Error login ${error}`);
  }
};

//LogIn with Google
exports.logInWithGoogle = async (req, res) => {
  const { user, cart, wishlist } = req.body;

  try {
    const userData = await createUserDocument(user);

    const updatedCart = await updateUserCartDocument(userData, cart);

    const updatedWishlist = await updateUserWishlistDocument(
      userData,
      wishlist
    );

    return res.status(200).json({ userData, updatedCart, updatedWishlist });
  } catch (error) {
    return res.status(500).send(`Error Google login ${error}`);
  }
};

//LogOut
exports.logOut = async (req, res) => {
  try {
    await auth.signOut();
    return res.status(200).send(`User log out`);
  } catch (error) {
    return res.status(500).send(`Error log out ${error}`);
  }
};

//Reset Password
exports.resetPassword = async (req, res) => {
  const { email } = req.body;
  try {
    await auth.sendPasswordResetEmail(email);
  } catch (error) {
    return res.status(500).send(`Error reset Password ${error}`);
  }
};
