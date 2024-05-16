import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    if(process.env.DB_URL) {
        res.send({ hello: "World" });
    } else {
        res.send({ bye: "World" });
    }
});

export const homeRouter = router;