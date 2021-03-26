const { firestore } = require("../../../admin");

exports.createRequestItemDocument = async (id, itemCredentials) => {
  const date = new Date();
  const docRequestRef = await firestore
    .collection(`size-requests/${id}/requests`)
    .add({ ...itemCredentials, createdAt: date });

  const docRequestSnapshot = await docRequestRef.get();
  return (data = docRequestSnapshot.data());
};
