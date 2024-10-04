import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // createdat and updateat
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;

//Notes: This is the model that save to database
