const admin = require("../helpers/admin");

const getAuthToken = async (authorizationHeader, res) => {
  let authToken;
  if (authorizationHeader && authorizationHeader.split(" ")[1] === "Bearer") {
    return (authToken = authorizationHeader.split(" ")[1]);
  }

  if (!authToken) {
    res.status(403).json({ error: "No token provided" });
  }
};

exports.checkIfAuthenticated = async (req, res, next) => {
  const { authorization } = req.headers;
  let authToken;

  if (authorization && authorization.split(" ")[1] === "Bearer") {
    authToken = authorizationHeader.split(" ")[1];
  }

  if (!authToken) {
    res.status(403).json({ error: "No token provided" });
  }

  try {
    let checkRevoked = true;
    const user = await admin.auth().verifyIdToken(authToken, checkRevoked);
    req.body.authId = user.uid;
    return next();
  } catch (error) {
    if (error.code === "auth/id-token-revoked") {
      return res.status(401).json({ error: "Token has been revoked" }); //reauthentiate
    } else if (error.code === "auth/id-token-expired") {
      return res.status(401).json({ error: "Token has been expired" });
    } else {
      return res.status(401).json({ error: "Token is invalid" });
    }
  }
};
