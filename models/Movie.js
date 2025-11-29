import mongoose from 'mongoose';


const movieSchema = new mongoose.Schema({
title: { type: String, required: [true, 'Title is required'], trim: true },
director: { type: String, required: [true, 'Director is required'], trim: true },
category: { type: String, enum: ['Action','Crime','Animation','Drama','Comedy','Documentary','Horror','Sci-Fi','Romance','Other'], default: 'Other' },
duration: { type: Number, required: true, min: [1, 'Duration must be at least 1 minute'] },
releaseYear: { type: Number, required: true, min: [1888, 'Invalid year'] },
rating: { type: Number, min: 0, max: 10 }
}, { timestamps: true });


const Movie = mongoose.model('Movie', movieSchema);
export default Movie;