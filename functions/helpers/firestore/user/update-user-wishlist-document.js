const { firestore } = require("../../admin");

exports.updateUserWishlistDocument = async (user, wishlist) => {
  if (!user) return wishlist;

  const wishlistRef = firestore.doc(`wishlists/${user.id}`);

  const snapShot = await wishlistRef.get();

  if (!snapShot.exists) {
    try {
      if (wishlist.length > 0) {
        await wishlistRef.set({ wishlist: wishlist });
      } else {
        return [];
      }
    } catch (error) {
      throw new Error(error);
    }
  } else {
    try {
      const userWishlist = snapShot.data();
      const oldUserWishlist = userWishlist.wishlist;

      if (wishlist.length > 0) {
        if (oldUserWishlist.length === 0) {
          await wishlistRef.set({ wishlist: wishlist });
        } else {
          const filteredWishlist = wishlist.reduce(
            (accumulator, wishlistItem) => {
              const existingWishlistItem = oldUserWishlist.some(
                (userWishlistItem) => userWishlistItem.id === wishlistItem.id
              );
              if (!existingWishlistItem) {
                accumulator.push(wishlistItem);
              }

              return accumulator;
            },
            []
          );

          const newUserWishlist = oldUserWishlist.concat(filteredWishlist);

          await wishlistRef.update(
            { wishlist: newUserWishlist },
            { merge: true }
          );
        }
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  const updatedSnapShot = await wishlistRef.get();
  const updatedUserWishlist = updatedSnapShot.data();

  return updatedUserWishlist.wishlist;
};
