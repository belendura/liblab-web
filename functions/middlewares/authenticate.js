const { adminAuth } = require("../helpers/admin");

exports.checkIfAuthenticated = async (req, res, next) => {
  const { authorization } = req.headers;
  console.log("reqBody", req.body);

  let authToken;

  if (authorization && authorization.split(" ")[0] === "Bearer") {
    authToken = authorization.split(" ")[1].trim();
  }

  if (!authToken) {
    res.status(403).json({ error: "No token provided" });
  }

  try {
    const user = await adminAuth.verifyIdToken(authToken);

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
