const { getCollectionDocuments } = require("../helpers/firestore");

//Shop Collection/Section
exports.fetchCollections = async (req, res) => {
  const { collection, section } = req.body;

  try {
    const sectionData = await getCollectionDocuments(collection, section);

    return res.status(200).send(sectionData);
  } catch (error) {
    return res
      .status(500)
      .send(`Error getting documents from collection ${error}`);
  }
};
