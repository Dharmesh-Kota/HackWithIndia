import express from 'express';
import cors from 'cors'
import * as controller from '../controller/index.js';

const router = express.Router();

router.use(cors());

router.post('/signup', controller.signup);
router.post('/create-session', controller.create_session);
router.post('/logout', controller.logout);

export default router;