import User from "../models/userModel.js"

export const createUser=async(req,res)=>{

    try {
        const { name,phone, email, message } = req.body;
        if (!name || !phone || !email||!message) {
          return res.json({
            message: "All fields are required",
          });
        }

        const user=await User.create({
           name,phone, email, message 
        })
        res.json({
            message:"Message delieverd successfully...we'll get back to you soon!!",
            data:user
        })
    }
    catch(error){
      res.json(error.message);
    }
}

export const getUser=async(req,res)=>{
  try {
     const user=await User.find()
      res.json({
        message:"Data fetched successfully!",
            data:user

      })
  } catch (error) {
     res.json(error.message);
  }
}


export const getByIdUser=async(req,res)=>{
    try {
       const user=await User.findById(req.params.id)
       res.json({
         message:"Data fetched successfully!",
            data:user
       })
    } catch (error) {
         res.json(error.message);
    }
}


export const updateUser=async(req,res)=>{
    try {
        const user=await User.findByIdAndUpdate(req.params.id,req.body,{
          new:true
        })
       res.json({
         message:"Data updated successfully!",
            data:user
       })
    } catch (error) {
         res.json(error.message);
    }
}


export const deleteUser=async(req,res)=>{
  try {
     const user=await User.findByIdAndDelete(req.params.id)
       res.json({
         message:"User deleted successfully!",
            
       })
  } catch (error) {
       res.json(error.message);
  }   
}