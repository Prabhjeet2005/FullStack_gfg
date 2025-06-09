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
	cart: {
		type: [Object],
	},
});

const UserModel = model("users", userSchema);

// Static Method
userSchema.statics.createUser = async (userdata) => {
	const data = await UserModel.create(userdata);
	return data;
};
userSchema.statics.finduser = async (username) => {
	const user = (await UserModel.findOne({ username }, { _id: 0 }))?.toObject(); // Because It Returns Document
	if (!user) {
		const err = new Error(`Username Doesn't Exist`);
		err.status = 404;
		throw err;
	}
	return user;
};

module.exports = UserModel;
