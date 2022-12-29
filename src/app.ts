import express from 'express';
import web from './routes/web';


const app = express();
const port = 3000;

// Routes
app.use("/api", web);

// JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
