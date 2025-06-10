import express from 'express';

const router = express.Router();

//controllers



//Middlewares



import { authenticate, authorizeAdmin } from '../middlewares/authMiddleware';

router.route('/').post(authenticate, authorizeAdmin, createGenre);


export default router;