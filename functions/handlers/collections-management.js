const {
  getCollectionDocuments,
  getSectionDocuments,
} = require("../helpers/firestore");

//Shop Collection/Section
exports.fetchSection = async (req, res) => {
  // const { collection, section } = req.body;
  const { collection, section } = req.params;

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
  const { condition } = req.params;
  try {
    const collectionItems = await getCollectionDocuments(condition);
    return res.status(200).send(collectionItems);
  } catch (error) {
    return res
      .status(500)
      .send(`Error getting documents from collection ${error}`);
  }
};
