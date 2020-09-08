// const { firestore } = require("../helpers/admin");
const { updateUserCartDocument } = require("../helpers/firestore");

//Get User-Cart from Database
exports.updateUserCart = async (req, res) => {
  const { authId, cartItems } = req.body;
  try {
    const cart = await updateUserCartDocument(authId, cartItems);
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(400).send(error);
  }
};
