import mongoose from  "mongoose"

const connectdb=async(req,res)=>{
  if(!process.env.MONGO_URI){
    return console.log("MONGO_URI IS NOT AVALIABLE")
  }
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("MONGODB CONNECTED....")
  } catch (error) {
    console.log(error.message)
  }
}

export default connectdb