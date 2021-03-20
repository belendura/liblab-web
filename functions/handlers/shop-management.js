const { createSizeRequestDocument } = require("../helpers/firestore");

//RequestSize
exports.postSizeRequest = async (req, res) => {
  const { itemCredentials, userCredentials } = req.body;

  try {
    await createSizeRequestDocument(itemCredentials, userCredentials);
    return res.status(200).send("Request successfully processed");
  } catch (error) {
    return res.status(500).send(`Error posting size request ${error}`);
  }
};
