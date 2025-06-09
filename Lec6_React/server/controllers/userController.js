// const loginController = (req,res)=>{
//   const {username,password} = req.body;
//   const user = userModel.users.find(({user})=>user.username === username)
//   if(!user){
//     res.status(400).send({ success: false, message: "username not found" });

const UserModel = require("../models/userModel");
const userModel = require("../models/userModel");

//   }
// }

// const signupController = (req,res)=>{
//   const userData = req.body;
//   // Check if username already exist
//   if(userModel.users.find(({username})=>username === userData.username)){
//     res.status(400).send({success:false,message:"username already exist"})
//   }else{
//     userModel.users.push(userData)
//     res.status(201).send({success:true,message:`Signned Up Successfully`})
//   }
// }

const loginController = async(req, res) => {
	const { username, password } = req.body;
	if (
		userModel.users.find((u) => u.username === username) &&
		userModel.users.find((u) => u.password === password)
	) {
		res
			.status(200)
			.send({ success: true, message: "User Logged In Successfully" });
	} else {
		res.status(400).send({
			success: true,
			message: "Something Went Wrong While Logging In",
		});
	}
};

const signupController =async (req, res) => {
	const userData = req.body;
	const {username} = userData;
	const doesUserExist = await UserModel.findUser(userData.username)
	console.log(userData);

	if (userModel.users.find(({ username }) => userData.username === username)) {
		res.status(403).send({ succes: false, message: "User Already Exists" });
	} else {
		userModel.users.push(userData);
		res
			.status(201)
			.send({ success: true, message: "User Signned Up Successfully" });
	}
};

module.exports = { loginController, signupController };
