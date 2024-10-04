import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to Database`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};
