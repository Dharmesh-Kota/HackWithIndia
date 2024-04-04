import express from 'express';
import cors from 'cors';
import * as controller from '../controller/donor.js';
import { authenticateDonorToken } from '../config/authMiddleware.js'

const router = express.Router();

const corsOptions = {
    origin: 'http://localhost:3000',
    allowedHeaders: ['Authorization', 'Content-Type'],
  };
  
router.use(cors(corsOptions));

router.get('/nearby-agency/:role', authenticateDonorToken, controller.nearby_agency);
router.get('/reward-store', authenticateDonorToken, controller.reward_store);
router.post('/redeem-reward', authenticateDonorToken, controller.reedem_reward);
router.post('/donate-supplies', authenticateDonorToken, controller.donate_supplies);

export default router;