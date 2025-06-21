const UserModel = require("../models/userModel");
const { responseCreator } = require("../utils/responseHandler");

const addtocartController = async (req,res,next)=>{
  try {
    const {username} = res.locals.user; // Geting From authController

    const data = await UserModel.addToCart(username,product)

    res.send(responseCreator(`${product.title} is added to cart `,data))
  } catch (error) {
    next(error);
  }
}

module.exports = { addtocartController };