exports.getFeaturedSection = async (collectionsRefs, conditions) => {
  try {
    const extraSections = await conditions.reduce(
      async (previousPromise, condition) => {
        const accum = await previousPromise;

        const found = collectionsRefs.some(async (collectionRef) => {
          return await collectionRef.get().then((querySnapshot) => {
            return querySnapshot.docs.some((doc) => {
              const item = doc.data();
              return item[condition] === true;
            });
          });
        });

        return found ? [...accum, condition] : accum;
      },
      Promise.resolve([])
    );

    return extraSections;
  } catch (error) {
    throw new Error(error);
  }
};
