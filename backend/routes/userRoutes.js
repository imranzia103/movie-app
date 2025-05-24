import express from "express";


// controllers

import { createUser, loginUser } from "../controllers/userController.js";

//misslewares


const router = express.Router();


router.route("/").post(createUser);




export default router;

