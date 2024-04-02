import express from 'express';
import cors from 'cors';
import donorRouter from './donor.js';
import agencyRouter from './agency.js';
import ngoRouter from './ngo.js';
import * as controller from '../controller/index.js';
import { authenticateToken } from '../config/authMiddleware.js';

const router = express.Router();

router.use(cors());

router.use('/donor', donorRouter);
router.use('/agency', agencyRouter);
router.use('/ngo', ngoRouter);
router.post('/signup', controller.signup);
router.post('/create-session', controller.create_session);
router.get('/profile', authenticateToken, controller.profile);
router.post('/update-profile', authenticateToken, controller.update_profile);
// router.post('/logout', controller.logout);

export default router;