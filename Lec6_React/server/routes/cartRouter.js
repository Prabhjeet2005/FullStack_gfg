const express = require("express");
const { addtocartController } = require("../controllers/cartController");
const authController = require("../controllers/authController");
const cartRouter = express.Router();

cartRouter.post("/add",authController,addtocartController)

module.exports = cartRouter;
