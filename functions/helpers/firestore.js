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

exports.getPictures = async (collections, section) => {
  if (!collections.length) return;

  try {
    const webPictures = await collections.reduce(
      async (previousPromise, item) => {
        let accum = await previousPromise;

        const documentRef = firestore.doc(`web-pictures/${item}`);

        const documentSnapshot = await documentRef.get();
        if (documentSnapshot.exists) {
          const data = documentSnapshot.data();
          if (section) {
            accum = { ...accum, [section]: data[section] };
          } else {
            accum = { ...accum, [item]: data };
          }
        }
        return accum;
      },
      Promise.resolve({})
    );

    return webPictures;
  } catch (error) {
    throw new Error(error);
  }
};

const getHeaderPictures = async () => {
  const documentRef = firestore.doc(`web-pictures/header`);

  try {
    const documentSnapshot = await documentRef.get();

    if (documentSnapshot.exists) {
      const data = documentSnapshot.data();
      return data;
    }
  } catch (error) {
    throw new Error(error);
  }
};

const getFeaturedSection = async (collectionsRefs, conditions) => {
  try {
    const extraSections = await conditions.reduce(
      async (previousPromise, condition) => {
        let accum = await previousPromise;

        for (collectionRef of collectionsRefs) {
          return await collectionRef.get().then((querySnapshot) => {
            for (doc of querySnapshot.docs) {
              const item = doc.data();

              if (item[condition]) {
                accum.push(condition);

                break;
              }
            }

            return accum;
          });
        }
      },
      Promise.resolve([])
    );

    return extraSections;
  } catch (error) {
    throw new Error(error);
  }
};

const getShopMenu = async () => {
  const documentRefs = await firestore
    .collection(`collections`)
    .listDocuments();

  try {
    const shopMenu = await documentRefs.reduce(
      async (previousPromise, docRef) => {
        let accum = await previousPromise;
        const featuredSections = await docRef
          .listCollections()
          .then((collectionsRefs) => {
            const sections = getFeaturedSection(collectionsRefs, [
              "sale",
              "newItem",
              "bestSeller",
              "sustainable",
            ]);
            return sections;
          });

        const sections = await docRef
          .listCollections()
          .then((collectionsRefs) => {
            const sections = collectionsRefs.reduce(
              async (previousPromise, collectionRef) => {
                let accum = await previousPromise;
                accum.push(collectionRef.id);
                return accum;
              },
              Promise.resolve([])
            );
            return sections;
          });

        const id = docRef.id;
        accum[id] = { sections, featuredSections };

        return accum;
      },
      Promise.resolve({})
    );

    return shopMenu;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getHeader = async () => {
  try {
    const shopMenu = await getShopMenu();

    const shopMenuPictures = await getHeaderPictures();

    return { shopMenu, shopMenuPictures };
  } catch (error) {
    throw new Error(error);
  }
};

exports.getCollectionDocuments = async (collection) => {
  const collectionsRefs = await firestore
    .doc(`collections/${collection}`)
    .listCollections();

  try {
    const queryItems = await collectionsRefs.reduce(
      async (previousPromise, colRef) => {
        let accum = await previousPromise;
        return await colRef
          .get()
          .then((querySnapshot) => {
            querySnapshot.docs.map((docSnapshot) =>
              accum.push(docSnapshot.data())
            );
            return accum;
          });
      },
      Promise.resolve([])
    );

    const filteredQueryItems = queryItems.filter(
      (item, index, arrayItem) =>
        arrayItem.findIndex(
          (itemIndex) =>
            itemIndex.reference === item.reference &&
            itemIndex.color.code === item.color.code
        ) === index
    );

    return filteredQueryItems;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getCollectionByConditionDocuments = async (collection, condition) => {
  const collectionsRefs = await firestore
    .doc(`collections/${collection}`)
    .listCollections();

  try {
    const queryItems = await collectionsRefs.reduce(
      async (previousPromise, colRef) => {
        let accum = await previousPromise;
        return await colRef
          .where(condition, "==", true)
          .get()
          .then((querySnapshot) => {
            querySnapshot.docs.map((docSnapshot) =>
              accum.push(docSnapshot.data())
            );
            return accum;
          });
      },
      Promise.resolve([])
    );

    const supplementaryQueryItems = await queryItems.reduce(
      async (prevPromise, queryItem) => {
        let accumulator = await prevPromise;
        const data = await collectionsRefs.reduce(
          async (previousPromise, colRef) => {
            let accum = await previousPromise;

            return await colRef
              .where("reference", "==", queryItem.reference)
              .get()
              .then((querySnapshot) => {
                querySnapshot.docs.filter((docSnapshot) => {
                  const data = docSnapshot.data();
                  if (data.color.code !== queryItem.color.code) {
                    return (accum = { ...accum, ...data });
                  }
                });
                return accum;
              });
          },
          Promise.resolve({})
        );

        if (Object.entries(data).length !== 0 && data.constructor === Object) {
          accumulator = [...accumulator, data];
        }

        return accumulator;
      },
      Promise.resolve([])
    );

    const extendedQueryItems = queryItems.concat(supplementaryQueryItems);

    const filteredQueryItems = extendedQueryItems.filter(
      (item, index, arrayItem) =>
        arrayItem.findIndex(
          (itemIndex) =>
            itemIndex.reference === item.reference &&
            itemIndex.color.code === item.color.code
        ) === index
    );

    return filteredQueryItems;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getCollectionsByConditionDocuments = async (condition) => {
  if (!condition)
  return

  const documentRefs = await firestore
    .collection("collections")
    .listDocuments();

  const collectionsRefs = await documentRefs.reduce(
    async (previousPromise, docRef) => {
      let accum = await previousPromise;
      const colRef = await docRef.listCollections();

      accum = [...accum, ...colRef];

      return accum;
    },
    Promise.resolve([])
  );

  try {
    const queryItems = await
      Promise.all(collectionsRefs.map(async colRef => {
        return await colRef
          .where(condition, "==", true)
          .get()
          .then((querySnapshot) => {
            const queryItems = querySnapshot.docs.map((docSnapshot) =>{
             const data= docSnapshot.data()
             return data;
            });
            return queryItems;
          });
      }))
    

    const collectionsItems = queryItems.reduce((accum, item) => {
      return [...accum, ...item];
    }, []);

    const filteredCollectionsItems = collectionsItems.filter(
      (item, index, arrayItem) =>
        arrayItem.findIndex((itemIndex) => itemIndex.id === item.id) === index
    );

    return filteredCollectionsItems;
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

exports.getItemDocument = async (collection, section, reference, color) => {
  if (!collection || !section || !reference || !color) return;

  const colRef= await firestore
  .collection(`collections/${collection}/${section}`)

try{

  const availableColors= await colRef
        .where("reference", "==", reference)
        .get()
        .then((querySnapshot) => {
      return   querySnapshot.docs.reduce((accum,docSnapshot) =>{
        const data=docSnapshot.data();
        return  accum=[...accum, data.color]
        
         },[])}       
  );

  const queryItem = await colRef
        .where("reference", "==", reference)
        .get()
        .then((querySnapshot) => {
      return   querySnapshot.docs.reduce((accum,docSnapshot) =>{
        const data=docSnapshot.data();
  
        if (data.color.name===color){
          data.availableColors=availableColors
          accum.push(data)
          
        }
        return accum
         },[])}       
  );

    return queryItem;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getItemByConditionDocument = async (collection, condition, reference, color) => {
  if (!collection || !condition || !reference || !color) return;


  const collectionsRefs = await firestore
  .doc(`collections/${collection}`)
  .listCollections();

try {
  const availableColors = await collectionsRefs.reduce(
    async (previousPromise, colRef) => {
      let accum = await previousPromise;
return await colRef
     .where("reference", "==", reference)
     .get()
     .then((querySnapshot) => {
 querySnapshot.docs.map((docSnapshot) =>{                                     
       const data=docSnapshot.data();
       accum.push(data.color)
               return accum
        })
        return accum
      }  
   )
    },Promise.resolve([]))

 
  const queryItems = await collectionsRefs.reduce(
    async (previousPromise, colRef) => {
      let accum = await previousPromise;

  return await colRef
         .where(condition, "==", true)
        .where("reference", "==", reference)
        .get()
        .then((querySnapshot) => {
           querySnapshot.docs.map((docSnapshot) =>{
              const data=docSnapshot.data();
              if (data.color.name===color){
                data.availableColors=availableColors;
                accum.push(data)
              }
              return accum;
            })
            return accum
          }
          )
        },Promise.resolve([]));

 
  const filteredQueryItems = queryItems.filter(
    (item, index, arrayItem) =>
      arrayItem.findIndex(
        (itemIndex) =>
          itemIndex.reference === item.reference &&
          itemIndex.color.code === item.color.code
      ) === index
  );

  return filteredQueryItems;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getItemByConditionOverallDocument = async ( condition, reference, color) => {
  if (!condition || !reference || !color) return;


  const documentRefs = await firestore
  .collection(`collections`)
  .listDocuments();

  const collectionsRefs = await documentRefs.reduce(
    async (previousPromise, docRef) => {
      let accum = await previousPromise;
      const colRef = await docRef.listCollections();

      accum = [...accum, ...colRef];

      return accum;
    },
    Promise.resolve([])
  );

try {
  const availableColors = await collectionsRefs.reduce(
    async (previousPromise, colRef) => {
      let accum = await previousPromise;
return await colRef
     .where("reference", "==", reference)
     .get()
     .then((querySnapshot) => {
 querySnapshot.docs.map((docSnapshot) =>{                                     
       const data=docSnapshot.data();
       accum.push(data.color)
               return accum
        })
        return accum
      }  
   )
    },Promise.resolve([]))

 
 
  const queryItems = await collectionsRefs.reduce(
    async (previousPromise, colRef) => {
      let accum = await previousPromise;
  return await colRef
         .where(condition, "==", true)
        .where("reference", "==", reference)
        .get()
        .then((querySnapshot) => {
           querySnapshot.docs.map((docSnapshot) =>{
              const data=docSnapshot.data();
         
              if (data.color.name===color){
              
                data.availableColors=availableColors;
                accum.push(data)
              }
              return accum;
            })
         
            return accum
          }
          )
        },Promise.resolve([]));

    
 
  const filteredQueryItems = queryItems.filter(
    (item, index, arrayItem) =>
      arrayItem.findIndex(
        (itemIndex) =>
          itemIndex.reference === item.reference &&
          itemIndex.color.code === item.color.code
      ) === index
  );

  return filteredQueryItems;
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
                reference: userCartItem.Reference,
                url: userCartItem.Url,
                name: userCartItem.Name,
                lastPrice: userCartItem.LastPrice,
                color: userCartItem.Color,
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

exports.getSizesGuide = async (collection, section) => {
  if (!collection || !section) return;

  const documentRefs = await firestore
    .collection(`sizesGuide/${collection}/${section}`)
    .listDocuments();

  try {
    const sizesData = await documentRefs.reduce(
      async (previousPromise, docRef) => {
        let accum = await previousPromise;
        await docRef.get().then((docSnapshot) => {
          return (accum[docSnapshot.id] = docSnapshot.data());
        });

        return accum;
      },
      Promise.resolve({})
    );

    return sizesData;
  } catch (error) {
    throw new Error(error);
  }
};

const createRequestItemDocument = async (id, itemCredentials) => {
  const date = new Date();
  const docRequestRef = await firestore
    .collection(`sizeRequests/${id}/requests`)
    .add({ ...itemCredentials, createdAt: date });

  const docRequestSnapshot = await docRequestRef.get();
  return (data = docRequestSnapshot.data());
};

exports.createSizeRequestDocument = async (
  itemCredentials,
  userCredentials
) => {
  if (!itemCredentials || !userCredentials) return;

  const colRef = firestore.collection(`sizeRequests`);
  const { reference, color, size } = itemCredentials;
  const { email } = userCredentials;

  let userExists = false;
  let requestExists = false;

  try {
    querySnapshot = await colRef.where("email", "==", email).get();

    if (!querySnapshot.empty) {
      userExists = true;
    }
    let documentRef = {};

    if (userExists) {
      if (!querySnapshot.empty) {
        querySnapshot.docs.forEach((docSnapshot) => {
          if (docSnapshot.exists) {
            return (documentRef = docSnapshot.ref);
          }
        });

        const docSnapshot = await documentRef.get();

        const id = docSnapshot.id;

        const colRequestRef = firestore.collection(
          `size-requests/${id}/requests`
        );

        const queryRequestSnapshot = await colRequestRef
          .where("reference", "==", reference)
          .where("color", "==", color)
          .where("size", "==", size)
          .get();

        if (!queryRequestSnapshot.empty) {
          queryRequestSnapshot.docs.map((doc) => {
            if (doc.exists) {
              const newDate = new Date();
              doc.ref.update({ createdAt: newDate });
              requestExists = true;
            }
          });
        }

        if (!requestExists) {
          await createRequestItemDocument(id, itemCredentials);
        }
      }
    } else {
      const newDate = new Date();
      const docUserRef = await firestore
        .collection(`size-requests/`)
        .add({ email, createdAt: newDate });

      const docUserSnapShot = await docUserRef.get();
      const id = docUserSnapShot.id;

      await createRequestItemDocument(id, itemCredentials);
    }
    return;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getSearchResults=async (searchParams)=>{

if (!searchParams)
return;

const documentRefs = await firestore
.collection("collections")
.listDocuments();

const collectionsRefs = await documentRefs.reduce(
  async (previousPromise, docRef) => {
    let accum = await previousPromise;
    const colRef = await docRef.listCollections();

      accum = [...accum, ...colRef];

  return accum;
},
Promise.resolve([])
);

try {

const queryItems = await Promise.all(searchParams.reduce(async (previousPromise,searchItem)=>{
  let accumulator = await previousPromise;
await Promise.all(collectionsRefs.reduce(async (colRef) => {

           return await colRef
          .get()
      .then((querySnapshot) => {
        querySnapshot.docs.reduce((accu,docSnapshot) =>{
           const data=docSnapshot.data();
           
           if (data.search.toLowerCase().includes(searchItem)){
          accu=[...accu,data]
           }
         
          accumulator={...accumulator ,[searchItem]:accu};
         console.log("accum",accumulator)
           return accumulator;
         },[])
         console.log("accum",accumulator)
         return accumulator
       }
       )
     }))
 

    //   accumulator={...accumulator, result}
    //   console.log("accu",accumulator)
    //  return accumulator;
  },Promise.resolve({})))

console.log("queryItems",queryItems);
return queryItems;
  } catch (error) {
    throw new Error(error);
  }
};
