import express from 'express';
import cors from 'cors';
import * as controller from '../controller/ngo.js';
import { authenticateNgoToken } from '../config/authMiddleware.js'
import dotenv from 'dotenv'

const router = express.Router();
dotenv.config();

const corsOptions = {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    allowedHeaders: ['Authorization', 'Content-Type', 'Role'],
  };
  
router.use(cors(corsOptions));

router.get('/requests', authenticateNgoToken, controller.requests);

export default router;