import asyncHandler from "../middlewares/asyncHandler.js";
import Genre from "../models/genreModel.js";

const createGenre = asyncHandler(async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      res.json({ error: "Name is Required" });
    }

    const existingGenre = await Genre.findOne({ name });

    if (existingGenre) {
      return res.status(400).json({ error: "Genre Aleardy Exists" });
    }

    const genre = await new Genre({ name }).save();
    res.json(genre);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
});

const updateGenre = asyncHandler(async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;

    const genre = await Genre.findOne({ _id: id });
    if (!genre) {
      return res.status(400).json({ error: " Genre not Found" });
    }

    genre.name = name;

    const updatedGenre = await genre.save();
    res.json(updatedGenre);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

const removeGenre = asyncHandler(async (req, res) => {
  try {
    const genre = await Genre.findById(req.params.id);

    await Genre.deleteOne({ _id: genre._id });
    res.json({ message: "GEnre removed" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});



export { createGenre, updateGenre, removeGenre};
