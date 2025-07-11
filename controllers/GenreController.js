import Genre from "../models/Genre.js";    

import asyncHandler from "../middlewares/asyncHandler.js";

const createGenre = asyncHandler(async (req, res) => {
  try {

    const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Genre name is required" });
  }

  
  
  
  
  const existingGenre = await Genre.findOne({ name });

    if (existingGenre) {
      return res.status(400).json({ message: "Genre already exists" });
    }


    const genre = new Genre({ name }).save();
    res.json(genre)



}  catch (error) {
    console.error(error);
    return res.ststus(400).json(error);
}

 
});

export { createGenre };