// const { firestore } = require("../helpers/admin");
const { addItemToUserCartDocument, removeItemFromUserCartDocument,clearItemFromUserCartDocument } = require("../helpers/firestore");

//Get User-Cart from Database
exports.addItemToUserCart  = async (req, res) => {
  const { item, selectedSize, user} = req.body;
  try {
    const cart = await addItemToUserCartDocument(item,selectedSize, user);
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(400).send(error);
  }
};


//Get User-Cart from Database
exports.removeItemFromUserCart = async (req, res) => {
  const { item, user } = req.body;
  try {
    const cart = await removeItemFromUserCartDocument(item, user);
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(400).send(error);
  }
};


exports.clearItemFromUserCart = async (req, res) => {
  const { item, user } = req.body;
  try {
    const cart = await clearItemFromUserCartDocument(item, user);
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(400).send(error);
  }
};
