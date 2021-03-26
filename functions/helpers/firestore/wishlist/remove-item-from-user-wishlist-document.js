const { firestore } = require("../../admin");

exports.removeItemFromUserWishlistDocument = async (itemToRemove, user) => {
  if (!user || !itemToRemove) return;

  const { id } = itemToRemove;

  const wishlistRef = firestore.doc(`wishlists/${user.id}`);
  const snapShot = await wishlistRef.get();

  if (!snapShot.exists) {
    throw new Error(error);
  } else {
    try {
      const userWishlist = snapShot.data();
      const oldUserWishlist = userWishlist.wishlist;

      const updatedWishlist = oldUserWishlist.filter(
        (wishlistItem) => wishlistItem.id !== id
      );

      await wishlistRef.set({ wishlist: updatedWishlist });
      const updatedSnapShot = await wishlistRef.get();
      const updatedUserWishlist = updatedSnapShot.data();

      return updatedUserWishlist.wishlist;
    } catch (error) {
      throw new Error(error);
    }
  }
};
