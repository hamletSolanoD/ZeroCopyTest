import express from 'express';
import loginController from '../api/loginController.js';

const router = express.Router();

router.use('/login', loginController);

export default router;
