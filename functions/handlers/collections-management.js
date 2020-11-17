const {
  getShopMenu,
  getCollectionDocuments,
  getSectionDocuments,
} = require("../helpers/firestore");

//Menu Collection/Section
exports.fetchShopMenu = async (req, res) => {
  try {
    const shopMenu = await getShopMenu();
    return res.status(200).send(shopMenu);
  } catch (error) {
    return res.status(500).send(`Error getting shop menu ${error}`);
  }
};

//Shop Collection/Section
exports.fetchSection = async (req, res) => {
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
