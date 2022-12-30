import express from 'express';
import web from './routes/web';
import mongoose from 'mongoose';


const app = express();
const PORT = 3000;
const DATABASE_URL = "mongodb://localhost:27017/local";

// JSON middleware
app.use(express.json());

// Routes
app.use("/api", web);


// Connect to database
mongoose.connect(DATABASE_URL, { dbName: "laail" });

// Start the server
app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
