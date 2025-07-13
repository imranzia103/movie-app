import Movie from '../models/movieModel.js';

import asyncHandler from '../middlewares/asyncHandler.js';

import { authenticate, authorizeAdmin } from '../middlewares/authMiddleware.js';


const createMovie = asyncHandler(async(req, res) => {
    try {
        const newMovie = new Movie(req.body);
        const savedMovie = await newMovie.save();
        res.json(savedMovie);
        
    } catch (error) {
        res.status(400).json({error: "Movie Didnt Find"})
        
        
    }
});


const getAlltMovies = asyncHandler(async(req, res) => {
try {

    const movies = await Movie.find();
    res.json(movies)

    
} catch (error) {
    res.status(404).json({error: error.message})
    
}





});



const movieRivew = asyncHandler(async(req, res) => {
  try {
    
  } catch (error) {
    res.status(404).json({error: error.message})
  }
})


export {createMovie, getAlltMovies, movieRivew};