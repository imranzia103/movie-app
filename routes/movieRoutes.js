import express from 'express';

import {createMovie, getAlltMovies, movieRivew } from '../controllers/movieController.js';

import { authenticate, authorizeAdmin } from '../middlewares/authMiddleware.js';

import checkId from '../middlewares/checkId.js';



const router = express.Router();

router.post("/create-movie",authenticate, authorizeAdmin, createMovie);

router.post("/:id/reviews", authenticate, checkId, movieRivew);




router.get("/allmovies", getAlltMovies)

export default router;