exports.createUserDocument = async (userData) => {
  const { userAuth, additionalData } = userData;
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { uid, email } = userAuth;

    const { firstName, lastName, proffession } = additionalData;

    const createdAt = Date();

    const newUser = {
      firstName,
      lastName,
      email,
      createdAt,
      proffession,
      id: uid,
    };

    try {
      await userRef.set(newUser);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  return newUser;
};
