const { firestore } = require("../../admin");

exports.removeItemFromUserCartDocument = async (itemToRemove, user) => {
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

      const existingCartItem = oldUserCart.find(
        (cartItem) =>
          cartItem.id === id && cartItem.selectedSize === selectedSize
      );

      let updatedCart = [];

      if (existingCartItem) {
        if (existingCartItem.quantity > 1) {
          updatedCart = oldUserCart.map((cartItem) =>
            cartItem.id === id && cartItem.selectedSize === selectedSize
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          );
        } else {
          updatedCart = oldUserCart.filter(
            (cartItem) =>
              cartItem.id !== id ||
              (cartItem.id === id && cartItem.selectedSize !== selectedSize)
          );
        }
      }
      if (!existingCartItem) {
        updatedCart = [...oldUserCart];
      }
      await cartRef.set({ cart: updatedCart });
      const updatedSnapShot = await cartRef.get();
      const updatedUserCart = updatedSnapShot.data();
      const { cart } = updatedUserCart;
      return cart;
    } catch (error) {
      throw new Error(error);
    }
  }
};
