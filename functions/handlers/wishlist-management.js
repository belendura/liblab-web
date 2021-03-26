const {
  toggleItemFromWishlistDocument,
} = require("../helpers/firestore/wishlist/toggle-item-from-wishlist-document");
const {
  removeItemFromUserWishlistDocument,
} = require("../helpers/firestore/wishlist/remove-item-from-user-wishlist-document");

//Get User-Wishlist from Database
exports.toggleItemFromWishlist = async (req, res) => {
  const { item, user } = req.body;
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
    console.log("wishlist", wishlist);
    return res.status(200).json(wishlist);
  } catch (error) {
    return res.status(400).send(error);
  }
};
