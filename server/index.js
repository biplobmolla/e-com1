import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import userRouter from "./routes/users/UsersRoute.js"
import productRouter from "./routes/products/ProductsRoute.js"
import authRouter from "./routes/auth/AuthRoute.js"
import mongoose from "mongoose";


dotenv.config();


mongoose.connect(process.env.DATABASE_URI);

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.listen(process.env.PORT || 5000, () => console.log(`Server is running: http://localhost:${process.env.PORT || 5000}`));