const express = require("express");
const {
	signupController,
	loginController,
	deleteController,
	updateName,
	loginWithToken,
  resetPassword,
} = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/signup", signupController);
userRouter.post("/login", loginController);

userRouter.get("/login", loginWithToken);

userRouter.delete("/delete", deleteController);

userRouter.patch("/updateName", updateName);

userRouter.patch("/resetPassword",resetPassword)

module.exports = userRouter;
