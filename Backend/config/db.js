import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbconnected=async()=>{
    try{
        mongoose.connect(process.env.MONGO_URL)
        console.log("mongodb Connected")
    }
  catch(error){
    console.log(error);
  }
}
export default dbconnected;