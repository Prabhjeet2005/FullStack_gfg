//  Time Based OTP

const speakeasy = require("speakeasy")
const QRcode = require("qrcode")

const generateQRcode = async(username)=>{
  const {base32:secret,otpauth_url} = speakeasy.generateSecret({
    issuer:"Prabhjeet",
    name: username,
  })
  const qrCode = await QRcode.toDataURL(otpauth_url)

  return {secret,qrCode}
}

const verifyOTP = (secret,otp) =>{
  const isVerified = speakeasy.totp.verify({
    secret,
    token: otp, // Not authToken
    encoding: "base32"
  })
  return isVerified
}

module.exports = {generateQRcode,verifyOTP}

// const secret = speakeasy.generateSecret({})
// base64: A-Z a-z 0-9 + /
// base32: A-Z 2-7