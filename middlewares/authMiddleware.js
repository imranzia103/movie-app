import jwt from "jsonwebtoken";
import asyncHandler from "../middlewares/asyncHandler.js";

import User from "../models/userModel.js";

//Check If the User is Authenticate OR not....

const authenticate = asyncHandler(async (req, res, next) => {
  let token;

  //Read JWT from jwt token;

  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not Authorized , Token FAILED ");
    }
  } else {
    res.status(401);
    throw new Error(" Not Authorized , No any Token Generated...");
  }
});

// Check if User Is Authorized Or Not ..

const authorizedAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send("Not Authrozied as an ADMIN");
  }
};
export {authenticate, authorizedAdmin};
