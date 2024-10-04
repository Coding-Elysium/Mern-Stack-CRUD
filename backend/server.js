import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoute.js";
import { connectDB } from "./config/db.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json()); // to allow us to accept JSON data in the req.body

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`The server is running at localhost:5000`);
});
