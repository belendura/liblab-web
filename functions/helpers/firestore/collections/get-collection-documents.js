const { firestore } = require("../../admin");

exports.getCollectionDocuments = async (collection) => {
  const collectionsRefs = await firestore
    .doc(`collections/${collection}`)
    .listCollections();
  console.log("get collections men");
  try {
    const queryItems = await collectionsRefs.reduce(
      async (previousPromise, colRef) => {
        const accum = await previousPromise;
        return await colRef.get().then((querySnapshot) => {
          querySnapshot.docs.map((docSnapshot) =>
            accum.push(docSnapshot.data())
          );
          return accum;
        });
      },
      Promise.resolve([])
    );

    const filteredQueryItems = queryItems.filter(
      (item, index, arrayItem) =>
        arrayItem.findIndex(
          (itemIndex) =>
            itemIndex.reference === item.reference &&
            itemIndex.color.code === item.color.code
        ) === index
    );

    return filteredQueryItems;
  } catch (error) {
    throw new Error(error);
  }
};
