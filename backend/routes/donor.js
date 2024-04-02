import express from 'express';
import cors from 'cors';
import * as controller from '../controller/donor.js';
import { authenticateDonorToken } from '../config/authMiddleware.js'

const router = express.Router();

router.use(cors());

router.get('/nearby-agency', authenticateDonorToken, controller.nearby_agency);

export default router;