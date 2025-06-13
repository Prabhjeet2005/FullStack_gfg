const express = require("express");
const { signupController, loginController, deleteController, updateName } = require("../controllers/userController");
const userRouter = express.Router()

userRouter.post("/signup",signupController)
userRouter.post("/login",loginController)
userRouter.delete("/delete",deleteController)
userRouter.patch("/updateName",updateName)

module.exports = userRouter;