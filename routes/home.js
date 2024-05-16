import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    const db_url = process.env.DB_URL;
    res.send({ hello: "World", dbUrl: db_url });
});

export const homeRouter = router;