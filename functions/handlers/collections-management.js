const {
  getCollectionDocuments,
  getSectionDocuments,
} = require("../helpers/firestore");

//Shop Collection/Section
exports.fetchSection = async (req, res) => {
  const { collection, section } = req.body;

  try {
    const sectionData = await getSectionDocuments(collection, section);

    return res.status(200).send(sectionData);
  } catch (error) {
    return res
      .status(500)
      .send(`Error getting documents from section ${error}`);
  }
};

//Shop Collection
exports.fetchCollection = async (req, res) => {
  const { condition } = req.body;
  try {
    const collectionData = await getCollectionDocuments(condition);
    console.log("collectionData", collectionData);
    return res.status(200).send(collectionData);
  } catch (error) {
    return res
      .status(500)
      .send(`Error getting documents from collection ${error}`);
  }
};
