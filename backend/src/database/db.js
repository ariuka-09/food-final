import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();
const connectionString = process.env.MONGODB;
export const connectDB = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("connection successful");
  } catch (error) {
    console.log("connection failed");
  }
};
