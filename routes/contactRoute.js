import express from "express"
import { createUser, deleteUser, getByIdUser, getUser, updateUser } from "../controllers/userController.js"
import authmiddleware from "../middleware/authMiddleware.js"


const contactRoutes=express.Router()

contactRoutes.post("/create",createUser)
contactRoutes.get("/get",authmiddleware,getUser)
contactRoutes.get("/get/:id",authmiddleware,getByIdUser)
contactRoutes.put("/update",authmiddleware,updateUser)
contactRoutes.delete("/delete",authmiddleware,deleteUser)


export default contactRoutes