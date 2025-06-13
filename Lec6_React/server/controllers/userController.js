const UserModel = require("../models/userModel");

const loginController = async (req, res) => {
	try {
		const {username,password} = req.body;
		const user = await UserModel.findUser(username);
		const {password:userPassword,...userData} = user;	// Hides Password as Login Response

		if(password !== userPassword){
			res.status(401).send({success:false,message:"Incorrect Password"});
		}
		res.status(200).send({success:true,data:userData,message:"User Logged In"})
	} catch (error) {
		res.status(400).send({success:false,message:error.message})
	}
	
};

const signupController = async (req, res) => {
	try {
		const userData = req.body;
		const user = await UserModel.createUser(userData);
		if(!user){
			res.status(400).send({success:false,message:"Error While Registering"})
		}
		res
			.status(201)
			.send({ success: true, data:user,message: "User Registered Successfully" });
	} catch (error) {
		res.status(400).send({ success: false, message: error.message });
	}
};

const deleteController = async (req,res)=>{
	try {
		const {username,password} = req.body;
		const user = await UserModel.findUser(username);
		if(!user){
			res.status(400).send({success:false,message:"Username Not Found"})
		}
		const {password:userPassword,...userData} = user;
		if(password !== userPassword){
			res.status(400).send({success:false,message:"Password Incorrect"})
		}

		await UserModel.deleteUser(username) 
		res.status(200).send({success:true,message:"User Deleted Successfully"})
	} catch (error) {
		res.status(400).send({success:false,message:error.message})
	}
}

const updateName = async(req,res)=>{
	try {
		const userData = req.body;
		const {username,name} = userData;
		if(!username || !name){
			res.status(400).send({success:false,message:"Name or Username Not Entered"})
		}
		const user = await UserModel.updateName(userData);
		if(!user){
			res.status(400).send({success:false,message:"User Not Found"})
		}
		const {password:userPassword,...userUpdateData} = user
		res.status(200).send({success:true,data:userUpdateData,message:"Name Updated Successfully"})
	} catch (error) {
		res.status(400).send({success:false,message:error.message})
	}
}

module.exports = { loginController, signupController, deleteController,updateName };
