const express = require("express");

const AdminRouter = express.Router();

AdminRouter.get("/", (req, res) => {
  res.json({ data: req.user });
});
module.exports = AdminRouter;
