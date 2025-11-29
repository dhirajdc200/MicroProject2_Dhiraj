import mongoose from "mongoose";
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import moviesRouter from './routes/movies.js';


dotenv.config();
connectDB();


const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use('/api/movies', moviesRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));