import express from 'express';

import {createMovie } from '../controllers/movieController.js';

import { authenticate, authorizeAdmin } from '../middlewares/authMiddleware.js';



const router = express.Router();

router.route("/").post(createMovie);

export default router;