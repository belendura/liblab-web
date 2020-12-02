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

  let i = 0;
  data.forEach((item) => {
    const docRef = firestore.doc(`${collectionKey}/${item.reference}` + `${i}`);
    i++;
    batch.set(docRef, item);
  });

  return await batch.commit();
};

export const updateCollectionsDocuments = async (collectionKey, section) => {
  if (!collectionKey || !section) return;
  const querySnapshot = await firestore
    .collection(`collections/${collectionKey}/${section}`)
    .get();

  const batch = firestore.batch();

  querySnapshot.docs.map((doc) => {
    const docRef = doc.ref;
    batch.set(docRef, { id: docRef.id }, { merge: true });
  });

  return await batch.commit();
};

export const addSizesDocuments = async (collectionKey, data) => {
  if (!data) return;

  const batch = firestore.batch();

  Object.entries(data).map((item) => {
    const [key, value] = item;
    const docRef = firestore.doc(`${collectionKey}/${key}`);
    return batch.set(docRef, value);
  });

  return await batch.commit();
};

export default firebase;
