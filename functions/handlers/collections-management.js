const {
  getHeader,
  getCollectionDocuments,
  getCollectionsDocuments,
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
  const arrayCollection = collection.split(",");

  try {
    const sectionItems = await getSectionDocuments(collection, section);

    const pictures = await getPictures(arrayCollection, section);

    return res.status(200).send({ sectionItems, pictures });
  } catch (error) {
    return res
      .status(500)
      .send(`Error getting documents from section ${error}`);
  }
};

//Shop Collections By Condition
exports.fetchCollections = async (req, res) => {
  const { condition } = req.params;
  const arrayCollection = ["collections-overview"];

  let newCondition = condition;
  if (condition === "new") {
    newCondition = "newItem";
  } else if (condition === "best sellers") {
    newCondition = "bestSeller";
  }

  try {
    const collectionsItems = await getCollectionsDocuments(newCondition);
    const pictures = await getPictures(arrayCollection, condition);

    return res.status(200).send({ collectionsItems, pictures });
  } catch (error) {
    return res
      .status(500)
      .send(`Error getting documents from collection ${error}`);
  }
};

//Shop Collection by Condition
exports.fetchCollection = async (req, res) => {
  const { collection, condition } = req.params;
  const arrayCollection = collection.split(",");

  let newCondition = condition;
  if (condition === "new") {
    newCondition = "newItem";
  } else if (condition === "best sellers") {
    newCondition = "bestSeller";
  }

  try {
    const collectionItems = await getCollectionDocuments(
      collection,
      newCondition
    );

    const pictures = await getPictures(arrayCollection, condition);

    return res.status(200).send({ collectionItems, pictures });
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

    return res.status(200).send(webPictures);
  } catch (error) {
    return res.status(500).send(`Error getting pictures from section ${error}`);
  }
};
