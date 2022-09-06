import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import "express-async-errors";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

const PORT: number = Number(process.env.PORT) || 5000;
app.listen(PORT, () => 
    console.log(`Server online port ${PORT}`)
);
