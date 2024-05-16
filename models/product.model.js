import mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  sizes: {
    type: String,
    enum: ['L', 'XL', 'XXL', 'XS'],
    required: true,
  },
  color: {
    type: String,
    required: true,
  }
});

export const ProductModel = mongoose.model("Products", ProductSchema);

