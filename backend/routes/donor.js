import express from 'express';
import cors from 'cors';
import * as controller from '../controller/donor.js';
import { authenticateDonorToken } from '../config/authMiddleware.js'

const router = express.Router();

router.use(cors());

router.get('/nearby-agency', authenticateDonorToken, controller.nearby_agency);
router.get('/reward-store', authenticateDonorToken, controller.reward_store);
router.post('/redeem-reward', authenticateDonorToken, controller.reedem_reward);
router.post('/donate-supplies', authenticateDonorToken, controller.donate_supplies);

export default router;