const { firestore } = require("../../admin");

const {
  createRequestItemDocument,
} = require("./utils/create-request-item-document");

exports.createSizeRequestDocument = async (
  itemCredentials,
  userCredentials
) => {
  if (!itemCredentials || !userCredentials) return;

  const colRef = firestore.collection(`size-requests`);
  const { reference, color, size } = itemCredentials;
  const { email } = userCredentials;

  try {
    const querySnapshot = await colRef.where("email", "==", email).get();

    if (!querySnapshot.empty) {
      querySnapshot.docs.map(async (docSnapshot) => {
        if (docSnapshot.exists) {
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
            queryRequestSnapshot.docs.map(async (doc) => {
              if (doc.exists) {
                const newDate = new Date();
                doc.ref.update({ createdAt: newDate });
              }
            });
          } else {
            await createRequestItemDocument(id, itemCredentials);
          }
        }
      });
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
