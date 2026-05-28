import express from "express"
import connectdb from "./config/db.js"
import dotenv from "dotenv"
import cors from "cors"
import contactRoutes from "./routes/contactRoute.js"
import authRoute from "./routes/authRoute.js"


dotenv.config()

const app=express()


const PORT=process.env.PORT
connectdb()

app.use(cors())
app.use(express.json())


app.get("/",(req,res)=>{
    return res .send("Api is running...")
})

app.use("/api/auth",authRoute)
app.use("/api/contact",contactRoutes)


app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`)
})