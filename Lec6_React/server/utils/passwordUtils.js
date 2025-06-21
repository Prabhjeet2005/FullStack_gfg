const {compare,genSalt,hash} = require("bcrypt")

const generatePassword = async (password)=>{
  const salt = await genSalt()
  const hashedPassword = hash(password,salt)
  return hashedPassword // Store in Database
}

const verifyPassword = async (password,hash)=>{
  const isPasswordSame = await compare(password,hash)
  return isPasswordSame
}

module.exports = {generatePassword,verifyPassword}

// (async ()=>{
//   const pwd = "Qwerty123@";
//   const hashedPwd = await generatePassword(pwd)
//   await(verifyPassword(pwd,hashedPwd))
// })()