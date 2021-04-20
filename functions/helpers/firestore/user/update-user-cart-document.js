const { firestore } = require("../../admin");

exports.updateUserCartDocument = async (user, cart) => {
  if (!user) return cart;
  console.log("hoila");

  const cartRef = firestore.doc(`carts/${user.id}`);

  const snapShot = await cartRef.get();

  if (!snapShot.exists) {
    try {
      if (cart.length > 0) {
        await cartRef.set({ cart: cart });
      } else {
        return [];
      }
    } catch (error) {
      throw new Error(error);
    }
  } else {
    try {
      const userCart = snapShot.data();
      const oldUserCart = userCart.cart;

      if (cart.length > 0) {
        if (oldUserCart.length === 0) {
          await cartRef.set({ cart: cart });
        } else {
          const filteredCart = cart.reduce((accumulator, cartItem) => {
            const existingCartItem = oldUserCart.find(
              (userCartItem) =>
                userCartItem.id === cartItem.id &&
                userCartItem.selectedSize === cartItem.selectedSize
            );
            if (!existingCartItem) {
              accumulator.push(cartItem);
            }
            return accumulator;
          }, []);

          const filteredUserCart = oldUserCart.reduce(
            (accumulator, userCartItem) => {
              const existingCartItem = cart.some(
                (cartItem) =>
                  userCartItem.id === cartItem.id &&
                  userCartItem.selectedSize === cartItem.selectedSize
              );
              const updatedUserCartItem = {
                id: userCartItem.id,
                reference: userCartItem.reference,
                url: userCartItem.url,
                name: userCartItem.name,
                description: userCartItem.description,
                price: userCartItem.price,
                lastPrice: userCartItem.lastPrice,
                sale: userCartItem.sale,
                color: userCartItem.color,
                selectedSize: userCartItem.selectedSize,
                quantity: existingCartItem
                  ? userCartItem.quantity < 5
                    ? userCartItem.quantity + 1
                    : 5
                  : 0,
              };

              return existingCartItem
                ? [...accumulator, updatedUserCartItem]
                : [...accumulator, userCartItem];
            },
            []
          );
          console.log("filteredCart", filteredCart);
          console.log("filteredUserCart", filteredUserCart);
          const newUserCart = filteredUserCart.concat(filteredCart);
          await cartRef.update({ cart: newUserCart }, { merge: true });
        }
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  const updatedSnapShot = await cartRef.get();
  const updatedUserCart = updatedSnapShot.data();

  return updatedUserCart.cart;
};
