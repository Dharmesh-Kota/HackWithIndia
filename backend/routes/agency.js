import express from 'express';
import cors from 'cors';
import * as controller from '../controller/agency.js';
import { authenticateAgencyToken } from '../config/authMiddleware.js'
import dotenv from 'dotenv'

const router = express.Router();
dotenv.config();

const corsOptions = {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    allowedHeaders: ['Authorization', 'Content-Type', 'Role'],
  };
  
router.use(cors(corsOptions));

router.get('/', authenticateAgencyToken, controller.queue);
router.post('/confirm-supplies', authenticateAgencyToken, controller.cofirm_supplies);
router.post('/reject-supplies', authenticateAgencyToken, controller.reject_supplies);
router.get('/history', authenticateAgencyToken, controller.history);
router.post('/add-reward', authenticateAgencyToken, controller.add_reward);
router.post('/delete-reward', authenticateAgencyToken, controller.delete_reward);
router.get('/rewards', authenticateAgencyToken, controller.rewards);

export default router;