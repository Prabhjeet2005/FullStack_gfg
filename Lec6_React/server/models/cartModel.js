const { Schema, model } = require("mongoose");
const UserModel = require("./userModel");

const cartSchema = Schema({
	quantity: {
		type: Number,
		default: 0,
	},
	product: {
		type: { Object },
	},
});

cartSchema.statics.addtocart = async (userdata, product) => {
	const { username } = userdata;
	const user = (await UserModel.findOne({ username }))?.toObject();
	if (!user) {
		const error = new Error("User Not Found");
		error.status = 400;
		throw error;
	}
	const updatedCart = await UserModel.updateOne(
		{ "user.username": username },
		{ $inc: { "cart.$.quantity": 1 } }
	);
	if (!updatedCart) {
		const err = new Error("Error While Adding To Cart");
		err.status = 400;
		throw err;
	}
	return user
};

const CartModel = model("cart", cartSchema);
module.exports = CartModel;
