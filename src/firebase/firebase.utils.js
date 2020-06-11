import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { firebaseConfigKey } from "../config/firebaseConfigKey";

firebase.initializeApp(firebaseConfigKey);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: "select_account" });

export const addNewDocuments = async (collectionKey, data) => {
  if (!data) return;

  const batch = firestore.batch();

  data.forEach((item) => {
    const docRef = firestore.doc(`${collectionKey}/${item.Reference}`);
    batch.set(docRef, item);
  });

  return await batch.commit();
};

export default firebase;
