const { firestore } = require("../../admin");

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
    } else {
      firstName = displayName.slice(0, displayName.indexOf(" "));
      lastName = displayName.slice(displayName.indexOf(" ")).trim();
      otherData = null;
    }
    try {
      const createdUser = {
        displayName: name,
        email,
        createdAt,
        id: uid,
        firstName: firstName,
        lastName: lastName,
        ...otherData,
      };
      await userRef.set(createdUser);
    } catch (error) {
      throw new Error(error);
    }
  }
  const userSnapShot = await userRef.get();
  const user = userSnapShot.data();

  return user;
};
