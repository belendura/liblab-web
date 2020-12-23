const {
  getHeader,
  getCollectionByConditionDocuments,
  getCollectionsByConditionDocuments,
  getCollectionDocuments,
  getSectionDocuments,
  getItemDocument,
  getItemByConditionDocument,
  getItemByConditionOverallDocument,
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

//Shop Collection
exports.fetchCollection= async (req, res) => {
  const { collection } = req.params;

  const arrayCollection = ["collections"];
 
  try {
    const collectionsItems = await getCollectionDocuments(collection);
    const pictures = await getPictures(arrayCollection, collection);
    return res.status(200).send({ collectionsItems, pictures });
  } catch (error) {
    return res
      .status(500)
      .send(`Error getting documents from collection ${error}`);
  }
};

//Shop Collections By Condition
exports.fetchCollectionsByCondition = async (req, res) => {
  const { condition } = req.params;
  const arrayCollection = ["collections"];

  try {
    const collectionsItems = await getCollectionsByConditionDocuments(condition);
    const pictures = await getPictures(arrayCollection, condition);
    console.log("pictures",pictures.length)
    return res.status(200).send({ collectionsItems, pictures });
  } catch (error) {
    return res
      .status(500)
      .send(`Error getting documents from collection ${error}`);
  }
};

//Shop Collection by Condition
exports.fetchCollectionByCondition = async (req, res) => {
  const { collection, condition } = req.params;
  const arrayCollection = collection.split(",");
 
  try {
    const collectionItems = await getCollectionByConditionDocuments(collection, condition);

    const pictures = await getPictures(arrayCollection, condition);

    return res.status(200).send({ collectionItems, pictures });
  } catch (error) {
    return res
      .status(500)
      .send(`Error getting documents from collection ${error}`);
  }
};

//Shop Item
exports.fetchItem= async (req, res) => {
  const { collection,section,reference,color } = req.params;
  
  try {
    const item = await getItemDocument( collection,section,reference,color);
     return res.status(200).send(item);
  } catch (error) {
    return res
      .status(500)
      .send(`Error getting document from collection ${error}`);
  }
};

//Shop Item By Condition
exports.fetchItemByCondition= async (req, res) => {
  const { collection,condition,reference,color } = req.params;
 
  try {
    const item = await getItemByConditionDocument( collection,condition,reference,color);
     return res.status(200).send(item);
  } catch (error) {
    return res
      .status(500)
      .send(`Error getting document from collection ${error}`);
  }
};

//Shop Item By Condition
exports.fetchItemByConditionOverall= async (req, res) => {
  const {condition,reference,color } = req.params;

  try {
    const item = await getItemByConditionOverallDocument(condition,reference,color);
     return res.status(200).send(item);
  } catch (error) {
    return res
      .status(500)
      .send(`Error getting document from collection ${error}`);
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
