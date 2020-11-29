const {
  getHeader,
  getCollectionDocuments,
  getSectionDocuments,
  getPictures,
} = require("../helpers/firestore");

//Menu Collection/Section
exports.fetchHeader = async (req, res) => {
  try {
    const shopMenu = await getHeader();
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

//Pictures
exports.fetchPictures = async (req, res) => {
  const { pictures } = req.params;

  const arrayPictures = pictures.split(",");

  try {
    const webPictures = await getPictures(arrayPictures);
    console.log("webPictures", webPictures);
    return res.status(200).send(webPictures);
  } catch (error) {
    return res.status(500).send(`Error getting pictures from section ${error}`);
  }
};
