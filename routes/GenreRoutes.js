import express from 'express';

const router = express.Router();

//controllers

import { createGenre } from '../controllers/GenreController.js';




//Middlewares



import { authenticate, authorizedAdmin } from '../middlewares/authMiddleware.js';

router
.route('/')
.post( createGenre);


export default router;