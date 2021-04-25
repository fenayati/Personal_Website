const express = require("express");

const UserRouter = express.Router();

UserRouter.get("/", (req, res) => {
  res.json({ data: req.user });
});
module.exports = UserRouter;
