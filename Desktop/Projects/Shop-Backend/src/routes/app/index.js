const express = require("express");
const UserController = require("../../controllers/app/UserController");
const AppRouter = express.Router();

const LoginValidate = require("../../validations/loginValidate");

//login Routes
AppRouter.post("/signup", LoginValidate.SignUpValidate, UserController.SignUp);
AppRouter.post("/signin", UserController.Signin);

module.exports = AppRouter;
