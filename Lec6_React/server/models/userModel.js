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


// Static Method
userSchema.statics.createUser = async (userdata) => {
	const data = await UserModel.create(userdata);
	return data;
};
userSchema.statics.findUser = async (username) => {
	const user = (await UserModel.findOne({ username }, { _id: 0,__v:0 }))?.toObject(); // Because It Returns Document
	if (!user) {
		const err = new Error(`Username Doesn't Exist`);
		err.status = 404;
		throw err;
	}
	return user;
};

userSchema.statics.deleteUser = async(username)=>{
	const user = (await UserModel.findOne({username}))?.toObject();
	await UserModel.deleteOne(user);
}

userSchema.statics.updateName = async(userdata)=>{
	const {username,name} = userdata;
	const user = await UserModel.findOneAndUpdate({username},{$set:{name:name}});
	return user
}

const UserModel = model("users", userSchema);

module.exports = UserModel;
