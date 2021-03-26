const { firestore } = require("../../admin");

exports.getSizesGuide = async (collection, section) => {
  if (!collection || !section) return;

  const documentRefs = await firestore
    .collection(`sizesGuide/${collection}/${section}`)
    .listDocuments();

  try {
    const sizesData = await documentRefs.reduce(
      async (previousPromise, docRef) => {
        const accum = await previousPromise;
        await docRef.get().then((docSnapshot) => {
          return (accum[docSnapshot.id] = docSnapshot.data());
        });

        return accum;
      },
      Promise.resolve({})
    );

    return sizesData;
  } catch (error) {
    throw new Error(error);
  }
};
