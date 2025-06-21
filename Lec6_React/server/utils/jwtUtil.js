const {sign,verify} = require("jsonwebtoken");
const { errorCreator } = require("./responseHandler");

const SECRET_KEY = "MY_SECRET_KEY"
const generateToken = (userData,time = "1h")=>{
  try {
    const {username} = userData;
    const token = sign({username},SECRET_KEY,{
      expiresIn: time
    })
    return token
  } catch (error) {
    next(error)
  }
}

const verifyToken = (token)=>{
  if(!token){
    errorCreator("Token Missing, Please Login To Continue",401)
  }
  return verify(token, SECRET_KEY);
}

module.exports = {generateToken,verifyToken}

// const token = generateToken({username:"Prabhjeet"},time="50s");
// console.log("🚀 ~ token:", token)
// const isTokenValid = verifyToken(token)
// console.log("🚀 ~ isTokenValid:", isTokenValid)
