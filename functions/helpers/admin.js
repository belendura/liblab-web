const admin = require("firebase-admin");

const serviceAccount = require("../config/liblab-web-firebase-adminsdk-vssbb-dbae431f92.json");
const { databaseURL, storageBucket } = require("../config/firebaseConfigKey");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL,
  storageBucket,
});

exports.firestore = admin.firestore();
exports.storage = admin.storage();
exports.adminAuth = admin.auth();
