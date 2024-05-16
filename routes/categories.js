import express from "express";
import { CategoryModel } from "../models/category.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const categories = await CategoryModel.find();
    res.json(categories);
})

export const categoryRouter = router