import mongoose from "mongoose";
import { DB_CONNECTION } from "./env.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(DB_CONNECTION);
    console.log("Connected to MongoDB");
    return true;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // !Note: i removed the return false because any async fun will auto. return a promise so when i retuen false its will be like i retuen a fulfield not rejected like i exprected
  }
};
