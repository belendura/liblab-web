import firebase from "firebase/app";
import "firebase/auth";

import { firebaseConfigKey } from "../config/firebaseConfigKey";

firebase.initializeApp(firebaseConfigKey);

export const auth = firebase.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: "select_account" });

export default firebase;
