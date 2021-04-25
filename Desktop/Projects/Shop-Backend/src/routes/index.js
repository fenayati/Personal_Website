const express = require("express");
const Router = express.Router();
const CheckAdmin = require("../middlewares/CheckAdminMiddleWare");
const CheckUser = require("../middlewares/CheckUserMiddleWare");

const AdminRouter = require("./admin");
Router.use("/admin", CheckAdmin, AdminRouter);

const AppRouter = require("./app");
Router.use("/app", AppRouter);

const UserRouter = require("./user");
Router.use("/user", CheckUser, UserRouter);

module.exports = Router;
