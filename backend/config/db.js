import mongoose from "mongoose";
import "dotenv/config";


const connectDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Mongodb connected");
    }catch(error){
        console.log("connection faild", error.message);
    }
};

export default connectDB;