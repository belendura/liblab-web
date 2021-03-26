const { firestore } = require("../../admin");

exports.getPictures = async (collections, section) => {
  if (!collections.length) return;

  try {
    return await collections.reduce(async (previousPromise, item) => {
      const accum = await previousPromise;

      const documentRef = firestore.doc(`web-pictures/${item}`);

      const documentSnapshot = await documentRef.get();
      if (documentSnapshot.exists) {
        const data = documentSnapshot.data();
        if (section) {
          return { ...accum, [section]: data[section] };
        }
        return { ...accum, [item]: data };
      }
    }, Promise.resolve({}));
  } catch (error) {
    throw new Error(error);
  }
};
