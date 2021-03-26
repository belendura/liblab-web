const { firestore } = require("../../../admin");
const { getFeaturedSection } = require("./get-featured-section");

exports.getShopMenu = async () => {
  const documentRefs = await firestore
    .collection(`collections`)
    .listDocuments();

  try {
    const shopMenu = await documentRefs.reduce(
      async (previousPromise, docRef) => {
        const accum = await previousPromise;
        const featuredSections = await docRef
          .listCollections()
          .then((collectionsRefs) => {
            const sections = getFeaturedSection(collectionsRefs, [
              "sale",
              "newItem",
              "bestSeller",
              "sustainable",
            ]);
            return sections;
          });

        const sections = await docRef
          .listCollections()
          .then((collectionsRefs) => {
            const sections = collectionsRefs.reduce(
              async (previousPromise, collectionRef) => {
                const accum = await previousPromise;
                accum.push(collectionRef.id);
                return accum;
              },
              Promise.resolve([])
            );
            return sections;
          });

        const id = docRef.id;
        accum[id] = { sections, featuredSections };

        return accum;
      },
      Promise.resolve({})
    );

    return shopMenu;
  } catch (error) {
    throw new Error(error);
  }
};
