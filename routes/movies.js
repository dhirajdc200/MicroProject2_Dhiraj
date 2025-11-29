import express from 'express';
import { 
    createMovie, 
    getMovies, 
    getMovieById,
    updateMovie,
    deleteMovie
} from '../controllers/movieController.js';

const router = express.Router();

// CREATE
router.post('/', createMovie);

// READ all
router.get('/', getMovies);

// READ by ID
router.get('/:id', getMovieById);

// UPDATE by ID
router.put('/:id', updateMovie);

// DELETE by ID
router.delete('/:id', deleteMovie);

export default router;
