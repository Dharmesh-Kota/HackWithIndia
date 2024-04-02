import express from 'express';
import cors from 'cors';
import * as controller from '../controller/ngo.js';
import { authenticateNgoToken } from '../config/authMiddleware.js'

const router = express.Router();

router.use(cors());

router.get('/requests', authenticateNgoToken, controller.requests);

export default router;