const { verifyToken } = require("../utils/jwtUtil");
const { responseCreator } = require("../utils/responseHandler");

// Ensures Valid Session

const authController = async (req,res,next) =>{
// verify token if valid it will return user data
const {authToken} = req.cookies;
const data = verifyToken(authToken);
if(data){
  const {username} = data;
  const {secret,password,...user} = await UserModel.findUser(username)
  // res.local -> placeholder allows us to manipulate and add extra data
  res.locals.user = user; // Send Data Across Various Controllers
  next()
}
}

module.exports = authController