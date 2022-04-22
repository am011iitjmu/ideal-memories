import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js"
import postrouter from "./routes/posts.js";
dotenv.config()
const app=express();
connectDB();
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())
app.use("/posts",postrouter)
const PORT=process.env.PORT||5000
app.listen(PORT,()=>{console.log(`Runnning on ${PORT}`)})