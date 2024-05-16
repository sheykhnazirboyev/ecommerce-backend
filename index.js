import express from "express";
import { homeRouter } from "./routes/home.js";
import { cors } from "./middleware/cors.js";
import connectDB from "./startup/db.js";
import { categoryRouter } from "./routes/categories.js";
import { productRouter } from "./routes/products.js";
import { usersRouter } from "./routes/users.js";
import { authRouter } from "./routes/auth.js";
import checkConfig from "./startup/config.js";

const app = express();

connectDB();
checkConfig();

app.use(cors);
app.use(express.json());
app.use("/", homeRouter)
app.use("/api/categories", categoryRouter);
app.use("/api/products", productRouter);
app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);

const port = process.env.PORT || 9001;

app.listen(port, () => {
    console.log("Server started on ", port)
});