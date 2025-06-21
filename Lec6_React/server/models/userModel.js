const { Schema, model } = require("mongoose");

const userSchema = new Schema({
	username: {
		type: String,
		unique: true,
		required: [true, "Username Is Mandatory"],
	},
	email: {
		type: String,
		unique: true,
		required: [true, "Email Is Mandatory"],
	},
	name: {
		type: String,
		required: [true, "Name Is Mandatory"],
	},
	password: {
		type: String,
		required: [true, "Password is Mandatory"],
	},
	secret: {
		type: String,
	},
	cart: {
		type: [Object],
	},
	totalCount:{
		type:Number
	},
	totalValue:{
		type:Number
	}
});

// Static Method
userSchema.statics.createUser = async (userdata) => {
	const data = await UserModel.create(userdata);
	return data;
};

// Remove Confidential UserData
export const sanitizedUsedData = (userData) => {
	const { secret, password, __v, _id, ...data } = userData?.toObject();
	return data;
};

userSchema.statics.findUser = async (
	username,
	{ password = 0, secret = 0 }
) => {
	const user = (
		await UserModel.findOne({ username }, { _id: 0, __v: 0 })
	)?.toObject(); // Because It Returns Document
	if (!user) {
		const err = new Error(`Username Doesn't Exist`);
		err.status = 404;
		throw err;
	}
	return user;
};

userSchema.statics.deleteUser = async (username) => {
	const user = (await UserModel.findOne({ username }))?.toObject();
	await UserModel.deleteOne(user);
};

userSchema.statics.updateName = async (userdata) => {
	const { username, name } = userdata;
	const user = await UserModel.findOneAndUpdate(
		{ username },
		{ $set: { name: name } }
	);
	return user;
};

// {new:true} => give updated data
userSchema.statics.updatePassword = async (username, password) => {
	const updatedData = await UserModel.findOneAndUpdate(
		{ username },
		{ $set: { username } },
		{ new: true }
	);
	return updatedData;
};

userSchema.statics.addToCart = async (username, product) => {
	const userData = await UserModel.findOneAndUpdate(
		{ username },
		{
			$push: { cart: { ...product, quantity: 1 } },
			$inc: { totalCount: 1, totalValue: product.price },
		},
		{new:true}
	);
	return sanitizeUserData(userData)
};

const UserModel = model("users", userSchema);

module.exports = UserModel;
