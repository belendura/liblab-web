const { firestore } = require("../../admin");

exports.toggleItemFromWishlistDocument = async (item, user) => {
  if (!user || !item) return;

  const { id } = item;
  const wishlistRef = firestore.doc(`wishlists/${user.id}`);
  const snapShot = await wishlistRef.get();

  let updatedWishlist = [];

  if (!snapShot.exists) {
    try {
      updatedWishlist.push(item);
      await wishlistRef.set({ wishlist: updatedWishlist });
    } catch (error) {
      throw new Error(error);
    }
  } else {
    try {
      const userWishlist = snapShot.data();
      const oldUserWishlist = userWishlist.wishlist;

      if (oldUserWishlist.length === 0) {
        updatedWishlist.push(item);
        await wishlistRef.set({ wishlist: updatedWishlist });
      } else {
        const existingWishlistItem = oldUserWishlist.find(
          (wishlistItem) => wishlistItem.id === id
        );

        if (existingWishlistItem) {
          updatedWishlist = oldUserWishlist.filter(
            (wishlistItem) => wishlistItem.id !== id
          );
        } else {
          updatedWishlist = [...oldUserWishlist, item];
        }
        await wishlistRef.set({ wishlist: updatedWishlist });
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  const updatedSnapShot = await wishlistRef.get();
  const updatedUserWishlist = updatedSnapShot.data();
  return updatedUserWishlist.wishlist;
};
