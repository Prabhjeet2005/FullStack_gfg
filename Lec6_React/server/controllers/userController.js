// const loginController = (req,res)=>{
//   const {username,password} = req.body;
//   const user = userModel.users.find(({user})=>user.username === username)
//   if(!user){
//     res.status(400).send({ success: false, message: "username not found" });

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

const loginController = (req, res) => {
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

const signupController = (req, res) => {
	const payload = req.body;
	console.log(payload);

	if (userModel.users.find(({ username }) => payload.username === username)) {
		res.status(403).send({ succes: false, message: "User Already Exists" });
	} else {
		userModel.users.push(payload);
		res
			.status(201)
			.send({ success: true, message: "User Signned Up Successfully" });
	}
};

module.exports = { loginController, signupController };
