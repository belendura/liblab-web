const { firestore } = require("./admin");

exports.createUserDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log("he pasado por aqui");
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
      throw new Error(error.message);
    }
  }
  const userSnapShot = await userRef.get();
  const user = userSnapShot.data();
  return user;
};
