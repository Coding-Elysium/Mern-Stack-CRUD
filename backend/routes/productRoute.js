import express from "express";

import mongoose from "mongoose";
import {
  addProduct,
  deleteProduct,
  updateProduct,
  viewAllProducts,
  viewProuct,
} from "../controllers/controllers.js";

const router = express.Router();

router.post("/", addProduct);

router.get("/", viewAllProducts);

router.get("/:id", viewProuct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;
