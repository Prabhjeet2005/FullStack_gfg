const express = require("express");
const { addtocartController } = require("../controllers/cartController");
const cartRouter = express.Router();

cartRouter.post("/addtocart",addtocartController)

module.exports = cartRouter;
