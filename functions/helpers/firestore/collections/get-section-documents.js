const { firestore } = require("../../admin");

exports.getSectionDocuments = async (collection, section) => {
  console.log("section", section);
  if (!collection || !section) return;

  const querySnapshot = await firestore
    .collection(`collections/${collection}/${section}`)
    .get();

  try {
    const sectionData = querySnapshot.docs.map((doc) => {
      return doc.data();
    });

    return sectionData;
  } catch (error) {
    throw new Error(error);
  }
};
