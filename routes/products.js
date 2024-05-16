import express from "express";
import { ProductModel } from "../models/product.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const products = await ProductModel.find();
    res.json(products);
})

export const productRouter = router