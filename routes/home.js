import express from "express";

const router = express.Router();


router.get("/", (req, res) => {
    res.send({ hello: "World", dbUrl: process.env.DB_UR });
});

export const homeRouter = router;