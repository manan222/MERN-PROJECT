const express = require("express");
const { signUp, logIn } = require("../controller/user-contoller");
const userRouter = express.Router();

userRouter.post("/signup", signUp);
userRouter.post("/login", logIn);

module.exports = userRouter;