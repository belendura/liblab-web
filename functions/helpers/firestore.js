const { firestore } = require("./admin");

exports.createUserDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { uid, email, displayName, providerData } = userAuth;

    let name = displayName;
    const createdAt = Date();
    const { firstName, lastName, ...otherData } = additionalData;

    if (providerData[0].providerId === "password") {
      name = `${firstName} ${lastName}`;
    }
    try {
      const newUser = {
        displayName: name,
        email,
        createdAt,
        id: uid,
        ...otherData,
      };
      await userRef.set(newUser);
      return newUser;
    } catch (error) {
      throw new Error(error);
    }
  }
};

exports.getUserDocument = async (userId) => {
  if (!userId) return;

  const userRef = firestore.doc(`users/${userId}`);
  const userSnapShot = await userRef.get();

  if (userSnapShot.exists) {
    const user = userSnapShot.data();
    return user;
  }
};

exports.getCollectionDocuments = async (condition) => {
  const documentRefs = await firestore
    .collection("collections")
    .listDocuments(); //WOMEN / MEN / UNISEX

  try {
    const collectionData = documentRefs.forEach((docRef) => {
      return docRef.listCollections().then((collections) => {
        const collectData = collections.map(async (colRef) => {
          // console.log("colection id", `${colRef.id}`);
          return await colRef
            .where(condition, "==", true)
            .get()
            .then((querySnapshot) => {
              const queryData = querySnapshot.docs.map((docSnapshot) =>
                docSnapshot.data()
              );
              // console.log("queryData", queryData);
              return queryData;
            });
        });
        console.log("collectData", collectData);
        return collectData;
      });
    });
    console.log("collectionData", collectionData);
    return collectionData;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getSectionDocuments = async (collection, section) => {
  if (!collection || !section) return;

  const querySnapshot = await firestore
    .collection(`collections/${collection}/${section}`)
    .get();

  try {
    const sectionData = querySnapshot.docs.map((doc) => {
      return doc.data();
    });
    return sectionData;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateUserCartDocument = async (user, cart) => {
  if (!user) return cart;

  const cartRef = firestore.doc(`carts/${user.id}`);

  const snapShot = await cartRef.get();

  //if document does not exist
  if (!snapShot.exists) {
    try {
      if (cart.length > 0) {
        await cartRef.set({ cart: cart });
      }
      return cart;
    } catch (error) {
      throw new Error(error);
    }
    //if document exists
  } else {
    try {
      const userCart = snapShot.data();
      const oldUserCart = userCart.cart;

      //if cart is empty and usercart is not empty
      if (cart.length === 0 && oldUserCart.length > 0) {
        return oldUserCart;
      }
      //if userCart is empty
      else if (oldUserCart.length === 0) {
        await cartRef.set({ cart: cart });
        return cart;
      }
      //if cart is not empty and usercart is not empty
      else if (cart.length > 0 && oldUserCart.length > 0) {
        const filteredCart = cart.reduce((accumulator, cartItem) => {
          const existingCartItem = oldUserCart.find(
            (userCartItem) =>
              userCartItem.Reference === cartItem.Reference &&
              userCartItem.Color.name === cartItem.Color.name &&
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
                userCartItem.Reference === cartItem.Reference &&
                userCartItem.Color.name === cartItem.Color.name &&
                userCartItem.selectedSize === cartItem.selectedSize
            );

            if (existingCartItem) {
              const updatedUserCartItem = {
                Reference: userCartItem.Reference,
                Url: userCartItem.Url,
                Name: userCartItem.Name,
                LastPrice: userCartItem.LastPrice,
                Color: userCartItem.Color,
                selectedSize: userCartItem.selectedSize,
                quantity: userCartItem.quantity + 1,
              };

              accumulator.push(updatedUserCartItem);
            } else {
              accumulator.push(userCartItem);
            }

            return accumulator;
          },
          []
        );
        console.log("filteredUserCart", filteredUserCart);
        const newUserCart = filteredUserCart.concat(filteredCart);
        console.log("newUserCart", newUserCart);
        await cartRef.update({ cart: newUserCart }, { merge: true });
      }
      const updatedSnapShot = await cartRef.get();
      const updatedUserCart = updatedSnapShot.data();
      console.log("updatedUserCart", updatedUserCart);
      return updatedUserCart.cart;
    } catch (error) {
      throw new Error(error);
    }
  }
};

exports.updateUserWishlistDocument = async (user, wishlist) => {
  if (!user) return wishlist;
  console.log("wishlist", wishlist);
  console.log("user", user);

  const wishlistRef = firestore.doc(`wishlists/${user.id}`);

  const snapShot = await wishlistRef.get();

  //if document does not exist
  if (!snapShot.exists) {
    try {
      if (wishlist.length > 0) {
        await wishlistRef.set({ wishlist: wishlist });
      }
      return wishlist;
    } catch (error) {
      throw new Error(error);
    }
    //if document exists
  } else {
    try {
      const userWishlist = snapShot.data();
      console.log("userWishlist", userWishlist);
      const oldUserWishlist = userWishlist.wishlist;
      console.log("oldUserWishlist", oldUserWishlist);

      //if wishlist is empty and userWishlist is not empty
      if (wishlist.length === 0 && oldUserWishlist.length > 0) {
        return oldUserWishlist;
      }
      //if userWishlist is empty
      else if (oldUserWishlist.length === 0) {
        await wishlistRef.set({ wishlist: wishlist });
        return wishlist;
      }
      //if wishlist is not empty and userWishlist is not empty
      else if (wishlist.length > 0 && oldUserWishlist.length > 0) {
        console.log("he hecho merge");
        const filteredWishlist = wishlist.reduce(
          (accumulator, wishlistItem) => {
            const existingWishlistItem = oldUserWishlist.some(
              (userWishlistItem) =>
                userWishlistItem.Reference === wishlistItem.Reference &&
                userWishlistItem.Color.name === wishlistItem.Color.name
            );

            console.log("existingWishlistItem", existingWishlistItem);
            if (!existingWishlistItem) {
              accumulator.push(wishlistItem);
            }
            console.log("accumulator", accumulator);
            return accumulator;
          },
          []
        );

        const newUserWishlist = oldUserWishlist.concat(filteredWishlist);
        console.log("newUserWishlist", newUserWishlist);
        await wishlistRef.update(
          { wishlist: newUserWishlist },
          { merge: true }
        );
      }
      const updatedSnapShot = await wishlistRef.get();
      const updatedUserWishlist = updatedSnapShot.data();
      console.log("updatedUserWishlist", updatedUserWishlist);
      return updatedUserWishlist.wishlist;
    } catch (error) {
      throw new Error(error);
    }
  }
};
