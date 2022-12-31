import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import express from 'express';
import mongoose from 'mongoose';
import web from './routes/web';
import { connectDB } from './db/connectdb';

// Load environment variables from .env file
dotenv.config();
const PORT = process.env.PORT!;
const DATABASE_URL = process.env.DATABASE_URL!;
const DB_NAME = process.env.DB_NAME!;


// Create a new express application instance
const app = express();

// JSON middleware
app.use(express.json());

// Connect to database
mongoose.set('strictQuery', true); // https://mongoosejs.com/docs/guide.html#strictQuery
connectDB(DATABASE_URL, DB_NAME);

// Routes
app.use("/api", web);


// Start the server
app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
