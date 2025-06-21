const errorHandler = async (err,req,res,next)=>{
  // MongoDb Duplicate key error
  if(err.code === 11000){
    err.message = "This username or email already exists"
  }
  if(err.status){
    res.status(err.status)
  }
  res.send({success:false,message:err.message})
}

module.exports = errorHandler