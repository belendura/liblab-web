const { firestore } = require("../../../admin");

exports.getHeaderPictures = async () => {
  const documentRef = firestore.doc(`web-pictures/header`);

  try {
    const documentSnapshot = await documentRef.get();

    if (documentSnapshot.exists) {
      const data = documentSnapshot.data();
      return data;
    }
  } catch (error) {
    throw new Error(error);
  }
};
