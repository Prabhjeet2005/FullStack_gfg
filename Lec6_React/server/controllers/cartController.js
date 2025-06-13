const CartModel = require("../models/cartModel");

const addtocartController = async (req,res)=>{
  try {
    const userData = req.body;
    const {username,product} = userData;
    if(!username){
      res.status(400).send({success:false,message:"Enter Username"})
    }
    const updatedCart = await CartModel.addtocart(userData,product);
    res.status(200).send({success:true,data:updatedCart,message:"Added To Cart Successfully"})
  } catch (error) {
    res.status(400).send({success:false,message:error.message});
  }
}

module.exports = { addtocartController };