const { firestore } = require("./admin");

exports.createUserDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { uid, email, displayName, providerData } = userAuth;

    let name = displayName;
    const createdAt = Date();
    if (providerData[0].providerId === "password") {
      const { firstName, lastName } = additionalData;
      name = `${firstName} ${lastName}`;
    }
    try {
      const newUser = {
        displayName: name,
        email,
        createdAt,
        id: uid,
        ...additionalData,
      };
      await userRef.set(newUser);
    } catch (error) {
      throw new Error(error);
    }
  }

  return user.id;
};

exports.getUserDocument = async (userId) => {
  if (!userId) return;

  const userRef = firestore.doc(`users/${userId}`);
  const userSnapShot = await userRef.get();

  if (userSnapShot.exists) {
    const user = userSnapShot.data();
    return user;
  }
};

exports.getCollectionDocuments = async (collection, section) => {
  if (!collection || !section) return;

  const querySnapshot = await firestore
    .collection(`collections/${collection}/${section}`)
    .get();

  let sectionData = [];
  try {
    sectionData = querySnapshot.docs.map((doc) => {
      return doc.data();
    });
  } catch (error) {
    throw new Error(error);
  }

  return sectionData;
};
