import Product from "../models/productModel.js";
import mongoose from "mongoose";

export const addProduct = async (req, res) => {
  const product = req.body; //where the user input the data

  if (!product.name || !product.price || !product.image) {
    return res.status(400).send("Please provide all the fields");
  }
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.log(`Error in created poroduct ${error}`);
    res.status(500).json({ success: false, message: "Server is error" });
  }
};

export const viewAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("Error fetching products");
    res.status(500).json({ success: false, message: "Server is error" });
  }
};

export const viewProuct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid product ID" });
  }
  try {
    const products = await Product.findById(id);
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("Error fetching this product");
    res.status(500).json({ success: false, message: "Server is error" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid product ID" });
  }
  try {
    const updateProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({ success: true, message: "Successfully Updated" });
  } catch (error) {
    console.log("Error updating products");
    res.status(500).json({ success: false, message: "Server is error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid product ID" });
  }
  try {
    const products = await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: `Product Deleted` });
  } catch (error) {
    console.log("Error deleting products");
    res.status(500).json({ success: false, message: "Server is error" });
  }
};
