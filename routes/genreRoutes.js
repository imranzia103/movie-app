import express from 'express';

import {authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

import {createGenre, 
    updateGenre,
    removeGenre

 } from "../controllers/genreController.js";


const router = express.Router();



router.route("/").post(authenticate, authorizeAdmin, createGenre);

router.route("/:id").put( authenticate, authorizeAdmin, updateGenre);

router.route("/:id").delete( removeGenre)


export default router;