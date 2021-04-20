const { firestore } = require("../../admin");

exports.getFeaturedCollectionDocuments = async (collection, condition) => {
  const collectionsRefs = await firestore
    .doc(`collections/${collection}`)
    .listCollections();

  try {
    const queryItems = await collectionsRefs.reduce(
      async (previousPromise, colRef) => {
        const accum = await previousPromise;
        return await colRef
          .where(condition, "==", true)
          .get()
          .then((querySnapshot) => {
            querySnapshot.docs.map((docSnapshot) =>
              accum.push(docSnapshot.data())
            );
            return accum;
          });
      },
      Promise.resolve([])
    );

    const supplementaryQueryItems = await queryItems.reduce(
      async (prevPromise, queryItem) => {
        const accumulator = await prevPromise;
        const data = await collectionsRefs.reduce(
          async (previousPromise, colRef) => {
            const accum = await previousPromise;

            return await colRef
              .where("reference", "==", queryItem.reference)
              .get()
              .then((querySnapshot) => {
                querySnapshot.docs.filter((docSnapshot) => {
                  const data = docSnapshot.data();
                  return data.color.code !== queryItem.color.code
                    ? { ...accum, ...data }
                    : accum;
                });
                return accum;
              });
          },
          Promise.resolve({})
        );

        if (Object.entries(data).length !== 0 && data.constructor === Object) {
          return [...accumulator, data];
        }

        return accumulator;
      },
      Promise.resolve([])
    );

    const extendedQueryItems = queryItems.concat(supplementaryQueryItems);

    const filteredQueryItems = extendedQueryItems.filter(
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
