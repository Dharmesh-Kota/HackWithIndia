import express from 'express';
import cors from 'cors';
import * as controller from '../controller/ngo.js';
import { authenticateNgoToken } from '../config/authMiddleware.js'

const router = express.Router();

const corsOptions = {
    origin: 'http://localhost:3000',
    allowedHeaders: ['Authorization', 'Content-Type'],
  };
  
router.use(cors(corsOptions));

router.get('/requests', authenticateNgoToken, controller.requests);

export default router;