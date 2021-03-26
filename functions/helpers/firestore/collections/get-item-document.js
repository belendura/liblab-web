const { firestore } = require("../../admin");

exports.getItemDocument = async (collection, section, reference, color) => {
  if (!collection || !section || !reference || !color) return;

  const colRef = await firestore.collection(
    `collections/${collection}/${section}`
  );

  try {
    const availableColors = await colRef
      .where("reference", "==", reference)
      .get()
      .then((querySnapshot) => {
        return querySnapshot.docs.reduce((accum, docSnapshot) => {
          const data = docSnapshot.data();
          return (accum = [...accum, data.color]);
        }, []);
      });

    const queryItem = await colRef
      .where("reference", "==", reference)
      .get()
      .then((querySnapshot) => {
        return querySnapshot.docs.reduce((accum, docSnapshot) => {
          const data = docSnapshot.data();

          if (data.color.name === color) {
            data.availableColors = availableColors;
            accum.push(data);
          }
          return accum;
        }, []);
      });

    return queryItem;
  } catch (error) {
    throw new Error(error);
  }
};
