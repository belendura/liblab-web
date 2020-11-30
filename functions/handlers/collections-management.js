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
  const arrayCollection = collection.split(",");

  let upperSection = "";
  if (section.includes("best") || section.includes("face")) {
    const hyphenSection = section.replace(" ", "-").trim();
    const hyphenIndex = hyphenSection.indexOf("-");
    const firstSubstring = hyphenSection.substr(0, hyphenIndex + 1);
    const secondSubstring = section.substring(hyphenIndex).trim();
    uppercaseSection =
      firstSubstring.charAt(0).toUpperCase() +
      firstSubstring.slice(1) +
      secondSubstring.charAt(0).toUpperCase() +
      secondSubstring.slice(1);
  } else {
    const trimmedSection = section.replace(/scrub /gi, " ").trim();
    uppercaseSection =
      trimmedSection.charAt(0).toUpperCase() + trimmedSection.slice(1);
  }
  try {
    const sectionItems = await getSectionDocuments(collection, section);
    const pictures = await getPictures(arrayCollection, uppercaseSection);

    return res.status(200).send({ sectionItems, pictures });
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

    return res.status(200).send(webPictures);
  } catch (error) {
    return res.status(500).send(`Error getting pictures from section ${error}`);
  }
};
