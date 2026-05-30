import mongoose from "mongoose";
import { DB_CONNECTION } from "./env.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(DB_CONNECTION);
    console.log("Connected to MongoDB");
    return true;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return false;
  }
};
