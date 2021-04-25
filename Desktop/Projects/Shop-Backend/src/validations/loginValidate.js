const User = require("../models/User");
exports.SignUpValidate = function (req, res, next) {
  var errors = [];
  var { email, password } = req.body;

  if (password.length < 6) {
    errors.push({ key: "password", message: "password error " });
  }
  const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!emailRegex.test(email)) {
    errors.push({ key: "email", message: "email errors" });
  }
  if (errors.length > 0) {
    return res.status(400).json({ errors: errors });
  }
  User.findOne({ emil: email }, (err, doc) => {
    if (err) {
      return res.status(500).json({ message: "server error" });
    }
    if (doc !== null) {
      errors.push({ key: "email", message: "email exists" });
      return res.status(400).json({ errors: errors });
    }
    next();
  });
};
