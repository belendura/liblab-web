const { firestore } = require("../../admin");

exports.getFeaturedCollectionsDocuments = async (condition = "sale") => {
  const documentRefs = await firestore
    .collection("collections")
    .listDocuments();

  const collectionsRefs = await documentRefs.reduce(
    async (previousPromise, docRef) => {
      const accum = await previousPromise;
      const colRef = await docRef.listCollections();

      return [...accum, ...colRef];
    },
    Promise.resolve([])
  );

  try {
    const queryItems = await Promise.all(
      collectionsRefs.map(async (colRef) => {
        return await colRef
          .where(condition, "==", true)
          .get()
          .then((querySnapshot) => {
            const queryItems = querySnapshot.docs.map((docSnapshot) => {
              const data = docSnapshot.data();
              return data;
            });
            return queryItems;
          });
      })
    );

    //Se puede hacer un flat?
    const collectionsItems = queryItems.reduce((accum, item) => {
      return [...accum, ...item];
    }, []);

    const filteredCollectionsItems = collectionsItems.filter(
      (item, index, arrayItem) =>
        arrayItem.findIndex((itemIndex) => itemIndex.id === item.id) === index
    );

    return filteredCollectionsItems;
  } catch (error) {
    throw new Error(error);
  }
};
