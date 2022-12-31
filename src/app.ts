import express from 'express';
import { connectDB } from './db/connectdb';
import web from './routes/web';


const app = express();
const PORT = 3000;
const DATABASE_URL = "mongodb://localhost:27017";

// JSON middleware
app.use(express.json());

// Connect to database
connectDB(DATABASE_URL);

// Routes
app.use("/api", web);


// Start the server
app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
