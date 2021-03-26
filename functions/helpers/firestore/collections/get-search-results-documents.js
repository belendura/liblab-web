const { firestore } = require("../../admin");

exports.getSearchResults = async (searchParams) => {
  if (!searchParams) return;

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
    const queryItems = await collectionsRefs.reduce(
      async (prevPromise, colRef) => {
        const accumulator = await prevPromise;
        const result = await searchParams.reduce(
          async (previousPromise, searchItem) => {
            const accum = await previousPromise;
            return await colRef.get().then((querySnapshot) => {
              const res = querySnapshot.docs.reduce((accu, docSnapshot) => {
                const data = docSnapshot.data();
                const item = new RegExp(`\\b${searchItem}\\b`, "gi");
                if (data["search"].search(item) !== -1) {
                  accu = [...accu, data];
                }
                return accu;
              }, []);

              return { ...accum, [searchItem]: res };
            });
          },
          Promise.resolve({})
        );

        return [...accumulator, result];
      },
      Promise.resolve([])
    );

    const filteredQuery = queryItems.filter((queryItem) => {
      const emptyField = Object.values(queryItem).find(
        (value) => value.length === 0
      );
      return !emptyField;
    });

    const intersectionQuery = filteredQuery.reduce((accum, queryItem) => {
      const res = Object.values(queryItem)[0].filter((item) =>
        Object.values(queryItem)
          .slice(1)
          .every((everyItem) => {
            return everyItem.find((findItem) => findItem.id === item.id);
          })
      );
      accum.push(res);
      return accum;
    }, []);

    const searchQuery = intersectionQuery.reduce((accum, item) => {
      return [...accum, ...item];
    }, []);

    const supplementaryQueryItems = await searchQuery.reduce(
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

    const extendedQueryItems = searchQuery.concat(supplementaryQueryItems);

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
