import express, { urlencoded } from "express";

import dotenv, { configDotenv } from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"
import categoryRoute from '../backend/routes/categoryRoutes.js';



dotenv.config();

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(urlencoded({ extended: true }));
connectDB();

const PORT = process.env.PORT || 5173;


//Routes


app.use("/api/v1/users", userRoutes);
app.use("/api/v1/category", categoryRoute);

app.listen(PORT, () => {
  console.log(`Server is Running on Port : ${PORT}`);
});
