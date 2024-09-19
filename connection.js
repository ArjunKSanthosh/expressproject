import mongoose from "mongoose";
export default async function connection() {
    // console.log(process.env.DB_URL);
    
    const db= await mongoose.connect(process.env.DB_URL+process.env.DB_NAME)
    console.log("database connected");
    return db;
}