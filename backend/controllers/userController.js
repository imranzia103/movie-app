import User from "../models/User.js";

import bcrypt from "bcryptjs";

import asyncHandler from "../middlewares/asyncHandler.js";

import createToken from "../utils/createToken.js";




const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  console.log(username, email, password);
  if (!username || !email || !password) {
    
    throw new Error("Please fill all fields");
  }
  
const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);



  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

 try {
    await newUser.save();
   createToken(res, newUser._id);
    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      
    });

 } catch (error) {
   
   throw new Error(" Invalid User Data...");
 }

});

const loginUser = asyncHandler(async (req, res) => {
const {  email, password } = req.body;
console.log(email, password);

  
  });



export { createUser };
