const {
  getShopMenuDocuments,
  getCollectionByConditionDocuments,
  getCollectionsByConditionDocuments,
  getCollectionDocuments,
  getSectionDocuments,
  getItemDocument,
  getPictures,
  getSearchResults,
} = require("../helpers/firestore");

const { toServerEnumerate } = require("../helpers/enumerate");

const isObject = (value) => typeof value === "object";
const isEmptyObject = (object) =>
  !isObject(object) || (isObject(object) && Object.keys(object).length === 0);

//Menu Collection/Section
exports.fetchShopMenu = async (req, res) => {
  try {
    const shopMenu = await getShopMenuDocuments();

    return res.status(200).send(shopMenu);
  } catch (error) {
    return res.status(500).send(`Error getting shop menu ${error}`);
  }
};

exports.fetchCollection = async (req, res) => {
  const { query, params } = req;

  const { urlCollection } = params;

  const { labels } = query;

  const arrayPictures = ["collections"];

  try {
    let collectionsItems = [];
    let pictures = [];

    if (!isEmptyObject(query)) {
      const serverLabels = toServerEnumerate[labels.replace("-", "")];
      pictures = await getPictures(arrayPictures, serverLabels);
      if (urlCollection === "featured") {
        collectionsItems = await getCollectionsByConditionDocuments(
          serverLabels
        );
      } else {
        collectionsItems = await getCollectionByConditionDocuments(
          urlCollection,
          serverLabels
        );
      }
    } else {
      collectionsItems = await getCollectionDocuments(urlCollection);
      pictures = await getPictures(arrayPictures, urlCollection);
    }

    return res.status(200).send({ collectionsItems, pictures });
  } catch (error) {
    return res
      .status(500)
      .send(`Error getting documents from collection ${error}`);
  }
};

exports.fetchSection = async (req, res) => {
  const { params } = req;

  const { urlCollection, urlSection } = params;

  const arrayPictures = [urlCollection];

  try {
    const collectionsItems = await getSectionDocuments(
      urlCollection,
      toServerEnumerate[urlSection.replace("-", "")]
    );
    const pictures = await getPictures(
      arrayPictures,
      toServerEnumerate[urlSection.replace("-", "")]
    );

    return res.status(200).send({ collectionsItems, pictures });
  } catch (error) {
    return res
      .status(500)
      .send(`Error getting documents from collection ${error}`);
  }
};

//Shop Item
exports.fetchItem = async (req, res) => {
  const { query, params } = req;

  const { urlCollection, urlSection, urlReference } = params;

  const { colors } = query;

  try {
    const item = await getItemDocument(
      urlCollection,
      toServerEnumerate[urlSection.replace("-", "")],
      urlReference,
      colors.replace("-", " ")
    );

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
exports.fetchSearch = async (req, res) => {
  const { search } = req.body;
  const searchParams = search.split(" ");

  try {
    const results = await getSearchResults(searchParams);

    return res.status(200).send(results);
  } catch (error) {
    return res.status(500).send(`Error getting search results ${error}`);
  }
};
