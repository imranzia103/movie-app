import express from 'express';

const router = express.Router();

//controllers

import { createGenre } from '../controllers/GenreController.js';




//Middlewares



import { authenticate, authorizedAdmin } from '../middlewares/authMiddleware.js';

router.route('/').post(authenticate, authorizedAdmin, createGenre);


export default router;