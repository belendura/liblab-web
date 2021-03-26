const { firestore } = require("../../admin");

exports.clearItemFromUserCartDocument = async (itemToRemove, user) => {
  if (!user || !itemToRemove) return;

  const { id, selectedSize } = itemToRemove;

  const cartRef = firestore.doc(`carts/${user.id}`);
  const snapShot = await cartRef.get();

  if (!snapShot.exists) {
    throw new Error(error);
  } else {
    try {
      const userCart = snapShot.data();
      const oldUserCart = userCart.cart;

      updatedCart = oldUserCart.filter(
        (cartItem) =>
          cartItem.id !== id ||
          (cartItem.id === id && cartItem.selectedSize !== selectedSize)
      );

      await cartRef.set({ cart: updatedCart });
      const updatedSnapShot = await cartRef.get();
      const updatedUserCart = updatedSnapShot.data();

      return updatedUserCart.cart;
    } catch (error) {
      throw new Error(error);
    }
  }
};
