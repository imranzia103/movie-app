import express from "express";

// controllers

import {
  createUser,
  loginUser,
  logoutCurrentUser,
  getAllUsers,
  getCurrentUserProfile,
  updateCurrentUserProfile,
 removeUser
} from "../controllers/userController.js";

//middlewares

import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .post(createUser)
  .get(authenticate, authorizeAdmin, getAllUsers);

router.post("/auth", loginUser);

router.post("/logout", logoutCurrentUser);

router
  .route("/profile")
  .get(authenticate, getCurrentUserProfile)
  .put( updateCurrentUserProfile);
 
  router
  .route("/:id")
  .delete(authenticate, authorizeAdmin,  removeUser)

export default router;
