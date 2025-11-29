import Movie from '../models/Movie.js';


// CREATE
export const createMovie = async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        res.status(201).json(movie);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// READ ALL
export const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// READ BY ID
export const getMovieById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) return res.status(404).json({ error: "Movie not found" });
        res.json(movie);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// UPDATE BY ID
export const updateMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(movie);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// DELETE BY ID
export const deleteMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);
        res.json({ message: "Movie deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
