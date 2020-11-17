const { getSizesGuide } = require("../helpers/firestore");

//SizesGuide
exports.fetchSizesGuide = async (req, res) => {
  const { collection, section } = req.params;
  try {
    const sizesGuide = await getSizesGuide(collection, section);
    return res.status(200).send(sizesGuide);
  } catch (error) {
    return res.status(500).send(`Error getting sizes guide ${error}`);
  }
};
