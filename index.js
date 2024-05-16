import express from "express";
import { homeRouter } from "./routes/home.js";

const app = express();

app.use(express.json());
app.use("/", homeRouter)

const port = process.env.PORT || 9001;

app.listen(port, () => {
    console.log("Server started on ", port)
});