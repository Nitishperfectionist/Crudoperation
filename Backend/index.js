import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbconnected from "./config/db.js";
import router from "./routes/product.route.js";

dotenv.config();

const app=express();

//mongodb
dbconnected();

const PORT=3000;

app.use(express.json())
app.use(cors());
//api read
app.use('/api',router)


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})