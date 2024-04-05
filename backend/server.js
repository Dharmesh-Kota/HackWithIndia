import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import db from "./config/mongoose.js";
import cookieParser from "cookie-parser";
import crypto from "crypto";
import router from './routes/index.js';

dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use('/', router);

app.listen(PORT, () => {
    console.log("Server running on the port: ", PORT);
});
