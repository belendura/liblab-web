const firebase = require("firebase");

const { firebaseConfigKey } = require("../config/firebaseConfigKey");

firebase.initializeApp(firebaseConfigKey);

exports.auth = firebase.auth();
