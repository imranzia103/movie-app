import express from 'express';

const router = express.Router();

//controllers

import { createGenre } from '../controllers/GenreController.js';




//Middlewares



import { authenticate, authorizeAdmin } from '../middlewares/authMiddleware.js';

router.route('/').post(authenticate, authorizeAdmin, createGenre);


export default router;