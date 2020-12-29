const { createSizeRequestDocument } = require("../helpers/firestore");

//RequestSize
exports.postSizeRequest = async (req, res) => {
  // console.log("body", req.body);
  const { itemCredentials, userCredentials } = req.body;

  try {
    await createSizeRequestDocument(itemCredentials, userCredentials);
    return res.status(200).send("Request successfully processed");
  } catch (error) {
    return res.status(500).send(`Error posting size request ${error}`);
  }
};
