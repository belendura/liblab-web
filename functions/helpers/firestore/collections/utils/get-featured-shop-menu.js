const { firestore } = require("../../../admin");

exports.getfeaturedShopMenu = async () => {
  const documentRef = firestore.doc(`header/shopMenu`);

  try {
    const documentSnapshot = await documentRef.get();

    if (documentSnapshot.exists) {
      const data = documentSnapshot.data();
      const shopMenu = Object.entries(data).reduce((accum, [key, value]) => {
        value && accum.push(key);
        return accum;
      }, []);

      return shopMenu;
    }
  } catch (error) {
    throw new Error(error);
  }
};
