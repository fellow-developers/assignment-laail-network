import express from 'express';
import web from './routes/web';


const app = express();
const port = 3000;

// JSON
app.use(express.json());

// Routes
app.use("/api", web);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
