const { firestore } = require("../../admin");

exports.addItemToUserCartDocument = async (itemToAdd, selectedSize, user) => {
  if (!user || !itemToAdd) return;

  const { id } = itemToAdd;
  const cartRef = firestore.doc(`carts/${user.id}`);
  const snapShot = await cartRef.get();

  const shortItem = {
    id: itemToAdd.id,
    reference: itemToAdd.reference,
    url: itemToAdd.url[0],
    name: itemToAdd.name,
    description: itemToAdd.description,
    price: itemToAdd.price,
    lastPrice: itemToAdd.lastPrice,
    sale: itemToAdd.sale,
    color: itemToAdd.color,
    selectedSize: selectedSize,
    quantity: 1,
  };

  let updatedCart = [];

  if (!snapShot.exists) {
    try {
      updatedCart.push(shortItem);
      await cartRef.set({ cart: updatedCart });
    } catch (error) {
      throw new Error(error);
    }
  } else {
    try {
      const userCart = snapShot.data();
      const oldUserCart = userCart.cart;

      if (oldUserCart.length === 0) {
        updatedCart.push(shortItem);
        await cartRef.set({ cart: updatedCart });
      } else {
        const existingCartItem = oldUserCart.find(
          (cartItem) =>
            cartItem.id === id && cartItem.selectedSize === selectedSize
        );

        if (existingCartItem) {
          updatedCart = oldUserCart.map((cartItem) => {
            return cartItem.id === id && cartItem.selectedSize === selectedSize
              ? {
                  ...cartItem,
                  quantity: cartItem.quantity + 1,
                }
              : cartItem;
          });
        } else {
          updatedCart = [...oldUserCart, shortItem];
        }
        await cartRef.set({ cart: updatedCart });
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  const updatedSnapShot = await cartRef.get();
  const updatedUserCart = updatedSnapShot.data();
  return updatedUserCart.cart;
};
