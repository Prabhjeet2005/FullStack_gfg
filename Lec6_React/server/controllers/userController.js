const UserModel = require("../models/userModel");
const { errorCreator, responseCreator } = require("../utils/responseHandler");
const {
	generatePassword,
	verifyPassword,
} = require("../utils/passwordUtils.js");
const { verifyToken, generateToken } = require("../utils/jwtUtil");
const { generateQRcode, verifyOTP } = require("../utils/totpUtil.js");

const loginController = async (req, res, next) => {
	try {
		const { username, password } = req.body;
		const user = await UserModel.findUser(username,{password:true});
		const { password: hashedPassword, ...userData } = user; // Hides Password as Login Response
		const isPasswordCorrect = await verifyPassword(password, hashedPassword);
		if (!isPasswordCorrect) {
			// const err = new Error("Password Don't Match")
			// err.status = 404
			// throw err
			errorCreator("Password Don't Match", 404);
		}
		// Send Token With userData as response
		const token = generateToken(userData);
		res.cookie("authToken", token, { maxAge: 3600_000, httpOnly: true }); // httpOnly makes it secure
		res
			.status(200)
			.send(responseCreator("User Logged In", { ...userData, token }));
		/*res
			.status(200)
			.send({ success: true, data: userData, message: "User Logged In" });*/
	} catch (error) {
		// res.status(400).send({ success: false, message: error.message });
		next(error);
	}
};

const signupController = async (req, res, next) => {
	try {
		const userData = req.body;
		const { username,password } = userData;
		const hashedPassword = await generatePassword(password);
		userData.password = hashedPassword;

		const {qrCode,secret} = generateQRcode(username)

		// If something not present in Schema it will reject it
		const user = await UserModel.createUser({...userData,secret});	
		if (!user) {
			errorCreator("Username Don't Exist", 404);
		}
		res.status(201).send({
			success: true,
			data: user,
			message: "User Registered Successfully",
		});
		res.send(
			`<section>
					<h1>Two Factor Setup</h1>
					<img src="${qrCode}"
				</section>`
		);
		// res.send(responseCreator("Username Logged In Successfully", userData));
	} catch (error) {
		// res.status(400).send({ success: false, message: error.message });
		next(error);
	}
};

const deleteController = async (req, res) => {
	try {
		const { username, password } = req.body;
		const user = await UserModel.findUser(username);
		if (!user) {
			res.status(400).send({ success: false, message: "Username Not Found" });
		}
		const { password: hashedPassword, ...userData } = user;
		if (password !== hashedPassword) {
			res.status(400).send({ success: false, message: "Password Incorrect" });
		}

		await UserModel.deleteUser(username);
		res
			.status(200)
			.send({ success: true, message: "User Deleted Successfully" });
	} catch (error) {
		res.status(400).send({ success: false, message: error.message });
	}
};

const updateName = async (req, res) => {
	try {
		const userData = req.body;
		const { username, name } = userData;
		if (!username || !name) {
			res
				.status(400)
				.send({ success: false, message: "Name or Username Not Entered" });
		}
		const user = await UserModel.updateName(userData);
		if (!user) {
			res.status(400).send({ success: false, message: "User Not Found" });
		}
		const { password: hashedPassword, ...userUpdateData } = user;
		res.status(200).send({
			success: true,
			data: userUpdateData,
			message: "Name Updated Successfully",
		});
	} catch (error) {
		res.status(400).send({ success: false, message: error.message });
	}
};

// Bearer Token  -> Postman (As a GET Request )
const loginWithToken = async (req, res, next) => {
	/* In req.headers :{
			authorization: "Bearer ewjhbcge{TOKEN}deiuvghieruwv"	
	}*/
	try {
		// const { authorization } = req.headers;
		// const [, token] = authorization.split(" ");
		const { authToken } = req.cookies;
		const data = verifyToken(token);
		if (data) {
			const { username } = data;
			const user = await UserModel.findUser(username);
			res.send(responseCreator("Logged In Successfully", { ...user, token }));
		}
	} catch (error) {
		next(error);
	}
};

const resetPassword = async (req,res,next)=>{
	try {
		const {username,password,otp} = req.body
		const user = await UserModel.findUser(username,{secret:true})
		const {secret} = user;

		const isVerified = verifyOTP(secret,otp)
		if(isOTPValid){
			const passwordHashed = await generatePassword(password);
			const message = await UserModel.updatePassword(username,passwordHashed)
		}else{
			errorCreator("Invalid OTP",401)
		}
	} catch (error) {
		next(error)
	}
}

module.exports = {
	loginController,
	signupController,
	deleteController,
	updateName,
	loginWithToken,
	resetPassword
};
