import express from "express";
import {
  authenticate,
  authorizedAdmin,


        } from "../middlewares/authMiddleware.js";

import {
  createUser,
  updateCurrentUserProfile,
  getCurrentUserProfile,
  getAllUsers,
  loginUser,
  logOutCurrentUser,
  deleteUserById,
  getUserById,
  updateUserById,

        } from "../controllers/userController.js";

const router = express.Router();

router
  .route("/")
  .post(createUser)
  .get(authenticate, authorizedAdmin, getAllUsers);

router.post("/auth", loginUser);

router.post("/logout", logOutCurrentUser);

router
  .route("/profile")
  .get( authenticate, getCurrentUserProfile)
  .put(authenticate, updateCurrentUserProfile);

router
  .route("/:id")
  .delete(authenticate, authorizedAdmin, deleteUserById)
  .get(authenticate, authorizedAdmin, getUserById)
  .put(authenticate, authorizedAdmin, updateUserById);

export default router;

