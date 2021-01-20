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
  getSearchResults
} = require("../helpers/firestore");

const {
  toServerEnumerate
} = require("../helpers/enumerate");

const isObject = (value) => typeof value === "object";
const isEmptyObject = (object) => !isObject(object) || (isObject(object) && Object.keys(object).length === 0);

//Menu Collection/Section
exports.fetchHeader = async (req, res) => {
  try {
    const shopMenu = await getHeader();
    return res.status(200).send(shopMenu);
  } catch (error) {
    return res.status(500).send(`Error getting shop menu ${error}`);
  }
};

exports.fetchCollection= async (req, res) => {

  const { query, params } = req;
  console.log("query",query);
 
  console.log(params);

  const {collection}=params;
  
  const {labels}=query;

  const arrayPictures= ["collections"];
  
  try {
    let collectionsItems=[];
    let pictures=[];

    if (!isEmptyObject(query)){
    const serverLabels= toServerEnumerate[labels.replace("-","")];
    pictures = await getPictures(arrayPictures, serverLabels);
    if (collection==="featured"){
    collectionsItems = await getCollectionsByConditionDocuments(serverLabels);
    }
    else{
    collectionsItems = await getCollectionByConditionDocuments(collection, serverLabels);
 
   }
  }
   else{
   collectionsItems = await getCollectionDocuments(collection);
   pictures = await getPictures(arrayPictures, collection);
  }
    console.log("collectionsItems",collectionsItems.length);
    return res.status(200).send({ collectionsItems, pictures });
  } catch (error) {
    return res
      .status(500)
      .send(`Error getting documents from collection ${error}`);
  }
};

exports.fetchSection= async (req, res) => {

  const { params } = req;
 
  console.log(params);

  const {collection, section}=params;

  const arrayPictures= [collection];
  
  try {
  
 const collectionsItems = await getSectionDocuments(collection, toServerEnumerate[section.replace("-","")]);
  const pictures = await getPictures(arrayPictures, toServerEnumerate[section.replace("-","")]);

    return res.status(200).send({ collectionsItems, pictures });
  } catch (error) {
    return res
      .status(500)
      .send(`Error getting documents from collection ${error}`);
  }
};

// //Shop Collections By Condition
// exports.fetchCollectionsByCondition = async (req, res) => {
//   const { condition } = req.params;
//   const arrayPictures = ["collections"];

//   try {
//     const collectionsItems = await getCollectionsByConditionDocuments(condition);
//     const pictures = await getPictures(arrayPictures, condition);
    
//     return res.status(200).send({ collectionsItems, pictures });
//   } catch (error) {
//     return res
//       .status(500)
//       .send(`Error getting documents from collection ${error}`);
//   }
// };

// //Shop Collection by Condition
// exports.fetchCollectionByCondition = async (req, res) => {
//   const { collection, condition } = req.params;
//   const arrayPictures = collection.split(",");
 
//   try {
//     const collectionItems = await getCollectionByConditionDocuments(collection, condition);

//     const pictures = await getPictures(arrayPictures, condition);

//     return res.status(200).send({ collectionItems, pictures });
//   } catch (error) {
//     return res
//       .status(500)
//       .send(`Error getting documents from collection ${error}`);
//   }
// };

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

//Search
exports.fetchSearch= async (req, res) => {                                  
  const { search } = req.body;                                                                                                 
  const searchParams=search.split(" ");

  try {
   const results= await getSearchResults(searchParams);
  
    return res.status(200).send(results);
  } catch (error) {
    return res.status(500).send(`Error getting search results ${error}`);
  }
};