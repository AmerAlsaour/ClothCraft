import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const MONGO_URL = process.env.MONGO_URL
console.log("Mongo" , MONGO_URL );
async function connectDB( MONGO_URL ){
 


 await mongoose.connect(MONGO_URL)
    .then(() => {
      console.log('connection with database is done');
    
    })
    .catch(error => {
      console.error('error ', error);
    });
}

export default connectDB;