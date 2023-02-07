import 'dotenv/config';
import "./database/db.js"
import express from 'express';
import authRouter from './routes/auth.js'

const app = express();

app.use(express.json())

app.use('/api/v1', authRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("http://localhost:5000 👻👻"))