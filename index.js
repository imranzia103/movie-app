import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";

//files

import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import genreRoutes from "./routes/GenreRoutes.js";

//config

dotenv.config();
connectDB();

const app = express();

//middlewars

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = process.env.PORT || 3000;

//Routes

app.use ("/api/v1/users", userRoutes);
app.use("/api/v1/genre" , genreRoutes  )




app.listen(PORT, () => console.log(`Server is Running on port ${PORT}`));
