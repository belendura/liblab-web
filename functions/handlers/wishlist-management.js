// const { firestore } = require("../helpers/admin");
const { toggleItemFromWishlistDocument, removeItemFromUserWishlistDocument} = require("../helpers/firestore");

//Get User-Wishlist from Database
exports.toggleItemFromWishlist  = async (req, res) => {
  const { item,  user} = req.body;
  try {
    const wishlist = await toggleItemFromWishlistDocument(item, user);
    return res.status(200).json(wishlist);
  } catch (error) {
    return res.status(400).send(error);
  }
};


//Get User-Wishlist from Database
exports.removeItemFromUserWishlist = async (req, res) => {
  const { item, user } = req.body;
  try {
    const wishlist = await removeItemFromUserWishlistDocument(item, user);
    return res.status(200).json(Wishlist);
  } catch (error) {
    return res.status(400).send(error);
  }
};

