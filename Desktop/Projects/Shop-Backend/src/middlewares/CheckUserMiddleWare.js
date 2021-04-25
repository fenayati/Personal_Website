const jwt = require("jsonwebtoken");
const User = require("../models/User");
function CheckUserMiddleWare(req, res, next) {
  //token from header
  //uerID from Token
  //find user
  //check roll
  try {
    var token = req.headers.authorization;
    var { userID } = jwt.verify(token, process.env.JWT_SECRET_KEY);
    User.findById(userID, (err, doc) => {
      if (err) {
        return res.status(500).json({ message: "server error" });
      }
      if (doc === null) {
        return res.status(401).json({ message: "user not " });
      }
      req.user = doc;

      next();
    });
  } catch (e) {
    return res.status(401).json({ message: "user  exist" });
  }
}

module.exports = CheckUserMiddleWare;
